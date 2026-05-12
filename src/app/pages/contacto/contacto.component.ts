import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
})
export class ContactoComponent implements OnInit {
  // Modelo para el formulario
  nuevoInscrito = { nombre: '', evento: '', email: '' };
  // Lista para visualización y localStorage
  listaInscritos: any[] = [];

  ngOnInit() {
    // Recuperar datos al iniciar (Requisito localStorage) [cite: 10]
    const datosCargados = localStorage.getItem('inscritosEvento');
    if (datosCargados) {
      this.listaInscritos = JSON.parse(datosCargados);
    }
  }

  registrar() {
    if (this.nuevoInscrito.nombre && this.nuevoInscrito.evento && this.nuevoInscrito.email) {
      this.listaInscritos.push({ ...this.nuevoInscrito });
      // Guardar en localStorage [cite: 10]
      localStorage.setItem('inscritosEvento', JSON.stringify(this.listaInscritos));
      // Limpiar formulario
      this.nuevoInscrito = { nombre: '', evento: '', email: '' };
      alert('¡Inscripción exitosa!');
    }
  }
}