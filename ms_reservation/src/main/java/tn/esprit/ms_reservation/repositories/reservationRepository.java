package tn.esprit.ms_reservation.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.ms_reservation.entities.Reservation;
import tn.esprit.ms_reservation.entities.Room;
import tn.esprit.ms_reservation.entities.enums.reservationStatus;
import java.util.Date;
import java.util.List;
import tn.esprit.ms_reservation.entities.Reservation;
@Repository
public interface reservationRepository extends JpaRepository<Reservation,Integer> {

    List<Reservation> findByStatus (reservationStatus status);
}
