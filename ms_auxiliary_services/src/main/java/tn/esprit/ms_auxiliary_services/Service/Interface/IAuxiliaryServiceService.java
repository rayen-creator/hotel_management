package tn.esprit.ms_auxiliary_services.Service.Interface;

import tn.esprit.ms_auxiliary_services.Persistance.Entity.AuxiliaryService;

import java.util.List;

public interface IAuxiliaryServiceService {

    public AuxiliaryService addAuxiliaryService(AuxiliaryService auxiliaryService);

    AuxiliaryService updateAuxiliaryService(int id, AuxiliaryService auxiliaryService);

    public List<AuxiliaryService> all_auxiliaryServices();
    public boolean deleteAuxiliaryService(int id);

    public AuxiliaryService getAuxiliaryService(int id);
    public AuxiliaryService toggleAvailability(int id);



}
