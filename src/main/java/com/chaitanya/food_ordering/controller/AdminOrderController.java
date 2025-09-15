package com.chaitanya.food_ordering.controller;

import com.chaitanya.food_ordering.model.Orders;
import com.chaitanya.food_ordering.model.Users;
import com.chaitanya.food_ordering.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/admin")
public class AdminOrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping("/restaurant/{rid}/orders")
    public ResponseEntity<List<Orders>> getUserOrders(@PathVariable UUID rid,
                                                      @RequestParam(required = false) String status)
            throws Exception{
        List<Orders> orders = orderService.getRestaurantOrders(rid,status);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @PutMapping("/orders/{oid}/{status}")
    public ResponseEntity<Orders> updateStatus(@PathVariable UUID oid,
                                                      @PathVariable String status)
            throws Exception{
        Orders orders = orderService.updateStatus(oid,status);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
}
