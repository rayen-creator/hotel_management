package com.example.ms_parking_management.services.interfaces;

import com.example.ms_parking_management.entities.ParkingSpace;

import java.util.List;
import java.util.Optional;

public interface ParkingSpaceService {
    ParkingSpace addParkingSpace(ParkingSpace parkingSpace);

    Optional<ParkingSpace> getParkingSpace(String id);

    List<ParkingSpace> getAllParkingSpaces();

    boolean deleteParkingSpace(String id);
}