import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from 'src/app/service/resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  editRestaurantForm= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
});

  constructor(private router: ActivatedRoute, private resto:RestoService) { }

  ngOnInit(): void {

    const restaurantId = this.router.snapshot.params['id'];

    console.warn(restaurantId)
    this.resto.getRestaurant(restaurantId).subscribe((result: any) => {
           console.warn(result);
           this.editRestaurantForm= new FormGroup({
            name: new FormControl(result['name']),
            email: new FormControl(result['email']),
            address: new FormControl(result['address']),
        });
    });
    }

    collection(){
      console.warn("item", this.editRestaurantForm);
    }

  }
