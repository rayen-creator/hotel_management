import { room } from "./room.model";

export enum status {
    EN_ATTENTE,
    CONFIRMEE,
    ANNULEE,
    TERMINEE
      }
export class reservation{
    idReservation:number
    dateArrivee:string;
    nbrJour:number;
    nbrPersonne:number;
    status: string;
    prixTotal:number;
    userId:number;
    

}