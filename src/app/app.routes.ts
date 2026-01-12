import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
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
    // IMPORTANTE: La ruta se llama 'reportes' para coincidir con tu menú,
    // pero carga la página 'Resumen' que acabamos de crear.
    path: 'reportes',
    loadComponent: () => import('./pages/resumen/resumen.page').then( m => m.ResumenPage)
  },
  
  // --- Espacio para futuras páginas (Configuración / Perfil) ---
  // Cuando las crees con "ionic generate page...", agrégalas aquí abajo:
  /*
  {
    path: 'configuracion',
    loadComponent: () => import('./pages/configuracion/configuracion.page').then( m => m.ConfiguracionPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then( m => m.PerfilPage)
  },
  */
];