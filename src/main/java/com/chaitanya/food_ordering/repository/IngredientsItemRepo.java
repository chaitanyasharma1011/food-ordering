package com.chaitanya.food_ordering.repository;

import com.chaitanya.food_ordering.model.IngredientItems;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface IngredientsItemRepo extends JpaRepository<IngredientItems, UUID> {
    List<IngredientItems> findByRestaurantId(UUID id);
}
