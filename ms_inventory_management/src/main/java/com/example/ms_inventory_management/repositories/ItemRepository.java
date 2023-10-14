package com.example.ms_inventory_management.repositories;

import com.example.ms_inventory_management.entities.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  ItemRepository extends JpaRepository<Item,Long> {
}
