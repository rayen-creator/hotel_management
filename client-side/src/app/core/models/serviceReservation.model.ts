import { AuxiliaryService } from "./auxiliaryService.model";

export class ServiceReservation {
  idService_Reservation: number;
  label: string;
  serviceDate: Date;
  specialPreferences: string;
  auxiliaryService: AuxiliaryService;
}
