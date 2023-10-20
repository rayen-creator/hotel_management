import { ParkingReservation } from './parkingreservation.model';
export enum ParkingSpaceType {
  STANDARD = 'STANDARD',
  VALET = 'VALET',
}

export enum Status {
  AVAILABLE = 'AVAILABLE',
  NOTAVAILABLE = 'NOTAVAILABLE',
}

export interface ParkingSpace {
  id?: string;
  spaceNumber: string;
  type: ParkingSpaceType;
  location: string;
  status: Status;
  parkingReservations?: ParkingReservation[];
}
