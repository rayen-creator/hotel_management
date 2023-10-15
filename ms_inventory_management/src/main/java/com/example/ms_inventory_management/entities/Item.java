package com.example.ms_inventory_management.entities;
import lombok.*;
import javax.persistence.*;


@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String image;
    @Enumerated(EnumType.STRING)
    private ItemCategory category;
    @Enumerated(EnumType.STRING)
    private ItemUnit unit;

    private int quantity;


}








