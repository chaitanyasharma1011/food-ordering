//package com.chaitanya.food_ordering;
//
//import com.chaitanya.food_ordering.model.IngredientItems;
//import com.chaitanya.food_ordering.model.Restaurant;
//import com.chaitanya.food_ordering.repository.IngredientsItemRepo;
//import com.chaitanya.food_ordering.repository.RestaurantRepo;
//import jakarta.annotation.PostConstruct;
//import org.springframework.stereotype.Component;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.List;
//import java.util.UUID;
//
//@Component
//public class IngredientRestaurantFixer {
//
//    private final IngredientsItemRepo ingredientsItemRepo;
//    private final RestaurantRepo restaurantRepo;
//
//    public IngredientRestaurantFixer(IngredientsItemRepo ingredientsItemRepo, RestaurantRepo restaurantRepo) {
//        this.ingredientsItemRepo = ingredientsItemRepo;
//        this.restaurantRepo = restaurantRepo;
//    }
//
//    @PostConstruct
//    @Transactional
//    public void assignRestaurantToIngredients() {
//        // Fetch your desired restaurant — the one to link these ingredients to
//        UUID restaurantId = UUID.fromString("9ab18251-3267-46fa-8e0b-861e504e0f97");
//        Restaurant restaurant = restaurantRepo.findById(restaurantId)
//                .orElseThrow(() -> new RuntimeException("Restaurant not found"));
//
//        // Fetch all ingredients without a restaurant
//        List<IngredientItems> unlinked = ingredientsItemRepo.findAll().stream()
//                .filter(item -> item.getRestaurant() == null)
//                .toList();
//
//        unlinked.forEach(item -> item.setRestaurant(restaurant));
//
//        ingredientsItemRepo.saveAll(unlinked);
//
//        System.out.println("✅ Updated " + unlinked.size() + " ingredients with restaurant ID " + restaurantId);
//    }
//}
