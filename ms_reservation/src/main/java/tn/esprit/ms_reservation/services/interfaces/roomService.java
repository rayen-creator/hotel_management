package tn.esprit.ms_reservation.services.interfaces;

import tn.esprit.ms_reservation.entities.Room;

import java.util.List;

public interface roomService {

    public Room addRoom(int idHotel,Room room);

    public Room getRoom (int id);

    public Room update(int id, Room newRoom);

    public List<Room> all_Rooms();

    public boolean DeleteRoom(int id);
}

