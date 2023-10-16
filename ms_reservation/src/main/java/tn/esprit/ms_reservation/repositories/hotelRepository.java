package tn.esprit.ms_reservation.repositories;

import org.springframework.stereotype.Repository;
import tn.esprit.ms_reservation.entities.hotel;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface hotelRepository extends JpaRepository<hotel , Integer> {
}
