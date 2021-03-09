import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlankComponent } from './views/blank/blank.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { NonAuthGuard } from './utils/guards/non-auth.guard';
import { FormUserComponent } from './user-mgmnt/form-user/form-user.component';
import { ListUserComponent } from './user-mgmnt/list-user/list-user.component';
import { EditUserComponent } from './user-mgmnt/edit-user/edit-user.component';
import { DetailUserComponent } from './user-mgmnt/detail-user/detail-user.component';
import { FormProduitComponent } from './produit-mgmnt/form-produit/form-produit.component';
import { ListProduitComponent } from './produit-mgmnt/list-produit/list-produit.component';
import { EditProduitComponent } from './produit-mgmnt/edit-produit/edit-produit.component';
import { DetailProduitComponent } from './produit-mgmnt/detail-produit/detail-produit.component';
import { ListCategorieComponent } from './categrorie-mgmnt/list-categorie/list-categorie.component';
import { EditCategorieComponent } from './categrorie-mgmnt/edit-categorie/edit-categorie.component';
import { DetailCategorieComponent } from './categrorie-mgmnt/detail-categorie/detail-categorie.component';
import { FormCategorieComponent } from './categrorie-mgmnt/form-categorie/form-categorie.component';
import { TestComponent } from 'src/app/aa/test/test.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [ 
      {
        path: 'add-produit',
        component: FormProduitComponent,
      },
      {
        path: 'app-test',
        component: TestComponent,
      },
 
      {
        path: 'list-produit/:id',
        component: ListProduitComponent,
      },
      {
        path: 'list-produit',
        component: ListProduitComponent,
      },
      {
        path: 'add-user',
        component: FormUserComponent,
      },
      {
        path: 'add-categorie',
        component: FormCategorieComponent,
      },
      {
        path: 'list-user/:id',
        component: ListUserComponent,
      },
      {
        path: 'list-user',
        component: ListUserComponent,
      },
      {
        path: 'list-categorie',
        component: ListCategorieComponent,
      },
      {
        path: 'list-categorie/:id',
        component: ListCategorieComponent,
      },
      {
        path: 'edit-user/:id',
        component: EditUserComponent,
      },
      {
        path: 'edit-produit/:id',
        component: EditProduitComponent,
      },
      {
        path: 'edit-categorie/:idCategorie',
        component: EditCategorieComponent,
      },
      {
        path: 'detail-user',
        component: DetailUserComponent,
      },
      {
        path: 'detail-produit',
        component: DetailProduitComponent,
      }, 
           {
        path: 'detail-categorie',
        component: DetailCategorieComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'blank',
        component: BlankComponent,
      },


      {
        path: 'todos',
        //loadChildren: './todos/todos.module#TodosModule'
        loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
      },
      
      {
        path: '',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NonAuthGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
