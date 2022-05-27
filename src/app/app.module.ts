import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EllipsisPipe } from './about/pipes/ellipsis.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    AboutComponent,
    HomeComponent,
    TodoComponent,
    UsersComponent,
    ContactComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
