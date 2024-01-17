import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userData } from '../models/data.model';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

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
  userData: any;

  constructor(
    private fb: FormBuilder,
    private _employeeService: EmployeeService,
    private _dialogRef: DialogRef<EmpAddEditComponent>
  ) {
    this.empForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      dateDate: [null, Validators.required],
      gender: ['', Validators.required],
      education: ['', Validators.required],
      company: ['', Validators.required],
      experience: ['', Validators.required],
      package: ['', Validators.required],
    });
  }

  onFormSumbit() {
    if (this.empForm.valid) {
      this._employeeService.addEmployee(this.empForm.value).subscribe({
        next: (res: any) => {
          alert('Employee added sucessfully');
          this._dialogRef.close();
        },
        error: (err: any) => {
          alert('There is an Error!!!');
        },
      });
    }
  }
}
