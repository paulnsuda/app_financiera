import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonItem, IonLabel, IonInput, IonButton, IonIcon, IonText 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; // Para usar iconos
import { personOutline, mailOutline, lockClosedOutline } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
     IonLabel, IonInput, IonButton, IonIcon, 
    CommonModule, FormsModule,IonItem, IonText
  ]
})
export class RegisterPage {

  usuario = {
    nombre: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) { 
    // Registramos los iconos que usaremos
    addIcons({ personOutline, mailOutline, lockClosedOutline });
  }

  registrar() {
    // 1. Validación básica
    if (!this.usuario.nombre || !this.usuario.email || !this.usuario.password) {
      alert('Por favor completa todos los campos');
      return;
    }

    // 2. Guardar credenciales (Simulamos Backend)
    // Guardamos el nombre para saludarlo después
    localStorage.setItem('userName', this.usuario.nombre);
    
    // Nota: Aún NO marcamos 'onboardingComplete', eso se hace en la siguiente pantalla
    console.log('Usuario registrado:', this.usuario);

    // 3. Navegar a la pantalla de Ingresos (Pantalla 02)
    this.router.navigate(['/ingresos']);
  }

}