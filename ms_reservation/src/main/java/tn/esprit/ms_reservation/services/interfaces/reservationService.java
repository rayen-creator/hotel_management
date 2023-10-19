package tn.esprit.ms_reservation.services.interfaces;

import tn.esprit.ms_reservation.entities.Reservation;

import java.util.List;

public interface reservationService {
    public Reservation addReservation(int idRoom,Reservation reservation);

    public Reservation getReservation (int id);

    public Reservation update(int id, Reservation newReservation);

    public List<Reservation> all_reservations();

    public boolean DeleteReservation(int id);
}

