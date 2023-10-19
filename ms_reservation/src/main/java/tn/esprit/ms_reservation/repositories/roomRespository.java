package tn.esprit.ms_reservation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.ms_reservation.entities.Room;
import org.springframework.stereotype.Repository;

@Repository
public interface roomRespository extends JpaRepository<Room,Integer> {
}
