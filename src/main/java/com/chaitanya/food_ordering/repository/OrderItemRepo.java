package com.chaitanya.food_ordering.repository;

import com.chaitanya.food_ordering.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface OrderItemRepo extends JpaRepository<OrderItem, UUID> {
}
