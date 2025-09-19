package com.chaitanya.food_ordering.model;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Embeddable
@Data
public class ContactInformation {
    private String email;
    private String mobile;
    private String twitter;
    private String instagram;
}
