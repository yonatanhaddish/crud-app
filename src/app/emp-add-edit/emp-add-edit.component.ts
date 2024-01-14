import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent {
  empForm!: FormGroup;

  certificate: any[] = [
    { value: 'matric-0', viewValue: 'Matric' },
    { value: 'diploma-1', viewValue: 'Diploma' },
    { value: 'intermediate-2', viewValue: 'Intermediate' },
    { value: 'graduate-3', viewValue: 'Graduate' },
    { value: 'postGraduate-4', viewValue: 'PostGraduate' },
  ];

  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: [''],
      dateDate: [null],
      gender: [''],
      education: [''],
      company: [''],
      experience: [''],
      package: [''],
    });
  }

  onFormSumbit() {
    console.log(this.empForm);
  }
}
