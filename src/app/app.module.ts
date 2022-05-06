import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CompletatiComponent } from './pages/completati/completati.component';
import { TodoComponent } from './pages/todo/todo/todo.component';

const routes: Route[]= [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'completati',
    component: CompletatiComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompletatiComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
