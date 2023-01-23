import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import User from 'src/app/models/User';

import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserFormComponent implements OnInit {
  userId: string | undefined;  
  user: User | undefined;
  isShowing: boolean = false;
  
  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private route: Router,
    public dialogRef: MatDialogRef<UserFormComponent>
  ) { };
  
  ngOnInit(): void {
    // Pode isso? Não, ele retorna valor para qualquer url, 
    // fazendo com que "this.userId" seja sempre verdadeiro e que ele sempre "entre" no formulário de atualização
    this.userId = this.route.url.substring(this.route.url.lastIndexOf('/') + 1).toString(); 

    if (this.userId.length < 24) this.userId = undefined; // Gambiarra! Consertar!

    if (this.userId) this.usersService.getUserById(this.userId).subscribe({
      next: (user) => {
        this.signupForm = this.formBuilder.group({
          name: user.name,
          email: user.email,
          password: user.password
        });
      },

      error: (error) => console.error(error)
    });
  };
  
  signupForm = this.formBuilder.group({
    name: '',
    email: '',
    password: ''
  });     

  onSubmit(): void {
    this.user = {
      _id: '',
      name: this.signupForm.value.name ?? '',
      email: this.signupForm.value.email ?? '',
      password: this.signupForm.value.password ?? ''
    };

    if (this.userId) {
      this.user._id = this.userId;

      this.usersService.updateUser(this.user).subscribe({
        next: () => { this.route.navigate(['/users']) }
      });

      return;
    };

    this.usersService.addUser(this.user).subscribe(() => this.route.navigate(['\login']));
  };

  onUpdateClick(): void {
    this.dialogRef.close();
  };

  public togglePasswordVisibility(): void {
    this.isShowing = !this.isShowing;
  };
};
