package com.chaitanya.food_ordering.repository;

import com.chaitanya.food_ordering.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface FoodRepository extends JpaRepository<Food, UUID> {
    List<Food> findByRestaurantId(UUID id);

    @Query("SELECT f FROM Food WHERE lower(f.name) LIKE %:key% OR " +
            "lower(f.foodCategory.name) LIKE %:key%")
    List<Food> findByKey(String key);
}
