package tn.esprit.ms_reservation.entities;
import tn.esprit.ms_reservation.entities.enums.reservationStatus;
import lombok.*;


import javax.persistence.*;
import java.util.Date;


@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idReservation;

    private Date dateArrivee;
    private Date dateDepart;
    private int nbrPersonne;
    private int nbrEnfant;

    @Enumerated(EnumType.STRING)
    private reservationStatus status;

    private float prixTotal;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private room room;


}
