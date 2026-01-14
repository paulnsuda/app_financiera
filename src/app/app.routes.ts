import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard'; // <--- Importamos al policía (Guardia)

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab1', // Al entrar, nos vamos directo al Login
    pathMatch: 'full',
  },
  {
    path: 'tab1', // PÁGINA DE ACCESO (Login/Registro) - Pública
    loadComponent: () => import('./tab1/tab1.page').then(m => m.Tab1Page)
  },
  {
    path: 'splash', // Splash Screen - Pública
    loadComponent: () => import('./pages/splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: 'home', // DASHBOARD - ¡PROTEGIDA!
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage),
    canActivate: [authGuard] // <--- Si no hay login, el guardia no te deja pasar
  },
  {
    path: 'ingresos', // INGRESOS - ¡PROTEGIDA!
    loadComponent: () => import('./pages/ingresos/ingresos.page').then( m => m.IngresosPage),
    canActivate: [authGuard]
  },
  {
    path: 'gastos', // GASTOS - ¡PROTEGIDA!
    loadComponent: () => import('./pages/gastos/gastos.page').then( m => m.GastosPage),
    canActivate: [authGuard]
  },
  {
    path: 'reportes', // RESUMEN - ¡PROTEGIDA!
    loadComponent: () => import('./pages/resumen/resumen.page').then( m => m.ResumenPage),
    canActivate: [authGuard]
  },
  {
    path: 'register', // Página de registro antigua (por si acaso) - Pública
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
];