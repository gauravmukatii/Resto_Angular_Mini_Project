import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from 'src/app/service/resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  successMsg!: string;

  restaurantForm= new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('')
  });

  constructor(private restoService: RestoService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.restoService.addRestaurant(this.restaurantForm.value).subscribe(
      (response) => {
        console.log("added restaurant successfully", response);

        this.successMsg = "Added restaurant successfully";
        this.restaurantForm.reset();
      },
      (error) => {
        console.log("error", error);
      }
      );
  }

}
