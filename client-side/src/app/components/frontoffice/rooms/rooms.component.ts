import { Component,OnInit } from '@angular/core';
import { room } from 'src/app/core/models/room.model';
import { RoomService } from 'src/app/core/services/room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  constructor(private RoomService: RoomService,private route: ActivatedRoute) { }
  rooms: room[]
  idHotel: string;
  selectedType:any;

  ngOnInit(): void {
    this.idHotel = this.route.snapshot.paramMap.get('idHotel');
    this.RoomService.getByHotel(parseInt(this.idHotel)).subscribe((data: any) => {
      this.rooms = data;
    })
  }
  getByType():void{
    console.log("testt")
    console.log(this.selectedType)
    this.RoomService.getByType(this.selectedType,parseInt(this.idHotel)).subscribe((data:any)=>{
      this.rooms=data;
    })
  }

}
