import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  alumnoAvatar: string = 'assets/logos/alumno.png';
  cvAvatar: string = 'assets/logos/cv.png';

  constructor(){
    
  }

}
