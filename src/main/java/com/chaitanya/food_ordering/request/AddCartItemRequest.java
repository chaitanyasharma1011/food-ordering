package com.chaitanya.food_ordering.request;


import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
public class AddCartItemRequest {

    private UUID foodId;
    private Integer quantity;
    private List<String> ingredients;

}
