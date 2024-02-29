import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './page/login/login.component';
import { SearchResultsComponent } from './page/search-results/search-results.component';
import { CheckOutComponent } from './page/check-out/check-out.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { UserProfileComponent } from './page/user-profile/user-profile.component';
import { RentalCRMComponent } from './page/rental-crm/rental-crm.component';
import { CreateRentalComponent } from './page/createEntities/create-rental/create-rental.component';
import { CreateOwnerComponent } from './page/createEntities/create-owner/create-owner.component';
import { CreateBranchComponent } from './page/createEntities/create-branch/create-branch.component';
import { CreateCarComponent } from './page/createEntities/create-car/create-car.component';
import { CreateDepartmentComponent } from './page/createEntities/create-department/create-department.component';
import { CreateCustomerComponent } from './page/createEntities/create-customer/create-customer.component';
import { CreateEmployeeComponent } from './page/createEntities/create-employee/create-employee.component';
import { CreateReservationComponent } from './page/createEntities/create-reservation/create-reservation.component';
import { CreateLoanComponent } from './page/createEntities/create-loan/create-loan.component';
import { CreateRefundComponent } from './page/createEntities/create-refund/create-refund.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdituserComponent } from './edituser/edituser.component';
import { PaymentComponent } from './page/payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateaddressComponent } from './page/createEntities/createaddress/createaddress.component';
import { AddresslistComponent } from './addresslist/addresslist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { ReservationlistComponent } from './reservationlist/reservationlist.component';
import { TestComponent } from './test/test.component';
import { SuccesspageComponent } from './page/successpage/successpage.component';
import { CancelpageComponent } from './page/cancelpage/cancelpage.component';
import { SecurityComponent } from './security/security.component';
import { CardComponent } from './card/card.component';
import { CarditemComponent } from './carditem/carditem.component';
import { HiwComponent } from './hiw/hiw.component';
import { ToprentalsComponent } from './toprentals/toprentals.component';
import { FooterComponent } from './page/footer/footer.component';
import { AuthInterceptor } from './utils/auth.interceptor';
import { UserService } from './service/user.service';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from './material.module';
import { FullComponent } from './page/rental-crm/DASHBORD/layouts/full/full.component';
import { BlankComponent } from './page/rental-crm/DASHBORD/layouts/blank/blank.component';
import { SidebarComponent } from './page/rental-crm/DASHBORD/layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './page/rental-crm/DASHBORD/layouts/full/header/header.component';
import { BrandingComponent } from './page/rental-crm/DASHBORD/layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './page/rental-crm/DASHBORD/layouts/full/sidebar/nav-item/nav-item.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    SearchResultsComponent,
    CheckOutComponent,
    SignUpComponent,
    UserProfileComponent,
    RentalCRMComponent,
    CreateRentalComponent,
    CreateOwnerComponent,
    CreateBranchComponent,
    CreateCarComponent,
    CreateDepartmentComponent,
    CreateCustomerComponent,
    CreateEmployeeComponent,
    CreateReservationComponent,
    CreateLoanComponent,
    CreateRefundComponent,
    EdituserComponent,
    PaymentComponent,
    CreateaddressComponent,
    AddresslistComponent,
    NotfoundComponent,
    NavbarComponent,
    ReservationlistComponent,
    TestComponent,
    SuccesspageComponent,
    CancelpageComponent,
    SecurityComponent,
    CardComponent,
    CarditemComponent,
    HiwComponent,
    ToprentalsComponent,
    FooterComponent,
     FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    AboutusComponent,

  ],
 imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
 ],
  providers: [HomePageComponent,CheckOutComponent, 
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },
  TablerIconsModule,
  UserService,
LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
