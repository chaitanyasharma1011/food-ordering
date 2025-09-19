package com.chaitanya.food_ordering.service;

import com.chaitanya.food_ordering.model.Address;
import com.chaitanya.food_ordering.repository.AddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class AddressService {

    @Autowired
    private AddressRepo addressRepo;

    public Address createAddress(Address address){
        return addressRepo.save(address);
    }

    public Address findById(UUID id){
        return addressRepo.findById(id).orElseThrow(()->new RuntimeException("Address not found"));
    }
}
