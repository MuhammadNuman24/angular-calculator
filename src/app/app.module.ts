import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { SubtractComponent } from './subtract/subtract.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { DivideComponent } from './divide/divide.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SubtractComponent,
    MultiplyComponent,
    DivideComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
