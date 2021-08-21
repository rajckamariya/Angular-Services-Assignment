import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UserService } from './user.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ActiveUsersComponent, InactiveUsersComponent],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {}
