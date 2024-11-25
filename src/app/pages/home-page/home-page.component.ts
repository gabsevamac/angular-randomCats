import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
}
