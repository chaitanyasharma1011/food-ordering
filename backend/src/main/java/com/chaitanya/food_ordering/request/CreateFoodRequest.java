package com.chaitanya.food_ordering.request;

import com.chaitanya.food_ordering.model.Category;
import com.chaitanya.food_ordering.model.IngredientItems;
import com.chaitanya.food_ordering.model.Restaurant;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
public class CreateFoodRequest {
    private String name;
    private String description;
    private Long price;
    private UUID category;

    private List<String> images;
    private boolean available;

    private boolean vegetarian;
    private boolean seasonal;

    private List<UUID> ingredients ;
}
