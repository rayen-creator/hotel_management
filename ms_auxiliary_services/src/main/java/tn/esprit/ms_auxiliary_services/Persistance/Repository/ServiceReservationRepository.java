package tn.esprit.ms_auxiliary_services.Persistance.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.ms_auxiliary_services.Persistance.Entity.ServiceReservation;

import java.util.List;

@Repository
public interface ServiceReservationRepository extends JpaRepository<ServiceReservation,Integer> {

    @Query("SELECT sr FROM ServiceReservation sr WHERE sr.auxiliaryService.idAux_Service = :auxiliaryServiceId")
    List<ServiceReservation> findByAuxiliaryServiceId(@Param("auxiliaryServiceId") int auxiliaryServiceId);
}
