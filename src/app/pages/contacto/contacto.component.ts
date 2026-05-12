import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {
  // Campos requeridos por la pauta para el Grupo 9
  nuevoInscrito = { nombre: '', evento: '', email: '' };
  listaInscritos: any[] = [];

  ngOnInit() {
    // Recuperar datos al cargar la página (Requisito localStorage)
    const datosCargados = localStorage.getItem('inscritosEvento');
    if (datosCargados) {
      this.listaInscritos = JSON.parse(datosCargados);
    }
  }

  registrar() {
    if (this.nuevoInscrito.nombre && this.nuevoInscrito.evento && this.nuevoInscrito.email) {
      this.listaInscritos.push({ ...this.nuevoInscrito });
      // Guardar en almacenamiento local
      localStorage.setItem('inscritosEvento', JSON.stringify(this.listaInscritos));
      // Limpiar campos
      this.nuevoInscrito = { nombre: '', evento: '', email: '' };
    }
  }
}