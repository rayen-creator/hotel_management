import {Component, OnInit} from '@angular/core';
import {Item} from "../../../../core/models/item.model";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../../../../core/services/item.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit{
  imagePreview: string;
  item: Item;
  selectedFile: File;

  photoSelected: boolean = true
  pattern = "^[ a-zA-Z0-9][a-zA-Z0-9 ]*$";
  itemForm: FormGroup;

  editMode: boolean = false

  constructor(private router: Router,  private formBuilder: FormBuilder, private itemService: ItemService,  private currentRoute: ActivatedRoute) {}
  ngOnInit(): void {
    if (this.currentRoute.snapshot.params['id']) {
      this.editMode = true
      let id = this.currentRoute.snapshot.params['id'];
      this.itemService.getItemm(id).subscribe({
        next: (item: Item) => {
          this.item = item;
          this.initFormEdit()
        },
        error: (err) => {
          console.log(err);
        }
      });

    } else {
      this.initForm()
    }

  }

  // handleFileInput(event: Event) {
  //   // @ts-ignore
  //   this.selectedFile = (event.target as HTMLInputElement).files[0];
  //   console.log(this.selectedFile)
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.imagePreview = reader.result as string;
  //   };
  //   reader.readAsDataURL(this.selectedFile);
  //   // call your service method to update user image
  // }

  private initForm() {
    this.itemForm = this.formBuilder.group({
        name: ["", [Validators.required, Validators.pattern(this.pattern), Validators.minLength(3)]],
        image: ["", [Validators.required]],
        unit: ["", [Validators.required]],
        quantity: ["", [Validators.required, this.positiveNumberValidator]],
        category: ["", [Validators.required]],
      }
    )
  }


  private initFormEdit() {
    let name: String = ""
    let image: String = ""
    let quantity = null
    let unit: String = ""
    let category: String = ""


    const i = this.item
    name = i.name
    image = i.image
    quantity = i.quantity
    unit = i.unit
    category = i.category

    this.itemForm = this.formBuilder.group({
        name: [name, [Validators.required, Validators.pattern(this.pattern), Validators.minLength(3)]],
        unit: [unit, [Validators.required]],
        image: [image, [Validators.required]],
        quantity: [quantity, [Validators.required, this.positiveNumberValidator]],
        category: [category, [Validators.required]],
      }
    )
  }

  positiveNumberValidator(control: AbstractControl): ValidationErrors | null {
    const value = parseInt(control.value, 10);
    return !isNaN(value) && Number.isFinite(value) && value >= 0 ? null : { invalidPositiveNumber: true };
  }

  onSubmit() {
    if (!this.editMode){
      {
        Swal.fire({
          title: 'Are you sure you want to add this item ?',
          text: 'This action cannot be undone.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, add',
        }).then((result) => {
          if (result.isConfirmed) {
            let newItem = this.itemForm.value;
            console.log(newItem)
            this.itemService.createItem(newItem).subscribe();
            Swal.fire('Added', 'Product has been created successfully.', 'success');
            this.router.navigate(['adminpanel/inventory']);
          }
        });
      }
    } else {
      Swal.fire({
        title: 'Are you sure you want to update this item ?',
        text: 'This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update',
      }).then((result) => {
        if (result.isConfirmed) {
          let id = this.currentRoute.snapshot.params['id'];
          let newItem = this.itemForm.value;
          this.itemService.updateItem(id, newItem).subscribe();
          Swal.fire('Updated', 'Product has been updated successfully.', 'success');
          this.router.navigate(['adminpanel/inventory']);
        }
      });
    }
  }
}
