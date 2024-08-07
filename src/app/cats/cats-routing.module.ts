import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats.component';
import { CatalogComponent } from './components/catalog/catalog.component';

const CatsRoutes: Routes = [
    {
        path: '',
        component: CatsComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'catalog', component: CatalogComponent}
                ]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(CatsRoutes)],
  exports: [RouterModule]
})
export class CatsRoutingModule { }
