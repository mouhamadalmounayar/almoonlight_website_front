import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RotateDirective} from "../../directives/rotate.directive";
import {OnScrollDirective} from "../../directives/on-scroll.directive";
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RotateDirective,
    OnScrollDirective,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
