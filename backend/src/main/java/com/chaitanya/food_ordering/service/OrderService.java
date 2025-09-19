package com.chaitanya.food_ordering.service;

import com.chaitanya.food_ordering.model.*;
import com.chaitanya.food_ordering.repository.OrderItemRepo;
import com.chaitanya.food_ordering.repository.OrderRepository;
import com.chaitanya.food_ordering.request.OrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private AddressService addressService;

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private UserService userService;

    @Autowired
    private CartService cartService;

    @Autowired
    private OrderItemRepo orderItemRepo;

    @Autowired
    private OrderRepository orderRepository;

    public Orders createOrder(OrderRequest request, String jwt) throws  Exception{
        Address address = addressService.findById(request.getAddressID());
        Restaurant restaurant = restaurantService.findById(request.getRestaurantID());
        Users user = userService.userFromToken(jwt);
        Cart cart = cartService.findCartByUserId(user.getId());
        List<OrderItem> orderItemList = new ArrayList<>();
        Long totalAmount = 0L;

        for(CartItem cartItem : cart.getItems()){
            OrderItem orderItem = new OrderItem();
            orderItem.setFood(cartItem.getFood());
            orderItem.setIngredients(cartItem.getIngredients());
            orderItem.setQuantity(cartItem.getQuantity());
            Long total = cartItem.getQuantity() * cartItem.getFood().getPrice();
            orderItem.setTotalPrice(total);
            orderItemRepo.save(orderItem);
            orderItemList.add(orderItem);
            totalAmount += total;
        }
        Orders order = new Orders();

        order.setCustomer(user);
        order.setOrderStatus("PENDING");
        order.setRestaurant(restaurant);
        order.setItems(orderItemList);
        order.setDeliveryAddress(address);
        order.setTotalAmount(totalAmount);
        return orderRepository.save(order);
    }

    public void cancelOrder (UUID oid){
        Orders order = findById(oid);
        order.setOrderStatus("CANCELLED");
        orderRepository.save(order);
    }

    public Orders findById(UUID oid) {
        return orderRepository.findById(oid).orElseThrow(()->new RuntimeException("Order not found"));
    }

    public Orders updateStatus(UUID id, String status){
        Orders orders = findById(id);
        if(status.equals("OUT_FOR_DELIVERY")
                || status.equals("DELIVERED")
                || status.equals("COMPLETED")
                || status.equals("PENDING"))
            orders.setOrderStatus(status);
        else throw new RuntimeException("Enter a valid status");
        return orderRepository.save(orders);
    }

    public List<Orders> getUsersOrder(UUID uid){
        return orderRepository.findByCustomerId(uid);
    }

    public List<Orders> getRestaurantOrders(UUID rid, String status){
        List<Orders> orders = orderRepository.findByRestaurantId(rid);
        if(status != null) orders = orders.stream()
                .filter(order->order.getOrderStatus().equals(status)).collect(Collectors.toList());
        return orders;
    }

}
