package com.chaitanya.food_ordering.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Embeddable
public class RestaurantDto {

    private UUID id;
    private String title;

    @Column(length = 1000)
    private List<String> images;

    private String description;
}
