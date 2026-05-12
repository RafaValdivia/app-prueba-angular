import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  usuario: string = '';
  clave: string = '';
  errorLogin: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    // Validación según pauta
    if (this.usuario === 'admin' && this.clave === '1234') {
      this.errorLogin = false;
      this.router.navigate(['/contacto']); // Redirige a inscripción
    } else {
      this.errorLogin = true;
    }
  }
}