import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent {
  certificate: any[] = [
    { value: 'matric-0', viewValue: 'Matric' },
    { value: 'diploma-1', viewValue: 'Diploma' },
    { value: 'intermediate-2', viewValue: 'Intermediate' },
    { value: 'graduate-3', viewValue: 'Graduate' },
    { value: 'postGraduate-4', viewValue: 'PostGraduate' },
  ];
}
