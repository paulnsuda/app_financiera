import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- VITAL para que funcionen los inputs
import { IonicModule, AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // <--- Para navegar al Home
import { AuthService } from '../services/auth'; // <--- Importa tu servicio de autenticación

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] // <--- Asegúrate de que FormsModule esté aquí
})
export class Tab1Page {
  // Inyecciones de dependencias
  public authService = inject(AuthService);
  private router = inject(Router);
  private alertCtrl = inject(AlertController);

  // Variables para capturar lo que escribe el usuario
  email: string = '';
  password: string = '';

  constructor() {}

  // --- MÉTODO 1: GOOGLE ---
  async loginGoogle() {
    try {
      const user = await this.authService.loginConGoogle();
      if (user) {
        // Si el login es correcto, nos vamos al dashboard
        this.navegarAlHome();
      }
    } catch (error) {
      console.error(error);
      this.mostrarAlerta('Error con Google', 'No se pudo iniciar sesión.');
    }
  }

  // --- MÉTODO 2: LOGIN CON CORREO ---
  async ingresar() {
    if (!this.email || !this.password) {
      this.mostrarAlerta('Campos vacíos', 'Por favor escribe tu correo y contraseña.');
      return;
    }

    try {
      const user = await this.authService.login(this.email, this.password);
      if (user) {
        this.navegarAlHome();
      }
    } catch (error: any) {
      // Manejo de errores comunes de Firebase
      let mensaje = 'Ocurrió un error inesperado.';
      if (error.code === 'auth/invalid-credential') mensaje = 'Correo o contraseña incorrectos.';
      if (error.code === 'auth/user-not-found') mensaje = 'El usuario no existe.';
      if (error.code === 'auth/wrong-password') mensaje = 'Contraseña incorrecta.';
      
      this.mostrarAlerta('Error de acceso', mensaje);
    }
  }

  // --- MÉTODO 3: REGISTRO ---
  async registrarse() {
    if (!this.email || !this.password) {
      this.mostrarAlerta('Atención', 'Necesitas un correo y contraseña para registrarte.');
      return;
    }

    try {
      await this.authService.registrar(this.email, this.password);
      await this.mostrarAlerta('¡Éxito!', 'Usuario creado correctamente. Bienvenido.');
      this.navegarAlHome(); // Entramos directo tras registrarse
    } catch (error: any) {
      let mensaje = 'No se pudo crear la cuenta.';
      if (error.code === 'auth/email-already-in-use') mensaje = 'Este correo ya está registrado.';
      if (error.code === 'auth/weak-password') mensaje = 'La contraseña debe tener al menos 6 caracteres.';
      
      this.mostrarAlerta('Error de registro', mensaje);
    }
  }

  // Función auxiliar para navegar
  navegarAlHome() {
    this.router.navigate(['/home']);
  }

  // Función auxiliar para mostrar alertas bonitas
  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}