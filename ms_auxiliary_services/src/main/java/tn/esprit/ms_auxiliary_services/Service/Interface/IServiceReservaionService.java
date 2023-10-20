package tn.esprit.ms_auxiliary_services.Service.Interface;

import tn.esprit.ms_auxiliary_services.Persistance.Entity.ServiceReservation;

import java.util.List;
import java.util.Optional;

public interface IServiceReservaionService {
    List<ServiceReservation> getAllServiceReservations();

    Optional<ServiceReservation> getServiceReservationById(int id);

    ServiceReservation createServiceReservation(ServiceReservation serviceReservation);

    ServiceReservation updateServiceReservation(int id, ServiceReservation updatedServiceReservation);

    void deleteServiceReservation(int id);
}
