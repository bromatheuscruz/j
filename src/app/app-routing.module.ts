import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NatalComponent } from './natal/natal.component';
import { AnoNovoComponent } from './ano-novo/ano-novo.component';

const routes: Routes = [
  {
    path: "",
    component: NatalComponent
  },
  {
    path: "anonovo",
    component: AnoNovoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
