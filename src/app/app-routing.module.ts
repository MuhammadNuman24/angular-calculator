import { NgModule } from '@angular/core';
import { AddComponent } from './add/add.component';
import { SubtractComponent } from './subtract/subtract.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { DivideComponent } from './divide/divide.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', pathMatch: 'full', component: AddComponent },
{ path: 'subtract', component : SubtractComponent },
{ path: 'multiply',component: MultiplyComponent },
{ path: 'divide',component: DivideComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
