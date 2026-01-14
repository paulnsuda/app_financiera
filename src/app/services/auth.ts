import { Injectable, inject } from '@angular/core';
import { 
  Auth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  user,
  createUserWithEmailAndPassword, // <--- NUEVO
  signInWithEmailAndPassword      // <--- NUEVO
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  user$ = user(this.auth);

  // Tu método de Google que ya funciona
  async loginConGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      return await signInWithPopup(this.auth, provider);
    } catch (error) {
      console.error('Error Google:', error);
      return null;
    }
  }

  // --- MÉTODO 2: REGISTRO CON EMAIL ---
  async registrar(email: string, pass: string) {
    try {
      const credencial = await createUserWithEmailAndPassword(this.auth, email, pass);
      return credencial;
    } catch (error) {
      console.error('Error Registro:', error);
      throw error; // Lanzamos el error para mostrarlo en la pantalla
    }
  }

  // --- MÉTODO 2: LOGIN CON EMAIL ---
  async login(email: string, pass: string) {
    try {
      const credencial = await signInWithEmailAndPassword(this.auth, email, pass);
      return credencial;
    } catch (error) {
      console.error('Error Login:', error);
      throw error;
    }
  }

  async logout() {
    return await signOut(this.auth);
  }
}