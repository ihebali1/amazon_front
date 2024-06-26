import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './pages/listing/listing.component';

const routes: Routes = [
  {
    path: ':id',
    component: ListingComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentCategoryRoutingModule { }
