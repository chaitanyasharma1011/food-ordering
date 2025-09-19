package com.chaitanya.food_ordering.service;

import com.chaitanya.food_ordering.model.IngredientCategory;
import com.chaitanya.food_ordering.model.IngredientItems;
import com.chaitanya.food_ordering.model.Restaurant;
import com.chaitanya.food_ordering.repository.IngredientsItemRepo;
import com.chaitanya.food_ordering.repository.IngredientsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class IngredientsService {
    @Autowired
    private IngredientsRepo ingredientsRepo;

    @Autowired
    private IngredientsItemRepo ingredientsItemRepo;

    @Autowired
    private RestaurantService restaurantService;

    public IngredientCategory createCategory(String name, UUID rid){
        IngredientCategory ingredientCategory = new IngredientCategory();
        Restaurant restaurant = restaurantService.findById(rid);
        ingredientCategory.setName(name);
        ingredientCategory.setRestaurant(restaurant);
        return ingredientsRepo.save(ingredientCategory);
    }

    public IngredientCategory fetchCategoryById(UUID cid){
        return ingredientsRepo.findById(cid)
                .orElseThrow(()->new RuntimeException("Category not found"));
    }

    public List<IngredientCategory> fetchRestaurantCategories(UUID rid){
        return ingredientsRepo.findByRestaurantId(rid);
    }

    public IngredientItems createIngredientItem(String name, UUID cid, UUID rid){
        IngredientItems ingredientItems = new IngredientItems();
        IngredientCategory ingredientCategory = fetchCategoryById(cid);
        Restaurant restaurant = restaurantService.findById(rid);
        ingredientItems.setName(name);
        ingredientItems.setCategory(ingredientCategory);
        ingredientCategory.setRestaurant(restaurant);
        return ingredientsItemRepo.save(ingredientItems);
    }

    public List<IngredientItems> findRestaurantsIngredientItems(UUID rid){
        return ingredientsItemRepo.findByRestaurantId(rid);
    }

    public IngredientItems updateStock(UUID id){
        IngredientItems item = ingredientsItemRepo.findById(id)
                .orElseThrow(()->new RuntimeException("Item doesn't exist"));
        item.setInStock(!item.isInStock());
        return ingredientsItemRepo.save(item);
    }
}
