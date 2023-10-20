package tn.esprit.ms_auxiliary_services.Service.Class;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.ms_auxiliary_services.Persistance.Entity.ServiceReservation;
import tn.esprit.ms_auxiliary_services.Persistance.Repository.ServiceReservationRepository;
import tn.esprit.ms_auxiliary_services.Service.Interface.IServiceReservaionService;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ServiceReservationImp implements IServiceReservaionService {
     private final ServiceReservationRepository serviceReservationRepository;

     @Autowired
     public ServiceReservationImp(ServiceReservationRepository serviceReservationRepository) {
          this.serviceReservationRepository = serviceReservationRepository;
     }

     @Override
     public List<ServiceReservation> getAllServiceReservations() {
          return serviceReservationRepository.findAll();
     }

     @Override
     public Optional<ServiceReservation> getServiceReservationById(int id) {
          return serviceReservationRepository.findById(id);
     }

     @Override
     public ServiceReservation createServiceReservation(ServiceReservation serviceReservation) {
          return serviceReservationRepository.save(serviceReservation);
     }

     @Override
     public ServiceReservation updateServiceReservation(int id, ServiceReservation updatedServiceReservation) {
          return serviceReservationRepository.findById(id)
                  .map(reservation -> {
                       reservation.setLabel(updatedServiceReservation.getLabel());
                       reservation.setServiceDate(updatedServiceReservation.getServiceDate());
                       reservation.setSpecialPreferences(updatedServiceReservation.getSpecialPreferences());
                       return serviceReservationRepository.save(reservation);
                  })
                  .orElse(null);
     }

     @Override
     public void deleteServiceReservation(int id) {
          serviceReservationRepository.deleteById(id);
     }

     public List<ServiceReservation> getServiceReservationsByAuxiliaryServiceId(int auxiliaryServiceId) {
          return serviceReservationRepository.findByAuxiliaryServiceId(auxiliaryServiceId);
     }
}

