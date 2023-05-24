import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';
import { UserService } from './user.service';
import { Product } from '../product';

describe('OrderService', () => {
  let service: OrderService;
  const userServiceSpy =jasmine.createSpyObj('UserService',['getActiveUSer'])


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{
        provide:UserService,
        useValue:userServiceSpy
      }]
    });
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an order correctly',()=>{
    //Arrange
    //creating dummy product which user will order
    const product:Product={
      id:'product',
      name:'product',
      cost:100
    }
    //making a mock service call to get active users
    userServiceSpy.getActiveUSer.and.returnValue({id:'test',name:'test'})

    //Act
    //calling the create order with the dummy product
    const order=service.createorder(product)

    //Assert
    expect(order.product.id).toEqual('product')
    expect(order.user.id).toEqual('test');
    expect(order.product.cost).toEqual(100)
    expect(userServiceSpy.getActiveUSer).toHaveBeenCalled()
  })
});
