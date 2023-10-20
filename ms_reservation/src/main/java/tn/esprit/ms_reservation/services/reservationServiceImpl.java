package tn.esprit.ms_reservation.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.ms_reservation.entities.Hotel;
import tn.esprit.ms_reservation.entities.Reservation;
import tn.esprit.ms_reservation.entities.Room;
import tn.esprit.ms_reservation.repositories.*;
import tn.esprit.ms_reservation.services.interfaces.reservationService;
import tn.esprit.ms_reservation.entities.enums.reservationStatus;

import java.util.Date;
import java.util.List;

@Service
public class reservationServiceImpl implements reservationService{
    @Autowired
    private reservationRepository reservationRepo;
    @Autowired
    private roomRespository roomRepo;

    @Override
    public Reservation addReservation(int idRoom,Reservation reservation) {
        if (roomRepo.findById(idRoom).isPresent()) {
            Room room= roomRepo.findById(idRoom).get();
            reservation.setUserId(2);
            reservation.setRoom(room);
            reservation.setNbrPersonne((Integer)reservation.getNbrPersonne());
            int nbJour=reservation.getNbrJour();
            int nbPersonne= reservation.getNbrPersonne();
            float prixTot=room.getPrixNuitee() * (float)nbPersonne * (float) nbJour;
            reservation.setStatus(reservationStatus.EN_ATTENTE);
            reservation.setPrixTotal((float)prixTot);
            return reservationRepo.save(reservation);

        }else {
            return null;
        }

    }
    @Override
    public Reservation getReservation(int id) {
        if (reservationRepo.findById(id).isPresent()) {
            Reservation reservation = reservationRepo.findById(id).get();
            return reservation;
        }else {
            return null;
        }
    }

    @Override
    public Reservation update(int id, Reservation newReservation) {
        if (reservationRepo.findById(id).isPresent()) {
            Reservation reservation = reservationRepo.findById(id).get();

            reservation.setDateArrivee(reservation.getDateArrivee());
            reservation.setNbrJour(reservation.getNbrJour());
            reservation.setNbrPersonne(reservation.getNbrPersonne());
            reservation.setStatus(reservation.getStatus());
            reservation.setPrixTotal(reservation.getPrixTotal());
            reservation.setRoom(reservation.getRoom());
            return reservationRepo.save(reservation);
        }else {
            return null;
        }
    }

    @Override
    public List<Reservation> all_reservations() {
        return reservationRepo.findAll();
    }

    @Override
    public boolean DeleteReservation(int id) {
        if (reservationRepo.findById(id).isPresent()) {
            reservationRepo.deleteById(id);
            return true;
        }else {
            return false;
        }
    }
}
