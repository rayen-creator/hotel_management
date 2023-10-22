export class AuxiliaryService {
  idAux_Service?: number;
  serviceType: ServiceType; // Use the TypeScript enum type
  label: string;
  price: number;
  description: string;
  available: boolean;
  reason: string;
}

export enum ServiceType {
  RoomService = 'room_service',
  Restaurant = 'restaurant',
  Hospitality = 'hospitality',
  HotelAnimation = 'hotel_animation'
}
