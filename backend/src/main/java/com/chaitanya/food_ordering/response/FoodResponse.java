package com.chaitanya.food_ordering.response;

import com.chaitanya.food_ordering.model.Food;
import com.chaitanya.food_ordering.model.IngredientItems;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FoodResponse {
    private UUID id;
    private String name;
    private String description;
    private Long price;
    private UUID categoryId;
    private List<String> images;
    private boolean available;
    private boolean vegetarian;
    private boolean seasonal;
    private List<UUID> ingredientIds;
    private UUID restaurantId;

    public FoodResponse(Food food) {
        this.id = food.getId();
        this.name = food.getName();
        this.description = food.getDescription();
        this.price = food.getPrice();
        this.categoryId = food.getFoodCategory() != null ? food.getFoodCategory().getId() : null;
        this.images = food.getImages();
        this.available = food.isAvailable();
        this.vegetarian = food.isVegetarian();
        this.seasonal = food.isSeasonal();
        this.ingredientIds = food.getIngredients()
                .stream()
                .map(IngredientItems::getId)
                .toList();
        this.restaurantId = food.getRestaurant() != null ? food.getRestaurant().getId() : null;
    }
}
