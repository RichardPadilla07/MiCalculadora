import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class LoginPage {
  username: string = '';
  password: string = '';

  private readonly VALID_USER = 'admin';
  private readonly VALID_PASS = '1234';

  constructor(private router: Router, private alertCtrl: AlertController) { }

  async login() {
    if (this.username === this.VALID_USER && this.password === this.VALID_PASS) {
      await this.router.navigateByUrl('/home');
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
