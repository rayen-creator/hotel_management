package tn.esprit.ms_reservation.entities;
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
public class room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idRoom;

    @Enumerated(EnumType.STRING)
    private roomType type;

    private int numero;
    private int etage;
    private float prixNuitee;
    private boolean disponibilite;
    private String description;
    private int capacitePersonne;

    @ManyToOne
    @JoinColumn(name = "hotel_id")
    private hotel hotel;

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<reservation> reservations;



}
