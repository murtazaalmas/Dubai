import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-management',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './account-management.component.html',
  styleUrl: './account-management.component.scss'
})
export class AccountManagementComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  showLoginForm: boolean = true;
  loginError: string = '';
  signupError: string = '';
  isFormSubmitted: boolean = false;
  showPassword: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
    this.loginError = '';
    this.signupError = '';
    this.isFormSubmitted = false;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onLoginSubmit() {
    this.isFormSubmitted = true;
    if (this.loginForm.valid) {
      console.log('Login form submitted:', this.loginForm.value);
      // Implement login logic here
      this.router.navigate(['/set-up']);
    } else {
      this.loginError = 'Please fill in all required fields correctly.';
    }
  }

  onSignupSubmit() {
    this.isFormSubmitted = true;
    if (this.signupForm.valid) {
      console.log('Signup form submitted:', this.signupForm.value);
      // Implement signup logic here
      this.router.navigate(['/home']);
    } else {
      this.signupError = 'Please fill in all required fields correctly.';
    }
  }
} 