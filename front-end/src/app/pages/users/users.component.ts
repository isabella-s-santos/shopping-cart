import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

import User from 'src/app/models/User';

import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {
  @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;
  dialogRef?: MatDialogRef<any, any>;

  users: User[] = [];

  searchField: FormControl = new FormControl();

  displayedColumns: string[] = ['name', 'email', 'icons'];
  
  constructor(
    private usersService: UsersService,
    private dialog: MatDialog
  ) { };
    
  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (users) => { this.users = users }
    });

    this.searchField.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(input => this.usersService.searchUser(input))
      )
      .subscribe(users => this.users = users);
  };

  openDialog(): void {
    if (this.dialogTemplate) {
      this.dialogRef = this.dialog.open(this.dialogTemplate, { 
        data: { title: 'Edit' }
      });
    };
  };

  deleteUser(id: string): void {
    this.usersService.deleteUser(id).subscribe({
      next: () => this.users = this.users.filter(user => user._id != id)
    });
  };
};