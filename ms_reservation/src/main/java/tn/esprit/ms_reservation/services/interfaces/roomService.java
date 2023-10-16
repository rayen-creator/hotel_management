package tn.esprit.ms_reservation.services.interfaces;

import tn.esprit.ms_reservation.entities.room;

import java.util.List;

public interface roomService {

    public room addRoom(room room);

    public room getRoom (int id);

    public room update(int id, room newRoom);

    public List<room> all_Rooms();

    public boolean DeleteRoom(int id);
}

