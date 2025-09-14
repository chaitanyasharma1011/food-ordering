package com.chaitanya.food_ordering.repository;

import com.chaitanya.food_ordering.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CartItemRepository extends JpaRepository<CartItem, UUID> {
}
