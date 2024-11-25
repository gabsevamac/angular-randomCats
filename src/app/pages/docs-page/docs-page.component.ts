import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion'
@Component({
  selector: 'app-docs-page',
  standalone: true,
  imports: [MatIconModule, MatExpansionModule, ],
  templateUrl: './docs-page.component.html',
  styleUrl: './docs-page.component.scss'
})
export class DocsPageComponent {


}
