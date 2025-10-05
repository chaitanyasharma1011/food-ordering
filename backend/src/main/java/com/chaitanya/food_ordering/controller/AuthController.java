package com.chaitanya.food_ordering.controller;

import com.chaitanya.food_ordering.model.Users;
import com.chaitanya.food_ordering.response.ApiResponse;
import com.chaitanya.food_ordering.response.AuthResponse;
import com.chaitanya.food_ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<AuthResponse>> registerUser(@RequestBody Users user) throws Exception{
        return new ResponseEntity<>(new ApiResponse<>(true,"Registration Successful",
                userService.registerUser(user) , HttpStatus.CREATED.value()),HttpStatus.CREATED) ;
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthResponse>> loginUser(@RequestBody Users user) throws Exception{
        return new ResponseEntity<>(new ApiResponse<>(true,"Login Successful",
                userService.loginUser(user) , HttpStatus.OK.value()),HttpStatus.OK) ;
    }
}
