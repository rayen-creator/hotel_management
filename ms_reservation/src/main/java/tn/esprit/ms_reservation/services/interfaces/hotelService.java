package tn.esprit.ms_reservation.services.interfaces;
import tn.esprit.ms_reservation.entities.hotel;

import java.util.List;

public interface hotelService {
    public hotel addHotel(hotel hotel);

    public hotel getHotel (int id);

    public hotel update(int id, hotel newhotel);

    public List<hotel> all_hotels();

    public boolean DeleteHotel(int id);
}
