import { ParkingSpace } from './parking.model';
export enum ReservationStatus {
  accepted = 'accepted',
  declined = 'declined',
  pending = 'pending',
}

export interface ParkingReservation {
  id?: string;
  guestName: string;
  vehicleImmatricule: string;
  arrivalDate: Date;
  departureDate: Date;
  status: ReservationStatus;
  parkingSpace?: ParkingSpace;
  owner: any;
}
