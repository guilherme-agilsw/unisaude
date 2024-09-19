import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private navCtrl: NavController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.navCtrl.navigateRoot('/tabs/tab1');  // Redirect after login
    } catch (error) {
      this.errorMessage = "Invalid login credentials. Please try again.";
      console.log(error);
    }
  }
}
