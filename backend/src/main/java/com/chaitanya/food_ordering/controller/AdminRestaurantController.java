package com.chaitanya.food_ordering.controller;

import com.chaitanya.food_ordering.model.Restaurant;
import com.chaitanya.food_ordering.model.Users;
import com.chaitanya.food_ordering.request.CreateRestaurant;
import com.chaitanya.food_ordering.request.MessageResponse;
import com.chaitanya.food_ordering.response.ApiResponse;
import com.chaitanya.food_ordering.service.RestaurantService;
import com.chaitanya.food_ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/admin/restaurants")
public class AdminRestaurantController {
    @Autowired
    private UserService userService;

    @Autowired
    private RestaurantService restaurantService;
    @PostMapping("")
    public ResponseEntity<ApiResponse<Restaurant>> createRestaurant(@RequestBody CreateRestaurant restaurant,
                                                       @RequestHeader("Authorization") String jwt) throws Exception {
        Users user = userService.userFromToken(jwt);
        Restaurant createdRest = restaurantService.createRestaurant(restaurant,user);
        return new ResponseEntity<>
                (new ApiResponse<>(true,"Creation Successful",createdRest, HttpStatus.CREATED.value())
                        ,HttpStatus.CREATED);
    }

    @PatchMapping ("/{id}")
    public ResponseEntity<ApiResponse<Restaurant>> updateRestaurant(@RequestBody CreateRestaurant restaurant,
                                                                   @PathVariable UUID id) throws Exception {
        Restaurant updatedRest = restaurantService.updateRestaurant(id,restaurant);
        return new ResponseEntity<>
                (new ApiResponse<>(true,"Update Successful",updatedRest, HttpStatus.OK.value())
                        ,HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> updateRestaurant(@PathVariable UUID id) throws Exception {
        restaurantService.deleteRestaurant(id);
        MessageResponse messageResponse = new MessageResponse();
        messageResponse.setMessage("Deleted successfully");
        return new ResponseEntity<>(messageResponse,HttpStatus.OK);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<ApiResponse<MessageResponse>> updateStatus(@PathVariable UUID id) throws Exception {
        Restaurant restaurant = restaurantService.toggleStatus(id);
        MessageResponse messageResponse = new MessageResponse();
        messageResponse.setMessage("Updated successfully");
        return new ResponseEntity<>(new ApiResponse<>
                (true,"Toggled status", messageResponse,HttpStatus.OK.value()),HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<Restaurant> getRestaurant(@RequestHeader("Authorization") String jwt) throws Exception {
        Users user = userService.userFromToken(jwt);
        Restaurant restaurant = restaurantService.findByOwnerId(user.getId());
        return new ResponseEntity<>(restaurant,HttpStatus.OK);
    }
}
