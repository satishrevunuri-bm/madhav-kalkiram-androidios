import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrisandhyaPage } from './trisandhya.page';

const routes: Routes = [
  {
    path: '',
    component: TrisandhyaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrisandhyaPageRoutingModule {}
