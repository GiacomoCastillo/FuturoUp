import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ConveniosComponent } from './components/convenios/convenios.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children:[
      {path: 'inicio', component:HomeComponent},
      {path: 'conocenos', component: ConocenosComponent},
      {path: 'convenios', component: ConveniosComponent},
      {path: 'servicios', component: ServiciosComponent},
    ]    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
