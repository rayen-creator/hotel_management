import {Component, OnInit} from '@angular/core';
import {Item} from "../../../../core/models/item.model";
import {ItemService} from "../../../../core/services/item.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  items: Item[]=[]

  constructor(private itemService: ItemService, private router : Router) { }

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
    this.router.navigate(['adminpanel/inventory/add']);
  }

  deleteItem(id: number) {
    Swal.fire({
      title: 'Are you sure you want to delete this item ?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete',
    }).then((result) => {
      if (result.isConfirmed) {
        this.itemService.deleteItem(id).subscribe(
          () => {
            this.items = this.items.filter(item => item.id !== id);
            Swal.fire('Deleted', 'Item has been deleted successfully.', 'success');
          },
          error => {
            console.error(error);
            Swal.fire('Error', 'An error occurred while deleting the item.', 'error');
          }
        );
      }
    });
  }


  showDetails(id: number) {

  }
}
