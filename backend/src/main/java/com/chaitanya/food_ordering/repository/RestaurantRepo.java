package com.chaitanya.food_ordering.repository;

import com.chaitanya.food_ordering.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface RestaurantRepo extends JpaRepository<Restaurant, UUID> {
    @Query("SELECT r FROM Restaurant r WHERE lower(r.name) LIKE lower(concat('%',:query,'%'))")
    List<Restaurant> findBySearchQuery(String query);
    Restaurant findByOwnerId(UUID id);
}
