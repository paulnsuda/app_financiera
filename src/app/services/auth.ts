import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  // Este observable nos dirá en tiempo real si el usuario está logueado
  user$ = user(this.auth);

  async loginConGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      return await signInWithPopup(this.auth, provider);
    } catch (error) {
      console.error('Error al autenticar:', error);
      return null;
    }
  }

  async logout() {
    return await signOut(this.auth);
  }
}