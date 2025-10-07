package com.chaitanya.food_ordering.controller;

import com.chaitanya.food_ordering.model.Food;
import com.chaitanya.food_ordering.response.ApiResponse;
import com.chaitanya.food_ordering.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/food")
public class FoodController {
    @Autowired
    private FoodService foodservice;

    @GetMapping("/search")
    public ResponseEntity<List<Food>> searchKeyword(@RequestParam String key){
        List<Food> foods = foodservice.searchFood(key);
        return new ResponseEntity<>(foods, HttpStatus.OK);
    }

    @GetMapping("/restaurants/{id}")
    public ResponseEntity<ApiResponse<List<Food>>> searchKeyword(@RequestParam(required = false) Boolean isVegeterian,
                                                                @RequestParam(required = false) Boolean isSeasonal,
                                                                @RequestParam(required = false) String category,
                                                                @PathVariable UUID id){
        List<Food> foods = foodservice.getRestaurantsFood(id,isVegeterian,isSeasonal,category);
        return new ResponseEntity<>(new ApiResponse<>(true,
                "Fetched foods successfully", foods, HttpStatus.OK.value()), HttpStatus.OK);
    }
}
