import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginIcon = faSignInAlt;
  buttonClicked = false;

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private auth: AuthService,
    private router: Router,
    private notification: ToastrService
  ) { }

  ngOnInit() {
  }

onSubmit(): void {
  this.buttonClicked = true;
  this.auth.userLogin(this.form.value).subscribe(result => {
    this.router.navigate(['/dashboard']);
    this.notification.success('Logged in successfully', 'Kestavar Notification');
  },
  error => {
    this.notification.error('An error occured, please try again', 'Kestavar Notification')
    this.buttonClicked = false;
  });
}

}
