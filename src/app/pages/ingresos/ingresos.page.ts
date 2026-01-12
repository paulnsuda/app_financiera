import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonItem, IonLabel, IonInput, IonButton, IonIcon 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonItem, IonLabel, IonInput, IonButton,
    CommonModule, FormsModule
  ]
})
export class IngresosPage {

  ingresoMensual: number | null = null;
  otrosIngresos: number | null = null;
  metaAhorro: number | null = null;

  constructor(private router: Router) { }

  guardarDatos() {
    // 1. Validamos
    if (!this.ingresoMensual || !this.metaAhorro) {
      alert('Por favor ingresa al menos tu Ingreso Mensual y tu Meta.');
      return;
    }

    // 2. Guardamos datos
    const datosUsuario = {
      ingreso: this.ingresoMensual,
      otros: this.otrosIngresos || 0,
      meta: this.metaAhorro
    };

    localStorage.setItem('userConfig', JSON.stringify(datosUsuario));
    localStorage.setItem('onboardingComplete', 'true'); // Marca de usuario antiguo

    console.log('Datos guardados:', datosUsuario);

    // 3. Navegamos al HOME (Aquí estaba el error)
    this.router.navigate(['/home']); 
  }
}