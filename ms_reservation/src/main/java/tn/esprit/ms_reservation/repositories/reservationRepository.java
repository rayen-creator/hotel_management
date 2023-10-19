package tn.esprit.ms_reservation.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.ms_reservation.entities.Reservation;
import tn.esprit.ms_reservation.entities.Room;

import java.util.Date;
import java.util.List;

@Repository
public interface reservationRepository extends JpaRepository<Reservation,Integer> {

}
