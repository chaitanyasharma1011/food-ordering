package com.chaitanya.food_ordering.service;

import com.chaitanya.food_ordering.dto.RestaurantDto;
import com.chaitanya.food_ordering.model.Restaurant;
import com.chaitanya.food_ordering.model.Users;
import com.chaitanya.food_ordering.repository.RestaurantRepo;
import com.chaitanya.food_ordering.request.CreateRestaurant;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RestaurantService {
    @Autowired
    private RestaurantRepo restaurantRepo;

    public Restaurant createRestaurant(CreateRestaurant restaurant, Users user){
        Restaurant newRest = new Restaurant();
        newRest.setName(restaurant.getName());
        newRest.setDescription(restaurant.getDescription());
        newRest.setOpeningHours(restaurant.getOpeningHours());
        newRest.setAddress(restaurant.getAddress());
        newRest.setCuisineType(restaurant.getCuisineType());
        newRest.setContactInformation(restaurant.getContactInformation());
        newRest.setRegistrationDate(LocalDateTime.now());
        newRest.setOwner(user);
        newRest.setImages(restaurant.getImages());
        return restaurantRepo.save(newRest);
    }

    public Restaurant updateRestaurant(UUID rid, CreateRestaurant updatedRestaurant){
        Restaurant restaurant = findById(rid);
        if(updatedRestaurant.getCuisineType() != null)
            restaurant.setCuisineType(updatedRestaurant.getCuisineType());
        if(updatedRestaurant.getDescription() != null)
            restaurant.setDescription(updatedRestaurant.getDescription());
        if(updatedRestaurant.getName() != null)
            restaurant.setName(updatedRestaurant.getName());
        if(updatedRestaurant.getImages() != null)
            restaurant.setImages(updatedRestaurant.getImages());
        return restaurantRepo.save(restaurant);
    }

    public void deleteRestaurant(UUID rid){
        Restaurant rest = findById(rid);

        restaurantRepo.delete(rest);
    }

    public List<Restaurant> fetchAllRestaurant(){
        return restaurantRepo.findAll();
    }

    public List<Restaurant> searchRestaurant(String query){
        return restaurantRepo.findBySearchQuery(query);
    }

    public Restaurant findById(UUID rid){
        return restaurantRepo.findById(rid)
                .orElseThrow(()->new RuntimeException("Restaurant with" + rid + "doesn't exist"));
    }

    public Restaurant findByOwnerId(UUID id){
        Restaurant restaurant = restaurantRepo.findByOwnerId(id);
        if(restaurant == null)
            throw new RuntimeException("Restaurant for user" + id + "doesn't exist");
        return restaurant;
    }

//    public RestaurantDto addToFavorites(Long restaurantId, Users user){
//
//    }
    public Restaurant toggleStatus(UUID id){
        Restaurant rest = findById(id);
        rest.setOpen(!rest.isOpen());
        return restaurantRepo.save(rest);
    }
}
