import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AuthGuard } from "./service/guards/auth.guard";
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'member', component: MemberComponent, canActivate: [AuthGuard] },
  { path: 'member/:action', component: MemberDetailComponent, canActivate: [AuthGuard]  },
  { path: 'member/:action/:id', component: MemberDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
