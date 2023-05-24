import { Injectable } from '@angular/core';
import { Order } from '../order';
import { Product } from '../product';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private readonly userService:UserService) { }

  createorder(product:Product){
    return {
      id:Date.now().toString(),
      user:this.userService.getActiveUSer(),
      product

    }
  }
}
