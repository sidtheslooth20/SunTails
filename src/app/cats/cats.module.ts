import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CatsComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CatsComponent],
})
export class CatsModule { }
