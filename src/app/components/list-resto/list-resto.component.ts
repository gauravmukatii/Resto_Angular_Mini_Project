import { Component, OnInit } from '@angular/core';
import { RestoService } from 'src/app/service/resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  deleteSuccess!: string;
  
  constructor(private resto:RestoService) { }
  collection: any[] = [];
  ngOnInit(): void {
    this.resto.getList().subscribe((result: any)=>{
          this.collection=result;
    });
  }

  deleteResto(id: any){
    console.warn(id);
    this.resto.deleteRestaurant(id).subscribe((response)=>{
      console.warn(response);
      this.deleteSuccess = "Restaurant deleted successfully";
      this.collection = this.collection.filter(item => item.id !== id);
    });
  }

}
