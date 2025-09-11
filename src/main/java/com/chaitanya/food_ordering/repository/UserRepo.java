package com.chaitanya.food_ordering.repository;

import com.chaitanya.food_ordering.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepo extends JpaRepository<Users, UUID> {
    public Users findByEmail(String Email);
}
