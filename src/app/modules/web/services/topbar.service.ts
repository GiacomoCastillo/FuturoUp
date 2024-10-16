import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopbarService {

  menus = [
    { title: 'Inicio',
      route: 'inicio',
      icon: 'bi bi-house-fill',
      active: false,
      type: 'dropdown',
      children: [        
      ]
    },
    { title: 'Conócenos',
      route: 'conocenos',
      icon: 'bi bi-tags-fill',
      active: false,
      type: 'dropdown',
      children:[]
    },
    { title: 'Servicios',
      route: 'servicios',
      icon: 'bi bi-tags-fill',
      active: false,
      type: 'dropdown',
      children:[]
    },
    { title: 'Convenios',
      route: 'convenios',
      icon: 'bi bi-tags-fill',
      active: false,
      type: 'dropdown',
      children:[]
    },
    { title: 'Portal de Practicas',
      route: 'portal-practicas',
      icon: 'bi bi-tags-fill',
      active: false,
      type: 'dropdown',
      children:[]
    },
    { title: 'Tetimonios',
      route: 'testimonios',
      icon: 'bi bi-tags-fill',
      active: false,
      type: 'dropdown',
      children:[]
    },
    { title: 'Blog',
      route: 'blog',
      icon: 'bi bi-tags-fill',
      active: false,
      type: 'dropdown',
      children:[]
    },
    { title: 'Contactanos',
      route: 'contactanos',
      icon: 'bi bi-tags-fill',
      active: false,
      type: 'dropdown',
      children:[]
    }
  ];

  constructor() { }
}
