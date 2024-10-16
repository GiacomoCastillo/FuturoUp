import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopbarService } from '../../services/topbar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  logoPath: string = 'assets/logos/brand.png';

  listMenu: any = [];

  constructor(private router: Router ,private tobBarService: TopbarService) {
    this.listMenu = tobBarService.menus;
  }

  navigate(route: string) {
    if (route) {
      this.router.navigate(['web/'+route]);
    }
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  closeMenu() {
    console.log('Menú cerrado');
  }
}
