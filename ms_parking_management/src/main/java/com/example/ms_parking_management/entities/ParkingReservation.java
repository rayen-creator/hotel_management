package com.example.ms_parking_management.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.example.ms_parking_management.entities.ParkingSpace.Status;

import java.util.Date;

@Document(collection = "parkingReservations")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ParkingReservation {

	@Id
   
    private String id;

    // private Date reservationDate;
    private String guestName;
    private String vehicleImmatricule;
    private Date arrivalDate;
    private Date departureDate;
    private Status status;
   // private String parkingSpaceId;
    
    @DBRef
    private ParkingSpace parkingSpace;
    
    public enum Status {
        accepted,
        declined,
        pending
    }
}
