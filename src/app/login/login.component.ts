import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginIcon = faSignInAlt;

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

onSubmit(): void {
  this.auth.userAuthentication(this.form.value).subscribe(
    result => console.log(result),
    error => console.log(error)
  );
}
}
