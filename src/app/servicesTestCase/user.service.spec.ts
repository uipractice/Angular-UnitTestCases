import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from '../user';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the active user correctly',()=>{
    //Arrange
    const user:User={
      id:'test',
      name:'test'
    }
     //Act
     service.setActiveUser(user)

     //Assert
     expect(service['activeUser'].id).toBe('test')
     expect(service['activeUser'].name).toBe('test')

  })

  it('should get the active users correctly',()=>{
    //Arrange
    service['activeUser']={
      id:'test',
      name:'test'
    }

    //Act
    const user=service.getActiveUSer()

    //Assert
    expect(user.id).toBe('test')
    expect(user.name).toBe('test')


  })

});
