import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/utils/services/user.service';
import { MustMatch } from 'src/app/_helpers/must-match.validator';

// import custom validator to validate that password and confirm password fields match
 
@Component({
    selector: 'app-form-user',
    templateUrl: './form-user.component.html',
    styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
    u: User = new User();

  registerForm: FormGroup;
  submitted = false;

  constructor(private userService: UserService,private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          age: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue]
        }, {
          validator: MustMatch('password', 'confirmPassword')
      });  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      
    this.submitted = true;

    this.userService.addUser(this.u).subscribe(res => {
      alert("ajout avec succès !");
      console.log(this.u);
      this.u = new User();
    });

      // display form values on success
     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
