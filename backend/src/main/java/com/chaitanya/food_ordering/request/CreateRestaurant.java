package com.chaitanya.food_ordering.request;

import com.chaitanya.food_ordering.model.Address;
import com.chaitanya.food_ordering.model.ContactInformation;
import lombok.Data;

import java.util.List;

@Data
public class CreateRestaurant {
    private String name;
    private String Description;
    private String cuisineType;
    private Address address;
    private ContactInformation contactInformation;
    private String openingHours;
    private List<String> images;
}
