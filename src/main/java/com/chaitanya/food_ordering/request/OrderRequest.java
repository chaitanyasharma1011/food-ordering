package com.chaitanya.food_ordering.request;

import lombok.Data;

import java.util.UUID;

@Data
public class OrderRequest {
    private UUID restaurantID;
    private UUID addressID;
}
