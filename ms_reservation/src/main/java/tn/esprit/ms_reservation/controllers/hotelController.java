package tn.esprit.ms_reservation.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.ms_reservation.entities.hotel;
import tn.esprit.ms_reservation.services.hotelServiceImpl;

import java.util.List;

@RestController
@RequestMapping(value = "/api/hotel")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class hotelController {

    @Autowired
    private hotelServiceImpl hotelService;

    @PostMapping
    public hotel addHotel(@RequestBody hotel hotel) {
        return hotelService.addHotel(hotel);
    }

    @GetMapping("/{id}")
    public hotel getHotel(@PathVariable int id) {
        return hotelService.getHotel(id);
    }

    @PutMapping("/{id}")
    public hotel update(@PathVariable int id,@RequestBody hotel newhotel) {
        return hotelService.update(id, newhotel);
    }

    @GetMapping
    public List<hotel> all_hotels() {
        return hotelService.all_hotels();
    }

    @DeleteMapping("/{id}")
    public boolean DeleteHotel(@PathVariable int id) {
        return hotelService.DeleteHotel(id);
    }
}
