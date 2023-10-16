package tn.esprit.ms_reservation.entities;
import lombok.*;


import javax.persistence.*;
import java.util.List;


@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idHotel;


    private String name;
    private String adress;
    private String city;
    private String postalCode;
    private String country;
    private String description;

    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<room> rooms;

}
