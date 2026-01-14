import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // CAMBIO 1: Redirigimos directo al Tab1 para ver el botón de Google
    // (Saltamos el splash temporalmente para probar la autenticación)
    redirectTo: 'tab1', 
    pathMatch: 'full',
  },
  {
    // CAMBIO 2: Agregamos la ruta del Tab1 donde pusimos el código
    path: 'tab1',
    loadComponent: () => import('./tab1/tab1.page').then(m => m.Tab1Page)
  },
  {
    path: 'splash',
    loadComponent: () => import('./pages/splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'ingresos',
    loadComponent: () => import('./pages/ingresos/ingresos.page').then( m => m.IngresosPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'gastos',
    loadComponent: () => import('./pages/gastos/gastos.page').then( m => m.GastosPage)
  },
  {
    path: 'reportes',
    loadComponent: () => import('./pages/resumen/resumen.page').then( m => m.ResumenPage)
  },
];