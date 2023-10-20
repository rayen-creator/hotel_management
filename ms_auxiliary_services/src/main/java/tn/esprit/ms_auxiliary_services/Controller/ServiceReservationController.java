package tn.esprit.ms_auxiliary_services.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.ms_auxiliary_services.Persistance.Entity.ServiceReservation;
import tn.esprit.ms_auxiliary_services.Service.Interface.IServiceReservaionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:4200", allowedHeaders = "*")
@RequestMapping("/controllerServiceReservation")
public class ServiceReservationController {
    private final  IServiceReservaionService serviceReservationService;

    @Autowired
    public  ServiceReservationController(IServiceReservaionService serviceReservationService) {
        this.serviceReservationService = serviceReservationService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceReservation> getServiceReservationById(@PathVariable int id) {
        Optional<ServiceReservation> serviceReservation = serviceReservationService.getServiceReservationById(id);
        return serviceReservation.map(res -> new ResponseEntity<>(res, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<ServiceReservation> createServiceReservation(@RequestBody ServiceReservation serviceReservation) {
        ServiceReservation createdReservation = serviceReservationService.createServiceReservation(serviceReservation);
        return new ResponseEntity<>(createdReservation, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServiceReservation> updateServiceReservation(
            @PathVariable int id,
            @RequestBody ServiceReservation updatedServiceReservation) {
        ServiceReservation updated = serviceReservationService.updateServiceReservation(id, updatedServiceReservation);

        if (updated != null) {
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteServiceReservation(@PathVariable int id) {
        serviceReservationService.deleteServiceReservation(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @GetMapping("/byAuxiliaryServiceId/{auxiliaryServiceId}")
    public List<ServiceReservation> getServiceReservationsByAuxiliaryServiceId(@PathVariable int auxiliaryServiceId) {
        return serviceReservationService.getServiceReservationsByAuxiliaryServiceId(auxiliaryServiceId);
    }
}

