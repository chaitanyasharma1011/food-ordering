package com.chaitanya.food_ordering.service;

import com.chaitanya.food_ordering.model.Category;
import com.chaitanya.food_ordering.model.Restaurant;
import com.chaitanya.food_ordering.repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CategoryService {

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private CategoryRepo categoryRepo;

    public Category createCategory(String name, UUID userId){
        Restaurant restaurant = restaurantService.findByOwnerId(userId);
        Category createdCat = new Category();
        createdCat.setName(name);
        createdCat.setRestaurant(restaurant);
        return categoryRepo.save(createdCat);
    }

    public List<Category> findCategoryByRestaurantId(UUID id){
        return categoryRepo.findByRestaurantId(id);
    }

    public Category findCategoryById(UUID id){
        return categoryRepo.findById(id)
                .orElseThrow(()->new RuntimeException("Category doesn't exist"));
    }
}
