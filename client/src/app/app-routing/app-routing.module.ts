import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../errors/not-found/not-found.component';
import { ServerErrorComponent } from '../errors/server-error/server-error.component';
import { TestErrorsComponent } from '../errors/test-errors/test-errors.component';
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
    {path:'errors', component:TestErrorsComponent},
    {path:'not-found', component:NotFoundComponent},
    {path:'server-error', component:ServerErrorComponent},
    {path:'**', component:NotFoundComponent , pathMatch: 'full'}

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