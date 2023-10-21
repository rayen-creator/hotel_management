package tn.esprit.ms_reservation.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import tn.esprit.ms_reservation.entities.enums.roomType;
import lombok.*;


import javax.persistence.*;
import java.util.List;


@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idRoom;

    @Enumerated(EnumType.STRING)
    private roomType type;

    private int numero;
    private int etage;
    private float prixNuitee;
    private Boolean disponibilite;
    private String description;
    private int capacitePersonne;


    @JsonIgnore
    @ManyToOne
    Hotel hotel;


    @JsonIgnore
    @OneToMany(mappedBy = "room")
    List<Reservation> reservations;



}
