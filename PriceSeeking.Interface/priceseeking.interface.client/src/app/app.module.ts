import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddLinksComponent } from './components/add-links/add-links.component';
import { HomeComponent } from './components/home/home.component';
import { ObterInfoComponent } from './components/obter-info/obter-info.component';
import { DeleteLinksComponent } from './components/delete-links/delete-links.component';
import { DeleteInputComponent } from './components/delete-input/delete-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddLinksComponent,
    HomeComponent,
    ObterInfoComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
