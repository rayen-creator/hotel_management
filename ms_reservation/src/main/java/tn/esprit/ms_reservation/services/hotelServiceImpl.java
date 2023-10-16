package tn.esprit.ms_reservation.services;
import org.springframework.beans.factory.annotation.Autowired;
import tn.esprit.ms_reservation.entities.hotel;
import tn.esprit.ms_reservation.services.interfaces.hotelService;


import org.springframework.stereotype.Service;
import tn.esprit.ms_reservation.repositories.hotelRepository;
import java.util.List;

@Service
public class hotelServiceImpl implements hotelService {
    @Autowired
    hotelRepository hotelrepo;

    @Override
    public hotel addHotel(hotel hotel) {
        return this.hotelrepo.save(hotel);

    }

    @Override
    public hotel getHotel(int id) {
        if (hotelrepo.findById(id).isPresent()) {
            hotel hotell = hotelrepo.findById(id).get();
            return hotell;
        }else {
            return null;
        }    }

    @Override
    public hotel update(int id, hotel newhotel) {
        if (hotelrepo.findById(id).isPresent()) {
            hotel hotel = hotelrepo.findById(id).get();
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
    public List<hotel> all_hotels() {
        return hotelrepo.findAll();
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

