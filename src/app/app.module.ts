import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { MenuSidebarComponent } from './pages/main/menu-sidebar/menu-sidebar.component';
import { BlankComponent } from './views/blank/blank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './views/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { MessagesDropdownMenuComponent } from './pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from './pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppButtonComponent } from './components/app-button/app-button.component';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { UserDropdownMenuComponent } from './pages/main/header/user-dropdown-menu/user-dropdown-menu.component';
import { FormUserComponent } from './user-mgmnt/form-user/form-user.component';
import { ListUserComponent } from './user-mgmnt/list-user/list-user.component';
import { EditUserComponent } from './user-mgmnt/edit-user/edit-user.component';
import { DetailUserComponent } from './user-mgmnt/detail-user/detail-user.component';

registerLocaleData(localeEn, 'en-EN');

import { DataTablesModule } from 'angular-datatables';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { ListProduitComponent } from './produit-mgmnt/list-produit/list-produit.component';
import { DetailProduitComponent } from './produit-mgmnt/detail-produit/detail-produit.component';
import { EditProduitComponent } from './produit-mgmnt/edit-produit/edit-produit.component';
import { FormProduitComponent } from './produit-mgmnt/form-produit/form-produit.component';
import { DetailCategorieComponent } from './categrorie-mgmnt/detail-categorie/detail-categorie.component';
import { EditCategorieComponent } from './categrorie-mgmnt/edit-categorie/edit-categorie.component';
import { FormCategorieComponent } from './categrorie-mgmnt/form-categorie/form-categorie.component';
import { ListCategorieComponent } from './categrorie-mgmnt/list-categorie/list-categorie.component';
import { TestComponent } from './aa/test/test.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DialogComponent } from './produit-mgmnt/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    BlankComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    AppButtonComponent,
    UserDropdownMenuComponent,
    FormUserComponent,
    ListUserComponent,
    EditUserComponent,
    DetailUserComponent,
    ListProduitComponent,
    DetailProduitComponent,
    EditProduitComponent,
    FormProduitComponent,
    DetailCategorieComponent,
    EditCategorieComponent,
    FormCategorieComponent,
    ListCategorieComponent,
    TestComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgbModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    NgSelectModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
