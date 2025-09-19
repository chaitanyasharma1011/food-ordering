package com.chaitanya.food_ordering.repository;

import com.chaitanya.food_ordering.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<Orders, UUID> {
    List<Orders> findByCustomerId(UUID id);
    List<Orders> findByRestaurantId(UUID id);
}
