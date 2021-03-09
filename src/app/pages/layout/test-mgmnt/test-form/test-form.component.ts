import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {
  radioGroupValue = 'This is value 2';
  form: FormGroup;

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      role: []
    });
  }

  

}
