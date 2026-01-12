import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, 
  IonIcon, IonFooter, IonTabBar, IonTabButton, IonLabel, 
  IonItem, IonInput, IonSelect, IonSelectOption, IonDatetime
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, personCircleOutline, documentTextOutline, home, settingsOutline, calendarOutline } from 'ionicons/icons';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonButtons, IonButton, 
    IonIcon, IonFooter, IonTabBar, IonTabButton, IonLabel, IonInput, IonSelect, IonSelectOption, IonDatetime,
    CommonModule, FormsModule
  ]
})
export class GastosPage implements OnInit {

  // Variables del formulario
  monto: number | null = null;
  categoria: string = '';
  fecha: string = new Date().toISOString(); // Fecha actual por defecto

  constructor(private router: Router) { 
    addIcons({ menuOutline, personCircleOutline, documentTextOutline, home, settingsOutline, calendarOutline });
  }

  ngOnInit() {
  }

  guardarGasto() {
    // 1. Validar campos
    if (!this.monto || !this.categoria) {
      alert('Por favor ingresa un monto y una categoría.');
      return;
    }

    // 2. Crear objeto del gasto
    const nuevoGasto = {
      id: Date.now(), // ID único basado en la hora
      monto: this.monto,
      categoria: this.categoria,
      fecha: this.fecha
    };

    // 3. Obtener gastos anteriores del localStorage
    const gastosGuardados = localStorage.getItem('listaGastos');
    let listaGastos = [];
    
    if (gastosGuardados) {
      listaGastos = JSON.parse(gastosGuardados);
    }

    // 4. Agregar nuevo gasto y guardar
    listaGastos.push(nuevoGasto);
    localStorage.setItem('listaGastos', JSON.stringify(listaGastos));

    console.log('Gasto guardado:', nuevoGasto);
    alert('¡Gasto registrado con éxito!');

    // 5. Navegar al Home para ver el saldo actualizado
    this.router.navigate(['/home']);
  }

  // Navegación del Footer
  irAHome() { this.router.navigate(['/home']); }
  irAReportes() { this.router.navigate(['/reportes']); } // Pantalla 05 (Próxima)
  irAConfig() { console.log('Ir a Config'); }

}