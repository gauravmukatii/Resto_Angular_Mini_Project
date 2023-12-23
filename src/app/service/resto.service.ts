import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url ="http://localhost:8000/restaurants"

  constructor(private http: HttpClient) { }
    
  
  getList() {
     return this.http.get(this.url);
  }

  addRestaurant(restaurantData: any){
    return this.http.post(this.url, restaurantData);
  }

  deleteRestaurant(itemId: any){
    return this.http.delete(this.url + '/' + itemId, itemId);
  }

  getRestaurant(itemId: any){
    return this.http.get(this.url + '/' + itemId, itemId);
  }

  updateRestaurant(itemId: any, data: any){
    console.error(data);
    console.error(itemId);
    return this.http.put(this.url + '/' + itemId, data);
  }

}