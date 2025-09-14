package com.chaitanya.food_ordering.repository;

import com.chaitanya.food_ordering.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CategoryRepo extends JpaRepository<Category, UUID> {
    List<Category>  findByRestaurantId(UUID id);
}
