package tn.esprit.ms_auxiliary_services.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.ms_auxiliary_services.Persistance.Entity.AuxiliaryService;
import tn.esprit.ms_auxiliary_services.Service.Interface.IAuxiliaryServiceService;

import java.util.List;

@RestController
@RequestMapping("/controllerAuxiliaryService")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders = "*")
public class AuxiliaryServiceController {
    @Autowired
   private IAuxiliaryServiceService ass;

    @GetMapping("/all")
    public List<AuxiliaryService> getAuxiliaryServices()
    {
        return ass.all_auxiliaryServices();
    }
    @GetMapping("/getAuxiliaryServiceById/{id}")
    public AuxiliaryService getAuxiliaryServicebyID(@PathVariable("id") int id) {

        return ass.getAuxiliaryService(id);
    }
    @PostMapping("/AddAuxiliaryService")
    public AuxiliaryService addAuxiliaryService(@RequestBody AuxiliaryService e) {
        return ass.addAuxiliaryService(e);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AuxiliaryService> updateAuxiliaryService(
            @PathVariable int id,
            @RequestBody AuxiliaryService updatedService) {
        AuxiliaryService updated = ass.updateAuxiliaryService(id, updatedService);

        if (updated != null) {
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/deleteAuxiliaryService/{idAuxiliaryService}")
    public boolean deleteAuxiliaryService(@PathVariable("idAuxiliaryService") int id) {
        ass.deleteAuxiliaryService(id);
        return true;
    }
    @PutMapping("/toggleAvailability/{idAuxiliaryService}")
    public ResponseEntity<AuxiliaryService> toggleAvailability(@PathVariable("idAuxiliaryService") int id) {
        AuxiliaryService toggledService = ass.toggleAvailability(id);
        if (toggledService != null) {
            return new ResponseEntity<>(toggledService, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
