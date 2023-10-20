package tn.esprit.ms_auxiliary_services.Persistance.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import tn.esprit.ms_auxiliary_services.Persistance.Enum.ServiceType;

import java.io.Serializable;
import java.util.Date;


import javax.persistence.*;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ServiceReservation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idService_Reservation;
    private  String label;
    @Temporal(TemporalType.DATE)
    private Date serviceDate;
    private String specialPreferences;
    @JsonIgnore
    @ManyToOne
    AuxiliaryService auxiliaryService;



    @Override
    public String toString() {
        return "Service_Reservation{" +
                "idService_Reservation=" + idService_Reservation +
                ", label='" + label + '\'' +
                ", serviceDate=" + serviceDate +
                ", specialPreferences='" + specialPreferences + '\'' +
                '}';
    }
}
