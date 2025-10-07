package com.chaitanya.food_ordering.service;

import com.chaitanya.food_ordering.model.Category;
import com.chaitanya.food_ordering.model.Food;
import com.chaitanya.food_ordering.model.IngredientItems;
import com.chaitanya.food_ordering.model.Restaurant;
import com.chaitanya.food_ordering.repository.FoodRepository;
import com.chaitanya.food_ordering.request.CreateFoodRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class FoodService {

    @Autowired
    private FoodRepository foodRepository;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private IngredientsService ingredientsService;

    public Food createFood(CreateFoodRequest food, UUID uid){
        System.out.println(food);
        Food createdFood = new Food();
        Restaurant rest = restaurantService.findByOwnerId(uid);
        Category category = categoryService.findCategoryById(food.getCategory());
        createdFood.setName(food.getName());
        createdFood.setFoodCategory(category);
        createdFood.setDescription(food.getDescription());
        createdFood.setImages(food.getImages());
        List <IngredientItems> ingredientItems = food.getIngredients().stream().
                map( id -> ingredientsService.findIngredientById(id)).toList();
        createdFood.setIngredients(ingredientItems);
        createdFood.setPrice(food.getPrice());
        createdFood.setRestaurant(rest);
        createdFood.setAvailable(food.isAvailable());
        createdFood.setVegetarian(food.isVegetarian());
        return foodRepository.save(createdFood);
    }

    public void deleteFood(UUID id) throws Exception{
        Food food = findFoodById(id);
        foodRepository.delete(food);
    }

    public Food findFoodById(UUID id){
        Food food = foodRepository.findById(id)
                .orElseThrow( () -> new RuntimeException("Food with given Id Not found"));
        return food;
    }

    public List<Food> getRestaurantsFood(UUID id,
                                         Boolean isVegeterian,
                                         Boolean isSeasonal,
                                         String foodCategory
                                         ){
        List<Food> foods = foodRepository.findAll();
        if(isVegeterian != null) foods = filterByVeg(foods, isVegeterian);
        if(isSeasonal != null) foods = filterBySeasonal(foods, isSeasonal);
        if(foodCategory != null && !foodCategory.isEmpty()) 
            foods = filterByCategory(foods, foodCategory);
        System.out.println(isSeasonal);
        System.out.println(isVegeterian);
        System.out.println(foodCategory);
//        System.out.println(foods);
        return foods;
    }

    private List<Food> filterByCategory(List<Food> foods, String foodCategory) {
        return foods.stream()
                .filter(food -> {
                    if(food.getFoodCategory() != null)
                        return food.getFoodCategory().getName().contains(foodCategory);
                    return false;
                }).collect(Collectors.toList());
    }

    private List<Food> filterBySeasonal(List<Food> foods, Boolean isSeasonal) {
        return foods.stream()
                .filter(food -> food.isSeasonal() == isSeasonal).collect(Collectors.toList());
    }

    private List<Food> filterByVeg(List<Food> foods, boolean isVegeterian) {
        return foods.stream()
                .filter(food -> food.isVegetarian() == isVegeterian).collect(Collectors.toList());
    }

    public List<Food> searchFood(String keyword){
        return foodRepository.findByKey(keyword);
    }

    public Food updateAvailability(UUID fid){
        Food food = findFoodById(fid);
        food.setAvailable(!food.isAvailable());
        return foodRepository.save(food);
    }

}
