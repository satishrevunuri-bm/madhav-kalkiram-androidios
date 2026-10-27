import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BhavishyamalikaPage } from './bhavishyamalika.page';

const routes: Routes = [
  {
    path: '',
    component: BhavishyamalikaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BhavishyamalikaPageRoutingModule {}
