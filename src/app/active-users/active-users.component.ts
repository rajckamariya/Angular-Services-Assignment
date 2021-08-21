import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() user: { name: string; status: string };
  @Input() id: number;
  constructor(private userService: UserService) {}

  ngOnInit() {}

  onSetTo(status: string) {
    this.userService.changeStatus(this.id, status);
  }
}
