package com.chaitanya.food_ordering.service;

import com.chaitanya.food_ordering.model.Cart;
import com.chaitanya.food_ordering.model.CartItem;
import com.chaitanya.food_ordering.model.Food;
import com.chaitanya.food_ordering.model.Users;
import com.chaitanya.food_ordering.repository.CartItemRepository;
import com.chaitanya.food_ordering.repository.CartRepo;
import com.chaitanya.food_ordering.request.AddCartItemRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class CartService {
    @Autowired
    private UserService userService;

    @Autowired
    private FoodService foodService;

    @Autowired
    private CartRepo cartRepo;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private IngredientsService ingredientsService;

    public CartItem addCartItem(AddCartItemRequest item, String jwt) throws Exception{
        CartItem newItem = new CartItem();
        Food food = foodService.findFoodById(item.getFoodId());
        Users users = userService.userFromToken(jwt);
        Cart cart = findCartByUserId(users.getId());

        for(CartItem cartItem : cart.getItems()){
            if(cartItem.getFood().equals(food))
                return updateCartItemQuantity(cartItem.getId(),cartItem.getQuantity() + item.getQuantity());
        }

        newItem.setFood(food);
        newItem.setTotalPrice(item.getQuantity() * food.getPrice());
        newItem.setQuantity(item.getQuantity());
        newItem.setIngredients(item.getIngredients()
                .stream().map(id->ingredientsService.findIngredientById(id)).toList());
        newItem.setCart(cart);
        cart.addItem(newItem);
//        cart.setTotal(calculateCartTotal(cart));
        cartRepo.save(cart);
        return newItem;
    }


    public CartItem updateCartItemQuantity(UUID id, Long quantity) {
        CartItem item = findCartItemById(id);
        item.setQuantity(quantity);
        item.setTotalPrice(item.getFood().getPrice() * quantity);
        return cartItemRepository.save(item);
    }

    public CartItem findCartItemById(UUID id) {
        return cartItemRepository.findById(id).orElseThrow(()-> new RuntimeException("Invalid Cart Item"));
    }

    public Cart findCartByUserId(UUID id) {
        return cartRepo.findByCustomerId(id);
    }

    public Cart findCartById(UUID id) {
        return cartRepo.findById(id).orElseThrow(()-> new RuntimeException("Invalid Cart Item"));
    }

    public Cart removeCartItem(UUID id, String jwt) throws Exception{
        Users users = userService.userFromToken(jwt);
        Cart cart = findCartByUserId(users.getId());
        CartItem cartItem = findCartItemById(id);
        cart.removeItem(cartItem);
//        cart.setTotal(calculateCartTotal(cart));
        return cartRepo.save(cart);
    }

    public Long calculateCartTotal(Cart cart){
        Long total = 0L;
        for(CartItem item : cart.getItems())
            total += item.getFood().getPrice() * item.getQuantity();
        return total;
    }

    public Cart clearCart(String jwt) throws Exception{
        Users users = userService.userFromToken(jwt);
        Cart cart = findCartByUserId(users.getId());

        cart.getItems().clear();
//        cart.setTotal(calculateCartTotal(cart));
        return cartRepo.save(cart);
    }

}
