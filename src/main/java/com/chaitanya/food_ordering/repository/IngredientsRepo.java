package com.chaitanya.food_ordering.repository;

import com.chaitanya.food_ordering.model.IngredientCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface IngredientsRepo extends JpaRepository<IngredientCategory, UUID> {
    List<IngredientCategory> findByRestaurantId(UUID id);
}
