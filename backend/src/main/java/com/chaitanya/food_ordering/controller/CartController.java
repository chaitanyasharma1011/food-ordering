package com.chaitanya.food_ordering.controller;

import com.chaitanya.food_ordering.model.Cart;
import com.chaitanya.food_ordering.model.CartItem;
import com.chaitanya.food_ordering.model.Users;
import com.chaitanya.food_ordering.request.AddCartItemRequest;
import com.chaitanya.food_ordering.request.MessageResponse;
import com.chaitanya.food_ordering.request.UpdateItemQuantity;
import com.chaitanya.food_ordering.service.CartService;
import com.chaitanya.food_ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @Autowired
    private UserService userService;

    @PutMapping("/add")
    public ResponseEntity<CartItem> addItemToCart(@RequestBody AddCartItemRequest req,
                                               @RequestHeader("Authorization") String jwt) throws Exception{
        CartItem newItem = cartService.addCartItem(req, jwt);
        return new ResponseEntity<>(newItem, HttpStatus.CREATED);
    }

    @PutMapping("/{itemId}/update")
    public ResponseEntity<CartItem> updateQuantity(@RequestBody UpdateItemQuantity req,
                                                  @PathVariable UUID itemId) throws Exception{
        CartItem newItem = cartService.updateCartItemQuantity(itemId,req.getQuantity());
        return new ResponseEntity<>(newItem, HttpStatus.OK);
    }

    @DeleteMapping("/{itemId}")
    public ResponseEntity<Cart> deleteItem(@PathVariable UUID itemId,
                                           @RequestHeader("Authorization") String jwt) throws Exception{
        Cart cart = cartService.removeCartItem(itemId,jwt);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @PutMapping("/clear")
    public ResponseEntity<Cart> updateQuantity(@RequestHeader("Authorization") String jwt)
            throws Exception{
        Cart cart = cartService.clearCart(jwt);
        return new ResponseEntity<>(cart , HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Cart> fetchcartItems(@RequestHeader("Authorization") String jwt)
            throws Exception{
        Users users = userService.userFromToken(jwt);
        Cart cart = cartService.findCartByUserId(users.getId());
        return new ResponseEntity<>(cart , HttpStatus.OK);
    }
}
