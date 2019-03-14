import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'car',
  templateUrl: 'car.html'
})
export class CarComponent {

  @Input('student') student:any;
  @Output('click-car') car = new EventEmitter<any>();

  constructor() {
    
  }

  clickCard(){
    this.car.emit(this.student);
  }

}
