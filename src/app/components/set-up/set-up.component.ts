import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true
})
export class SetUpComponent {
  currentStep: number = 1;
  totalSteps = 4;

  form1 = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl('')
  });

  form2 = new FormGroup({
    businessName: new FormControl('', Validators.required),
    businessType: new FormControl('')
  });

  form3 = new FormGroup({
    needs: new FormControl('', Validators.required)
  });

  form4 = new FormGroup({
    confirmation: new FormControl('', Validators.required)
  });

  constructor(private router: Router) {
    this.currentStep = 1;
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isStepActive(step: number): boolean {
    return this.currentStep >= step;
  }

  onSubmit() {
    this.router.navigate(['/home']);
  }
}
