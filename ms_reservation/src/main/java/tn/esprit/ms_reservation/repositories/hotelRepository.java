package tn.esprit.ms_reservation.repositories;

import org.springframework.stereotype.Repository;
import tn.esprit.ms_reservation.entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Repository
public interface hotelRepository extends JpaRepository<Hotel, Integer> {
    List<Hotel> findByCountry(String country);

}
