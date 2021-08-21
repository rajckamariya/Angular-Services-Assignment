import { Component, VERSION } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: { name: string; status: string }[] = [];

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.user = this.userService.users;
  }
}
