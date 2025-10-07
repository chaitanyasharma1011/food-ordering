package com.chaitanya.food_ordering.controller;

import com.chaitanya.food_ordering.model.Food;
import com.chaitanya.food_ordering.model.Restaurant;
import com.chaitanya.food_ordering.model.Users;
import com.chaitanya.food_ordering.request.CreateFoodRequest;
import com.chaitanya.food_ordering.request.MessageResponse;
import com.chaitanya.food_ordering.response.FoodResponse;
import com.chaitanya.food_ordering.service.FoodService;
import com.chaitanya.food_ordering.service.RestaurantService;
import com.chaitanya.food_ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/admin/food")
public class AdminFoodController {
    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Food> createFood(@RequestBody CreateFoodRequest food, @RequestHeader("Authorization") String jwt) throws Exception{
        Users user = userService.userFromToken(jwt);
        System.out.println("Creating food...");
        Food createdFood = foodService.createFood(food, user.getId());
        return new ResponseEntity<>(createdFood,HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteFood(@PathVariable UUID id) throws Exception{
        foodService.deleteFood(id);
        MessageResponse messageResponse = new MessageResponse();
        messageResponse.setMessage("Deleted successfully !");
        return new ResponseEntity<>(messageResponse,HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Food> updateFoodAvailability(UUID id) throws Exception{
        Food updatedFood = foodService.updateAvailability(id);
        return new ResponseEntity<>(updatedFood,HttpStatus.OK);
    }
}
