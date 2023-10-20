import { Component } from '@angular/core';
import { Staff } from 'src/app/core/models/staff.model';
import { StaffService } from 'src/app/core/services/staff.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent {
  constructor(private staffService: StaffService) { }

  listStaf: Staff[]

  ngOnInit(): void {
    this.staffService.getAllStaff().subscribe((data: any) => {
      this.listStaf = data;
      console.log("staffs",this.listStaf)
    })
  }

  deleteStaff(id: number){
    console.log("id",id)
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
        this.staffService.deleteStaff(id).subscribe(
          () => {
            this.listStaf = this.listStaf.filter(staff => staff.idStaff !== id);
            Swal.fire('Deleted', 'staff has been deleted successfully.', 'success');
          },
          error => {
            console.error(error);
            Swal.fire('Error', 'An error occurred while deleting the staff.', 'error');
          }
        );
      }
    });
  }
}
