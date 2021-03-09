import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/utils/services/user.service';
import { MustMatch } from 'src/app/_helpers/must-match.validator';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  u: User;
  users: User[] = [];


  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({ 
      password: ['', [Validators.required, Validators.minLength(6)]] 
        } );

    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)) {
      this.userService.getUserById(id).subscribe(
        response => {
          this.u = response;
          console.log(response);
        }
      )

    } else {
      this.router.navigate(['/list-user']);
    }

  }

  get f() { return this.registerForm.controls; }


  update() {
    this.userService.editUser(this.u).subscribe(res => {
      console.log(this.u);

 
      this.u = new User();

      this.router.navigate(['/list-user/1']);
      console.log(this.u);


    });

  }
  annuler() {
    this.router.navigate(['/list-user/']);

  }


}
