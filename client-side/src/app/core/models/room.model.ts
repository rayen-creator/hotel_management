import { hotel } from "./hotel.model";
export enum roomType {
    SINGLE="SINGLE",
    DOUBLE="DOUBLE",
    SUITE="SUITE",
    DELUXE="DELUXE",
    PRESIDENTIAL="PRESIDENTIAL"  }
export class room{
    idRoom:number;
    type:roomType;
    numero:number;
    etage:number;
    prixnuitee:number;
    disponibilite:boolean;
    description:string;
    capacite:number;
    hotel:hotel

}