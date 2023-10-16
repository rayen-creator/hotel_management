package tn.esprit.ms_reservation.services.interfaces;

import tn.esprit.ms_reservation.entities.reservation;

import java.util.List;

public interface reservationService {
    public reservation addReservation(reservation reservation);

    public reservation getReservation (int id);

    public reservation update(int id, reservation newReservation);

    public List<reservation> all_reservations();

    public boolean DeleteHotel(int id);
}

