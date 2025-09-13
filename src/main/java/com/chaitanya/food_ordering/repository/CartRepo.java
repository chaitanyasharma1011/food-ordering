package com.chaitanya.food_ordering.repository;

import com.chaitanya.food_ordering.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CartRepo extends JpaRepository<Cart, UUID> {
}
