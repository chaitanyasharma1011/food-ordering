package com.chaitanya.food_ordering.controller;

import com.chaitanya.food_ordering.model.Category;
import com.chaitanya.food_ordering.model.Restaurant;
import com.chaitanya.food_ordering.model.Users;
import com.chaitanya.food_ordering.service.CategoryService;
import com.chaitanya.food_ordering.service.RestaurantService;
import com.chaitanya.food_ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    private UserService userService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private RestaurantService restaurantService;

    @PostMapping("/admin/category")
    public ResponseEntity<Category> createCategory(@RequestBody Category reqCategory, @RequestHeader("Authorization") String jwt) throws Exception{
        Users user = userService.userFromToken(jwt);
        Category category = categoryService.createCategory(reqCategory.getName(),user.getId());
        return new ResponseEntity<>(category, HttpStatus.CREATED);
    }

    @GetMapping("/{rid}/category")
    public ResponseEntity<List<Category>> getCategory(@PathVariable UUID id) throws Exception{
        List<Category> categories = categoryService.findCategoryByRestaurantId(id);
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping("/admin/category")
    public ResponseEntity<List<Category>> getCategory(@RequestHeader("Authorization") String jwt) throws Exception{
        Users user = userService.userFromToken(jwt);
        Restaurant restaurant = restaurantService.findByOwnerId(user.getId());
        List<Category> categories = categoryService.findCategoryByRestaurantId(restaurant.getId());
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }
}
