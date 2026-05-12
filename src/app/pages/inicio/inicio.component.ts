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
  // Datos del formulario
  usuario: string = '';
  clave: string = '';
  errorLogin: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    // Validación simple para la evaluación
    if (this.usuario === 'admin' && this.clave === '1234') {
      this.errorLogin = false;
      // Redirige a la página de inscripción de eventos
      this.router.navigate(['/contacto']);
    } else {
      this.errorLogin = true;
    }
  }
}