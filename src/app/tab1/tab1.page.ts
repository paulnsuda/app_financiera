import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth'; // El servicio que creamos
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class Tab1Page {
  // Inyectamos el servicio para usarlo en el HTML
  public authService = inject(AuthService);

  async login() {
    await this.authService.loginConGoogle();
  }
}