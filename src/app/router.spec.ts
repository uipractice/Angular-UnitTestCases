import {Location} from "@angular/common";
import {ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";


describe('MyComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let router: Router;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[RouterTestingModule.withRoutes(routes)],
            declarations: [ AppComponent ]
          })
          .compileComponents();
    })
    
    

    beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
    })
    router=TestBed.inject(Router)
    it('home navigation test', () => {
        const spy = spyOn(router, 'navigate');
        component.homeNavigation();
        expect(spy.calls.first().args[0]).toContain('/home');
        });
})
