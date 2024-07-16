import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  registrationForm: FormGroup;
  isEmployer: boolean = false;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      userType: ['candidate', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: [''],
      businessNumber: [''],
      companyName: [''],
      companyType: [''],
      description: ['']
    });

    this.onChanges();
  }

  onChanges(): void {
    this.registrationForm.get('userType')?.valueChanges.subscribe(val => {
      this.isEmployer = val === 'employer';
      this.setValidators();
    });
  }

  setValidators(): void {
    if (this.isEmployer) {
      this.registrationForm.get('address')?.clearValidators();
      this.registrationForm.get('businessNumber')?.setValidators([Validators.required]);
      this.registrationForm.get('companyName')?.setValidators([Validators.required]);
      this.registrationForm.get('companyType')?.setValidators([Validators.required]);
      this.registrationForm.get('description')?.setValidators([Validators.required]);
    } else {
      this.registrationForm.get('address')?.setValidators([Validators.required]);
      this.registrationForm.get('businessNumber')?.clearValidators();
      this.registrationForm.get('companyName')?.clearValidators();
      this.registrationForm.get('companyType')?.clearValidators();
      this.registrationForm.get('description')?.clearValidators();
    }

    this.registrationForm.get('address')?.updateValueAndValidity();
    this.registrationForm.get('businessNumber')?.updateValueAndValidity();
    this.registrationForm.get('companyName')?.updateValueAndValidity();
    this.registrationForm.get('companyType')?.updateValueAndValidity();
    this.registrationForm.get('description')?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
    }
  }

}
