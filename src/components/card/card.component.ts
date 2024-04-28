import {Component, Input} from '@angular/core';
import {OnScrollDirective} from "../../directives/on-scroll.directive";
import {RotateDirective} from "../../directives/rotate.directive";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    OnScrollDirective,
    RotateDirective
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() title : string
@Input() body : string
@Input() image : string


}
