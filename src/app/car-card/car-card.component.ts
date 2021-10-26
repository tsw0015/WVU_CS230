import { Component, Input } from "@angular/core"


@Component({
    selector: 'app-car-card',
    templateUrl: './car-card.component.html',
    styleUrls: ['./car-card.component.css']
})

export class CarCardComponent {
    @Input()
    model!: string;
    @Input()
    price!: string;
    @Input()
    picture!: string;
}