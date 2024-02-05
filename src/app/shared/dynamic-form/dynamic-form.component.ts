import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  @Input() formGroups: any = [];
  form!: FormGroup;
  @Output() submitFormValuesData = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.form = this.toFormGroup();
    console.log('form====', this.form);
  }

  submitFormValues() {
    if (this.form.valid) {
      this.submitFormValuesData.emit(this.form.value);
    } else {
      alert('Please fill mandatory fields');
    }
  }

  toFormGroup() {
    const group: any = {};

    this.formGroups.forEach(
      (formGroup: { key: string | number; required: any; value: any }) => {
        group[formGroup.key] = formGroup.required
          ? new FormControl(formGroup.value || '', Validators.required)
          : new FormControl(formGroup.value || '');
      }
    );
    return new FormGroup(group);
  }
}
