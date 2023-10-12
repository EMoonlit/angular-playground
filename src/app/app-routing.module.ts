import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserGuard} from 'src/guards/user.guard';
import {ChieldrenTwoPageComponent} from 'src/pages/chieldren-1-page.component';
import {ChieldrenOnePageComponent} from 'src/pages/chieldren-2-page.component';
import {ClientListPage} from 'src/pages/client-list-page.component';
import {ClientDetailPageComponent} from 'src/pages/cliente-detail-page.component';
import {FatherPageComponent} from 'src/pages/father.page.component';
import {LoginPageComponent} from 'src/pages/login-page.component';
import {RxJsPageComponent} from "../pages/rxjs-page.component";

const routes: Routes = [
  {
    path: 'client',
    component: ClientListPage,
    canActivate: [UserGuard]
  },
  {
    path: 'client/detail/:id',
    component: ClientDetailPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'rxjs',
    component: RxJsPageComponent,
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
export class AppRoutingModule {
}
