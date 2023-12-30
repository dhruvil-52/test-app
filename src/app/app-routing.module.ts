import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TwoComponent,
    data: {
      breadcrumb: 'home',
    },
  },
  {
    path: 'property',
    component: TwoComponent,
    data: {
      breadcrumb: 'property'
    },
  },
  {
    path: 'details',
    data: {
      breadcrumb: 'details'
    },
    children: [
      {
        path: '',
        component: TwoComponent,
        data: {
          breadcrumb: ''
        }
      },
      {
        path: 'new',
        component: TwoComponent,
        data: {
          breadcrumb: 'new'
        }
      },
      {
        path: ':id',
        component: TwoComponent,
        data: {
          breadcrumb: 'id'
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
