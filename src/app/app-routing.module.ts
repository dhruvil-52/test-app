import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  {
    path: '',
    component: TwoComponent,
    data: {
      breadcrumb: 'home',
    },
    children: [
      {
        path: 'property',
        component: TwoComponent,
        data: {
          breadcrumb: 'property'
        },
        children: [
          {
            path: 'details',
            data: {
              breadcrumb: 'property details'
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
                path: 'New',
                component: TwoComponent,
                data: {
                  breadcrumb: 'New'
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
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
