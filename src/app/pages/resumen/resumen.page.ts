import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, 
  IonIcon, IonFooter, IonTabBar, IonTabButton, IonLabel, 
  IonList, IonItem, IonNote, IonText, IonDatetimeButton, IonModal, IonDatetime 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  menuOutline, personCircleOutline, documentTextOutline, 
  home, settingsOutline, calendarOutline, walletOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonButtons, IonButton, 
    IonIcon, IonFooter, IonTabBar, IonTabButton, IonLabel,
    IonList, IonItem, IonNote,
    CommonModule, FormsModule
  ]
})
export class ResumenPage implements OnInit {

  listaMovimientos: any[] = [];
  
  constructor(private router: Router) { 
    addIcons({ 
      menuOutline, personCircleOutline, documentTextOutline, 
      home, settingsOutline, calendarOutline, walletOutline 
    });
  }

  ionViewWillEnter() {
    this.cargarMovimientos();
  }

  ngOnInit() {
  }

  cargarMovimientos() {
    // Recuperamos la lista de 'listaGastos' del localStorage
    const data = localStorage.getItem('listaGastos');
    
    if (data) {
      // Parseamos los datos y los invertimos para ver el más reciente primero
      this.listaMovimientos = JSON.parse(data).reverse();
    } else {
      this.listaMovimientos = [];
    }
  }

  // Navegación Footer
  irAHome() { this.router.navigate(['/home']); }
  irAResumen() { console.log('Ya estás en Resumen'); }
  irAConfig() { console.log('Ir a Configuración'); } // Pendiente Pantalla Config

}