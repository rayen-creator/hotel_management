import { room } from "./room.model";

export enum status {
    EN_ATTENTE,
    CONFIRMEE,
    ANNULEE,
    TERMINEE
      }
export class reservation{
    dateArrivee:string;
    nbrJour:number;
    nbrPersonne:number;
    

}