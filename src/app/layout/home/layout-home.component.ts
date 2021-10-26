import { Component } from "@angular/core";
import { mock_cars } from "/home/tyler/angular_ws/porsche/src/app/car-card/mock-cars";
import { Car } from "/home/tyler/angular_ws/porsche/src/app/car-card/car.model";

@Component ({
    selector: 'app-layout-home',
    templateUrl: './layout-home.component.html',
    styleUrls: ['./layout-home.component.css']
})

export class LayoutHomeComponent {
    cars: Car[] = [];
   
    constructor() {
        for (var car of mock_cars) {
            this.cars.push(new Car(car))
        }
    }
}