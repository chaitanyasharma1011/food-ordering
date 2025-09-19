package com.chaitanya.food_ordering.repository;

import com.chaitanya.food_ordering.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AddressRepo extends JpaRepository<Address, UUID> {
}
