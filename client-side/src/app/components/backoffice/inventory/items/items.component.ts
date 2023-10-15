import { Component } from '@angular/core';
import {Item} from "../../../../core/models/item.model";
import {ItemService} from "../../../../core/services/item.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items: Item[]=[]

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  private getAllItems() {
    this.itemService.getAll().subscribe({
      next: (items:Item[]) => {
        this.items = items;
        console.log(this.items);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addNewItem() {
    
  }

  deleteItem(id: number) {
    
  }

  showDetails(id: number) {
    
  }
}
