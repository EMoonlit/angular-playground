import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChieldrenTwoPageComponent } from 'src/pages/chieldren-1-page.component';
import { ChieldrenOnePageComponent } from 'src/pages/chieldren-2-page.component';
import { ClientListPage } from 'src/pages/client-list-page.component';
import { FatherPageComponent } from 'src/pages/father.page.component';

const routes: Routes = [
  {
    path: 'client',
    component: ClientListPage,
  },
  {
    path: 'father',
    component: FatherPageComponent,
    children: [
      {
        path: 'chieldren-1',
        component: ChieldrenOnePageComponent
      },
      {
        path: 'chieldren-2',
        component: ChieldrenTwoPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
