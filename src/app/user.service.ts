import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() {}

  users: [
    { name: 'Rahul'; status: 'Active' },
    { name: 'Umesh'; status: 'Inactive' },
    { name: 'Sanju'; status: 'Active' },
    { name: 'Dhaval'; status: 'Active' },
    { name: 'Karan'; status: 'Active' }
  ];
}
