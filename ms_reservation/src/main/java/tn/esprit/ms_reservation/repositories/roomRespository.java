package tn.esprit.ms_reservation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.ms_reservation.entities.Hotel;
import tn.esprit.ms_reservation.entities.Room;
import org.springframework.stereotype.Repository;
import tn.esprit.ms_reservation.entities.enums.roomType;
import java.util.List;

@Repository
public interface roomRespository extends JpaRepository<Room,Integer> {

    List<Room> findByHotel_IdHotel(int hotel);
    List<Room> findByHotel_idHotelAndAndType(int hotel,roomType type );

}
