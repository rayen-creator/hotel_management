package tn.esprit.ms_reservation.services;
import org.springframework.beans.factory.annotation.Autowired;
import tn.esprit.ms_reservation.entities.Hotel;
import tn.esprit.ms_reservation.services.interfaces.hotelService;


import org.springframework.stereotype.Service;
import tn.esprit.ms_reservation.repositories.hotelRepository;
import java.util.List;

@Service
public class hotelServiceImpl implements hotelService {
    @Autowired
    hotelRepository hotelrepo;

    @Override
    public Hotel addHotel(Hotel hotel) {
        return this.hotelrepo.save(hotel);

    }

    @Override
    public Hotel getHotel(int id) {
        if (hotelrepo.findById(id).isPresent()) {
            Hotel hotell = hotelrepo.findById(id).get();
            return hotell;
        }else {
            return null;
        }    }

    @Override
    public Hotel update(int id, Hotel newhotel) {
        if (hotelrepo.findById(id).isPresent()) {
            Hotel hotel = hotelrepo.findById(id).get();
            hotel.setAdress(newhotel.getAdress());
            hotel.setCity(newhotel.getCity());
            hotel.setDescription(newhotel.getDescription());
            hotel.setName(newhotel.getName());
            hotel.setPostalCode(newhotel.getPostalCode());
            hotel.setRooms(newhotel.getRooms());
            return hotelrepo.save(hotel);
        }else {
            return null;
        }    }

    @Override
    public List<Hotel> all_hotels() {

        return hotelrepo.findAll();
    }

    @Override
    public List<Hotel> getHotelsByCountry(String country) {
        return hotelrepo.findByCountry(country);

    }

    @Override
    public boolean DeleteHotel(int id) {
        if (hotelrepo.findById(id).isPresent()) {
            hotelrepo.deleteById(id);
            return true;
        }else {
            return false;
        }
    }
    }

