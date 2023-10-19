package tn.esprit.ms_auxiliary_services.Persistance.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.ms_auxiliary_services.Persistance.Entity.ServiceReservation;
@Repository
public interface ServiceReservationRepository extends JpaRepository<ServiceReservation,Integer> {
}
