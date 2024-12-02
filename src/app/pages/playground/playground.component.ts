import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { animate, query, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
  animations: [
    trigger("fadeInOut", [
      state(
        'In',
        style({
          opacity: 1
        })
      ),
      state(
        'Out',
        style({
          opacity: 0
        })
      ),
      transition('In => Out', [animate('1s')]),
      transition('Out => In', [animate('.5s')])
    ])
  ]
})
export class PlaygroundComponent {
  protected currentImage!: string
  protected isFaded: boolean = false
  constructor(private apiService: ApiService) {

  }

  toggle() {
    this.isFaded = !this.isFaded
  }


  getRandomImage() {
    
    this.apiService.getRandomImage().subscribe(
      (data) => {
        this.toggle()
        console.log(data)
        this.currentImage = "http://localhost:3000/" + data.pic.src
        console.log(this.currentImage)
      }
    )
    
  }
}
