import { Component ,OnInit} from '@angular/core';
import { HotelService } from '../../../../core/services/hotel.service';
import { hotel } from 'src/app/core/models/hotel.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private HotelService: HotelService) { }
hotels: hotel[]
selectedCountry: any = '';

  
  ngOnInit(): void {
    this.HotelService.getAll().subscribe((data: any) => {
      this.hotels = data;
    })
  }
  getByCountry():void{
        this.HotelService.getByCountry(this.selectedCountry).subscribe((data:any)=>{
      this.hotels=data;
    })
  }}


