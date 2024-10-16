import { Component } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.css'
})
export class ConocenosComponent {

  i_aprende: string = 'assets/icons/aprende.png';
  i_asesora: string = 'assets/icons/asesora.png';
  i_elige: string = 'assets/icons/elige.png';
  i_preparate: string = 'assets/icons/preparate.png';

  alumnoAvatar: string = 'assets/logos/alumno.png';

  equipo = [
    {
      nombre: 'LISET LANDEO',
      titulo: 'Licenciada en Marketing',
      descripcion: 'Especialista en mejorar perfiles en LinkedIn',
      foto: this.alumnoAvatar, // Cambiar por la ruta correcta de la imagen
    },
    {
      nombre: 'LISET LANDEO',
      titulo: 'Licenciada en Marketing',
      descripcion: 'Especialista en mejorar perfiles en LinkedIn',
      foto: this.alumnoAvatar, // Cambiar por la ruta correcta de la imagen
    },
    {
      nombre: 'LISET LANDEO',
      titulo: 'Licenciada en Marketing',
      descripcion: 'Especialista en mejorar perfiles en LinkedIn',
      foto: this.alumnoAvatar, // Cambiar por la ruta correcta de la imagen
    },
    {
      nombre: 'LISET LANDEO',
      titulo: 'Licenciada en Marketing',
      descripcion: 'Especialista en mejorar perfiles en LinkedIn',
      foto: this.alumnoAvatar, // Cambiar por la ruta correcta de la imagen
    },
    {
      nombre: 'LISET LANDEO',
      titulo: 'Licenciada en Marketing',
      descripcion: 'Especialista en mejorar perfiles en LinkedIn',
      foto: this.alumnoAvatar, // Cambiar por la ruta correcta de la imagen
    },
    {
      nombre: 'LISET LANDEO',
      titulo: 'Licenciada en Marketing',
      descripcion: 'Especialista en mejorar perfiles en LinkedIn',
      foto: this.alumnoAvatar, // Cambiar por la ruta correcta de la imagen
    },
  ]

}
