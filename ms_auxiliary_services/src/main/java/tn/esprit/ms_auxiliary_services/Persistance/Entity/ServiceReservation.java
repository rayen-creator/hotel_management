package tn.esprit.ms_auxiliary_services.Persistance.Entity;

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
    @Enumerated(EnumType.STRING)
    private ServiceType serviceType;
    private  String label;
    @Temporal(TemporalType.DATE)
    private Date serviceDate;
    private String specialPreferences;
    @ManyToOne
    AuxiliaryService auxiliaryService;



    @Override
    public String toString() {
        return "Service_Reservation{" +
                "idService_Reservation=" + idService_Reservation +
                ", serviceType=" + serviceType +
                ", label='" + label + '\'' +
                ", serviceDate=" + serviceDate +
                ", specialPreferences='" + specialPreferences + '\'' +
                '}';
    }
}
