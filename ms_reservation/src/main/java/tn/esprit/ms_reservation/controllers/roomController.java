package tn.esprit.ms_reservation.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.ms_reservation.entities.Room;
import tn.esprit.ms_reservation.services.roomServiceImpl;

import java.util.List;

@RestController
@RequestMapping(value = "/api/room")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class roomController {

    @Autowired
    private roomServiceImpl roomService;

    @PostMapping("/add/{idHotel}")
    public Room addRoom(@PathVariable int idHotel,@RequestBody Room room) {
        return roomService.addRoom(idHotel,room);
    }

    @GetMapping("/getById/{id}")
    public Room getRoom(@PathVariable int id) {
        return roomService.getRoom(id);
    }

    @PutMapping("/update/{id}")
    public Room update(@PathVariable int id, @RequestBody Room newRoom) {
        return roomService.update(id, newRoom);
    }

    @GetMapping("/getAll")
    public List<Room> all_Rooms() {
        return roomService.all_Rooms();
    }
    @DeleteMapping("/delete/{id}")
    public boolean DeleteRoom(@PathVariable int id) {
        return roomService.DeleteRoom(id);
    }
}
