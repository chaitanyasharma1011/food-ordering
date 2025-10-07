package com.chaitanya.food_ordering.request;


import com.chaitanya.food_ordering.model.IngredientItems;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
public class AddCartItemRequest {

    private UUID foodId;
    private Long quantity;
    private List<UUID> ingredients;

}
