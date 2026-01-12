import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, 
  IonIcon, IonFooter, IonTabBar, IonTabButton, IonLabel 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, personCircleOutline, documentTextOutline, home, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonButtons, IonButton, 
    IonIcon, IonFooter, IonTabBar, IonTabButton, IonLabel,
    CommonModule, FormsModule
  ]
})
export class HomePage implements OnInit {

  nombreUsuario: string = 'Usuario';
  totalGastos: number = 0; 
  totalAhorro: number = 0;
  
  constructor(private router: Router) { 
    // Registramos los iconos
    addIcons({ menuOutline, personCircleOutline, documentTextOutline, home, settingsOutline });
  }

  ionViewWillEnter() {
    // Se ejecuta cada vez que la pantalla va a entrar (ideal para recargar datos)
    this.cargarDatos();
  }

  ngOnInit() {}

  cargarDatos() {
    // 1. Recuperar Nombre
    const nombreGuardado = localStorage.getItem('userName');
    if (nombreGuardado) {
      this.nombreUsuario = nombreGuardado;
    }

    // 2. Recuperar Configuración Inicial (Ingresos)
    const configData = localStorage.getItem('userConfig');
    let ingresoMensual = 0;
    
    if (configData) {
      const datos = JSON.parse(configData);
      ingresoMensual = parseFloat(datos.ingreso) || 0;
    }

    // 3. CALCULAR GASTOS REALES
    const gastosData = localStorage.getItem('listaGastos');
    let sumaGastos = 0;

    if (gastosData) {
      const lista = JSON.parse(gastosData);
      // Sumamos todos los montos de la lista
      sumaGastos = lista.reduce((total: number, item: any) => total + parseFloat(item.monto), 0);
    }

    this.totalGastos = sumaGastos;

    // 4. Calcular Ahorro Actual
    this.totalAhorro = ingresoMensual - this.totalGastos;
  }

  // --- Navegación ---
  // Nota: Estas funciones ahora están DENTRO de la clase, por lo que funcionarán.

  irAPerfil() {
    console.log('Navegando a Perfil...');
    // Descomenta esto cuando crees la página de perfil
    // this.router.navigate(['/perfil']); 
  }

  irAReportes() {
    // Esta función lleva a la Pantalla 05 (Historial/Reportes)
    console.log('Navegando a Reportes...');
    this.router.navigate(['/reportes']); 
  }

  irAConfiguracion() {
    console.log('Navegando a Configuración...');
    // Descomenta esto cuando crees la página de configuración
    // this.router.navigate(['/configuracion']); 
  }

  // Agrega esta función junto a las otras de navegación (irAReportes, irAPerfil, etc.)
irAIngresos() {
  console.log('Navegando a Ingresos...');
  this.router.navigate(['/ingresos']);
}
}