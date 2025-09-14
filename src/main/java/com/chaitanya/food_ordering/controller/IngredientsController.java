package com.chaitanya.food_ordering.controller;

import com.chaitanya.food_ordering.model.IngredientCategory;
import com.chaitanya.food_ordering.model.IngredientItems;
import com.chaitanya.food_ordering.model.Restaurant;
import com.chaitanya.food_ordering.model.Users;
import com.chaitanya.food_ordering.service.IngredientsService;
import com.chaitanya.food_ordering.service.RestaurantService;
import com.chaitanya.food_ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientsController {
    @Autowired
    private IngredientsService ingredientsService;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurantService restaurantService;

    @PostMapping
    public ResponseEntity<IngredientCategory>
    createIngredientCategory(@RequestBody IngredientCategory category,
                             @RequestHeader("Authorization") String jwt) throws Exception{
        Users users = userService.userFromToken(jwt);
        Restaurant restaurant = restaurantService.findByOwnerId(users.getId());
        IngredientCategory newCat = ingredientsService.createCategory(category.getName(),restaurant.getId());
        return new ResponseEntity<>(newCat, HttpStatus.CREATED);
    }

    @PostMapping("/{cid}")
    public ResponseEntity<IngredientItems>
    createIngredientCategory(@RequestBody IngredientItems ingredientItem,
                             @RequestHeader("Authorization") String jwt,
                             @PathVariable UUID cid) throws Exception{
        Users users = userService.userFromToken(jwt);
        Restaurant restaurant = restaurantService.findByOwnerId(users.getId());
        IngredientItems item = ingredientsService.createIngredientItem(ingredientItem.getName(),
                cid,restaurant.getId());
        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }

    @PostMapping("/{id}/stock")
    public ResponseEntity<IngredientItems> updateStock(@PathVariable UUID id) throws Exception{
//        Users users = userService.userFromToken(jwt);
//        Restaurant restaurant = restaurantService.findByOwnerId(users.getId());
        IngredientItems item = ingredientsService
                .updateStock(id);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }

    @GetMapping("/{rid}/categories")
    public ResponseEntity<List<IngredientCategory>>
    getCategories(@PathVariable UUID rid) throws Exception{
        List<IngredientCategory> cats = ingredientsService.fetchRestaurantCategories(rid);
        return new ResponseEntity<>(cats, HttpStatus.OK);
    }

    @GetMapping("/{rid}/items")
    public ResponseEntity<List<IngredientItems>>
    getItems(@PathVariable UUID rid) throws Exception{
        List<IngredientItems> items = ingredientsService.findRestaurantsIngredientItems(rid);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }
}
