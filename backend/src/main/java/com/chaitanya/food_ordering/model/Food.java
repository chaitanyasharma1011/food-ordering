package com.chaitanya.food_ordering.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
    private String description;
    private Long price;

    @ManyToOne
    private Category foodCategory;

    private List<String> images;
    private boolean available;

    @ManyToOne
    private Restaurant restaurant;
    private boolean isVegetarian;
    private boolean isSeasonal;

    @ManyToMany
    private List<IngredientItems> ingredients = new ArrayList<>();

    private Date creationDate;
}
