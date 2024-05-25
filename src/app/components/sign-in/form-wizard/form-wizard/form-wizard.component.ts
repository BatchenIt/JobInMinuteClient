import { Component, Input } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-form-wizard',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './form-wizard.component.html',
  styleUrl: './form-wizard.component.css'
})
export class FormWizardComponent {

  @Input() isEmployer: boolean = false;

  firstFormGroup = this._formBuilder.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isLinear: boolean = false;
  hide: boolean = true;

  constructor(private _formBuilder: FormBuilder) { }

  toggleHidePassword(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
}
