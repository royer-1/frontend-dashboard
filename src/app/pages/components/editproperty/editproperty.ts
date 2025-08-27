import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { Table, TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';

import { Property } from '@/pages/service/property.service';
import { Propertys } from '@/pages/propertys/propertys';

@Component({
  selector: 'app-editproperty',
  imports: [FormsModule, CommonModule, ButtonModule, InputTextModule, InputNumberModule, InputIconModule, SelectModule, TextareaModule, TableModule, SelectButtonModule],
  templateUrl: './editproperty.html',
  styleUrl: './editproperty.scss'
})
export class Editproperty implements OnInit{

  visibleEdit: boolean = false;

  @Input() property: any;

  tipoInmuebleOptions: string[] = [
    'Casa',
    'Departamento',
    'Habitación',
    'Oficina',
    'Local comercial'
  ];

  timpoOptions: string[] = [
    'Por dia',
    'Semanal',
    'Mensual'
  ];

  estadoOptions = [
    { label: 'Disponible', value: 'Disponible' },
    { label: 'Ocupado', value: 'Ocupado' },
    { label: 'Reservado', value: 'Reservado' },
    { label: 'Mantenimiento', value: 'Mantenimiento' }
  ];

  ngOnInit(): void {
    // Aquí podrías hacer validaciones o cargar valores por defecto
  }

}
