import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, user } from '@angular/fire/auth';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  // Observamos el estado del usuario en Firebase
  return user(auth).pipe(
    take(1), // Tomamos solo el primer valor (logueado o no)
    map(user => {
      if (user) {
        // Si hay usuario, ¡Pasa adelante!
        return true;
      } else {
        // Si NO hay usuario, ¡Alto ahí! Vete al login (tab1)
        router.navigate(['/tab1']);
        return false;
      }
    })
  );
};