package tn.esprit.ms_reservation.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.ms_reservation.entities.reservation;
@Repository
public interface reservationRepository extends JpaRepository<reservation,Integer> {
}
