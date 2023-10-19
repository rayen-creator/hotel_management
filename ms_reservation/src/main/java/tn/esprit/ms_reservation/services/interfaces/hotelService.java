package tn.esprit.ms_reservation.services.interfaces;
import tn.esprit.ms_reservation.entities.Hotel;

import java.util.List;

public interface hotelService {
    public Hotel addHotel(Hotel hotel);

    public Hotel getHotel (int id);

    public Hotel update(int id, Hotel newhotel);

    public List<Hotel> all_hotels();

    public boolean DeleteHotel(int id);
}
