import { NgModule, createPlatformFactory } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBranchComponent } from './page/createEntities/create-branch/create-branch.component';
import { CreateRentalComponent } from './page/createEntities/create-rental/create-rental.component';
import { CreateCarComponent } from './page/createEntities/create-car/create-car.component';
import { CreateCustomerComponent } from './page/createEntities/create-customer/create-customer.component';
import { CreateOwnerComponent } from './page/createEntities/create-owner/create-owner.component';
import { CreateEmployeeComponent } from './page/createEntities/create-employee/create-employee.component';
import { CreateDepartmentComponent } from './page/createEntities/create-department/create-department.component';
import { CreateLoanComponent } from './page/createEntities/create-loan/create-loan.component';
import { CreateRefundComponent } from './page/createEntities/create-refund/create-refund.component';
import { CreateReservationComponent } from './page/createEntities/create-reservation/create-reservation.component';
import { LoginComponent } from './page/login/login.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { UserProfileComponent } from './page/user-profile/user-profile.component';
import { EdituserComponent } from './edituser/edituser.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { SearchResultsComponent } from './page/search-results/search-results.component';
import { CheckOutComponent } from './page/check-out/check-out.component';
import { PaymentComponent } from './page/payment/payment.component';
import { RentalCRMComponent } from './page/rental-crm/rental-crm.component';
import { CreateaddressComponent } from './page/createEntities/createaddress/createaddress.component';
import { AddresslistComponent } from './addresslist/addresslist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReservationlistComponent } from './reservationlist/reservationlist.component';
import { TestComponent } from './test/test.component';
import { SuccesspageComponent } from './page/successpage/successpage.component';
import { CancelpageComponent } from './page/cancelpage/cancelpage.component';
import { SecurityComponent } from './security/security.component';
import { BlankComponent } from './page/rental-crm/DASHBORD/layouts/blank/blank.component';
import { FullComponent } from './page/rental-crm/DASHBORD/layouts/full/full.component';
import { AppDashboardComponent } from './page/rental-crm/DASHBORD/pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'createbranch', component: CreateBranchComponent },
  { path: 'createrental', component: CreateRentalComponent },
  { path: 'createcar', component: CreateCarComponent },
  { path: 'createcustomer', component: CreateCustomerComponent },
  { path: 'createowner', component: CreateOwnerComponent },
  { path: 'createemployee', component: CreateEmployeeComponent },
  { path: 'createdepartment', component: CreateDepartmentComponent },
  { path: 'createloan', component: CreateLoanComponent },
  { path: 'createrefund', component: CreateRefundComponent },
  { path: 'createreservation', component: CreateReservationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: 'searchresult', component: SearchResultsComponent },
  { path: 'checkout/:id', component: CheckOutComponent },
  { path: 'payment', component: PaymentComponent },
  // { path: 'dashbord', component: RentalCRMComponent },
  { path: 'createaddress', component: CreateaddressComponent},
  { path: 'addresslist', component: AddresslistComponent},
   { path: 'test', component: TestComponent},
   { path: 'success', component: SuccesspageComponent},
   { path: 'cancel', component: CancelpageComponent},
   {path: 'userprofile',component:UserProfileComponent, 
          children:[  { path: 'edituser', component: EdituserComponent},{ path: 'reservationlist', component: ReservationlistComponent}, { path: '', component: AppDashboardComponent}]},

   {path: 'testsecurity', component: SecurityComponent },
      {path: 'aboutus', component: AboutusComponent},


  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./page/rental-crm/DASHBORD/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./page/rental-crm/DASHBORD/pages/extra/extra.module').then((m) => m.ExtraModule),
      },
    ],
  },

  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./page/rental-crm/DASHBORD/pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
   { path: '', component:HomePageComponent},
  { path: '**', pathMatch: 'full',  component: NotfoundComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
