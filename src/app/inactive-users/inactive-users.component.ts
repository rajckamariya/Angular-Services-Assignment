import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() user: { name: string; status: string };
  @Input() id: number;
  constructor(private userService: UserService) {}
  onSetTo(status: string) {
    this.userService.changeStatus(this.id, status);
  }
  ngOnInit() {}
}
