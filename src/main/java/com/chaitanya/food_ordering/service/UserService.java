package com.chaitanya.food_ordering.service;

import com.chaitanya.food_ordering.model.Cart;
import com.chaitanya.food_ordering.model.Users;
import com.chaitanya.food_ordering.repository.CartRepo;
import com.chaitanya.food_ordering.repository.UserRepo;
import com.chaitanya.food_ordering.response.AuthResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    @Autowired
    private CartRepo cartRepo;

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private JwtService jwtService;

    public ResponseEntity<AuthResponse> registerUser(Users user) throws Exception {
        Users existingUser = userRepo.findByEmail(user.getEmail());
        if(existingUser != null)
            throw new Exception("Email is associated with another account");
        Users newUser = new Users();
        newUser.setFullName(user.getFullName());
        newUser.setEmail(user.getEmail());
        newUser.setPassword(encoder.encode(user.getPassword()));

        Users createdUser = userRepo.save(newUser);

        Cart newCart = new Cart();
        newCart.setCustomer(createdUser);
        cartRepo.save(newCart);

        Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtService.generateToken(user.getEmail());
        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(token);
        authResponse.setMessage("Registration Successful !");
        authResponse.setRole(createdUser.getRole());
        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }

    public ResponseEntity<AuthResponse> loginUser(Users user) {
        String email = user.getEmail();
        String password = user.getPassword();

        Users dbuser = userRepo.findByEmail(email);

        if(dbuser == null)
            throw new UsernameNotFoundException("Email is not signed up");
        System.out.println(dbuser.getPassword());
        System.out.println(password);
        System.out.println(encoder.encode(password));
//        if(!dbuser.getPassword().equals(encoder.encode(password)))
//            throw new UsernameNotFoundException("Invalid Credentials");

        Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(email,password));
        if(!authentication.isAuthenticated())
            throw new BadCredentialsException("Invalid Credentials");

        String token = jwtService.generateToken(email);
        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(token);
        authResponse.setMessage("Login Successful");
        authResponse.setRole(dbuser.getRole());
        return new ResponseEntity<>(authResponse,HttpStatus.OK);
    }

    public Users userFromToken(String token) throws Exception{
        String email = jwtService.extractUsername(token.substring(7));
        Users user = userRepo.findByEmail(email);
        return user;
    }
}
