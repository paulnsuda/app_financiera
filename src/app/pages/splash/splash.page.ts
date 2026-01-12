import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class SplashPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.checkUserStatus();
    }, 3000);
  }

  checkUserStatus() {
    const isOnboardingComplete = localStorage.getItem('onboardingComplete');

    if (isOnboardingComplete === 'true') {
      // Si el usuario ya existe, va al HOME (antes dashboard)
      console.log('Usuario antiguo -> Home');
      this.router.navigate(['/home']); 
    } else {
      // Si es nuevo, va al REGISTRO (antes onboarding)
      console.log('Usuario nuevo -> Register');
      this.router.navigate(['/register']); 
    }
  }
}