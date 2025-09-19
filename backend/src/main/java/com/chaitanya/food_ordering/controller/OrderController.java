package com.chaitanya.food_ordering.controller;

import com.chaitanya.food_ordering.model.CartItem;
import com.chaitanya.food_ordering.model.Category;
import com.chaitanya.food_ordering.model.Orders;
import com.chaitanya.food_ordering.model.Users;
import com.chaitanya.food_ordering.request.AddCartItemRequest;
import com.chaitanya.food_ordering.request.OrderRequest;
import com.chaitanya.food_ordering.service.OrderService;
import com.chaitanya.food_ordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Orders> addOrder(@RequestBody OrderRequest req,
                                             @RequestHeader("Authorisation") String jwt) throws Exception{
        Orders order = orderService.createOrder(req, jwt);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

    @GetMapping("/history")
    public ResponseEntity<List<Orders>> getUserOrders(@RequestHeader("Authorisation") String jwt) throws Exception{
        Users user = userService.userFromToken(jwt);
        List<Orders> orders = orderService.getUsersOrder(user.getId());
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
}
