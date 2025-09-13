package com.chaitanya.food_ordering.controller;

import com.chaitanya.food_ordering.model.Restaurant;
import com.chaitanya.food_ordering.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/restaurants")
public class UserRestaurantController {
    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("/search")
    public ResponseEntity<List<Restaurant>> searchRestaurant(@RequestParam String query){
        List<Restaurant> restaurants = restaurantService.searchRestaurant(query);
        return new ResponseEntity<>(restaurants,HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<Restaurant>> searchRestaurant(){
        List<Restaurant> restaurants = restaurantService.fetchAllRestaurant();
        return new ResponseEntity<>(restaurants,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurant> searchRestaurant(@PathVariable UUID id){
        Restaurant restaurant = restaurantService.findById(id);
        return new ResponseEntity<>(restaurant,HttpStatus.OK);
    }
}
