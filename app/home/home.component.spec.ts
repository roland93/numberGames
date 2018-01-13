import {} from 'jasmine';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { HomeComponent } from './home.component';


describe('HomeComponent (inline template)', () => {
    
      let comp:    HomeComponent;
      let fixture: ComponentFixture<HomeComponent>;
      let de:      DebugElement;
      let el:      HTMLElement;
    
      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [ HomeComponent ], // declare the test component
        });
    
        fixture = TestBed.createComponent(HomeComponent);
    
        comp = fixture.componentInstance; // HomeComponent test instance
    
        // query for the title <h1> by CSS element selector
        comp.inputNumber = 3333;
        comp.predefinedNumber = 3333;
        de = fixture.debugElement.query(By.css('#tryid'));
        el = de.nativeElement;
      });

      it('trigger the try event', () => {
        de.triggerEventHandler("click", null);
        fixture.detectChanges();
      });
});