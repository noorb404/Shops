import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindComponent } from '../find/find.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegisterComponent } from '../register/register.component';
import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'find', component:FindComponent},
    {path:'register', component:RegisterComponent},
    {path:'profile', component:ProfileComponent, canActivate : [AuthGuard]},
    {path:'**', component:HomeComponent , pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }