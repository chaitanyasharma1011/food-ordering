package com.chaitanya.food_ordering.controller;

import com.chaitanya.food_ordering.model.Users;
import com.chaitanya.food_ordering.response.ApiResponse;
import com.chaitanya.food_ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<ApiResponse<Users>> fetchUserDetails (@RequestHeader("Authorization") String jwt) throws Exception{
        Users user = userService.userFromToken(jwt);
        return new ResponseEntity<>(new ApiResponse<>(true,"Fetch Successful",user,HttpStatus.OK.value()), HttpStatus.OK);
    }

    @PostMapping("/toggleFavs/{id}")
    public ResponseEntity<ApiResponse<Users>> toggleUserFavourites
            (@RequestHeader("Authorization") String jwt,@PathVariable UUID id) throws Exception{
        Users user = userService.toggleFavourites(id,jwt);
        return new ResponseEntity<>(new ApiResponse<>(true, "Favourite Toggled" , user , HttpStatus.OK.value()),HttpStatus.OK
        );
    }
}
