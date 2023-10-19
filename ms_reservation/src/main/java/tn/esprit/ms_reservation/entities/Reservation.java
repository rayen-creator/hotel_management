package tn.esprit.ms_reservation.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.format.annotation.DateTimeFormat;
import tn.esprit.ms_reservation.entities.enums.reservationStatus;
import lombok.*;


import javax.persistence.*;
import java.util.Date;


@Entity
@Table
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idReservation;
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateArrivee;
    private int nbrJour;
    private int nbrPersonne;


    @Enumerated(EnumType.STRING)
    private reservationStatus status;


    private float prixTotal;



    @JsonIgnore
    @ManyToOne
    private Room room;


}
