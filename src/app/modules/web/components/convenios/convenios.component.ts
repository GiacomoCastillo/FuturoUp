import { Component } from '@angular/core';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrl: './convenios.component.css'
})
export class ConveniosComponent {

  sede_ucv: string = 'assets/logos/ucv.jpg';
  sede_upc: string = 'assets/logos/upc.jpg';
  sede_upn: string = 'assets/logos/upn.jpg';
  sede_utp: string = 'assets/logos/utp.jpg';

}
