import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

import { Property } from '../models/Property';
import { PropertyResponse } from '../models/PropertyResponse';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<PropertyResponse[]>(`${environment.apiUrl}/Predio`).pipe(
      map(data => data.map(item => ({
        IdPredio: item.idPredio,
        IdPredioTipo: item.idPredioTipo,
        NombrePredio: item.nombrePredio,
        Descripcion: item.descripcion,
        AreaPredio: item.areaPredio,
        Direccion: item.direccion,
        Capacidad: item.capacidad,
        RegistroAgua: item.registroAgua,
        RegistroLuz: item.registroLuz,
        Ubigeo: item.ubigeo,
        Latitud: item.latitud,
        Longitud: item.longitud,
        Imagen: item.imagen,
        NombreTipo: item.nombreTipo
      }as Property)))
    );
  }

  getTypes() {
    return this.http.get<{ IdPredioTipo: string; NombreTipo: string }[]>(`${environment.apiUrl}/PredioTipo`);
  }

  update(property: Property) {
    return this.http.patch<PropertyResponse>(`${environment.apiUrl}/Predio/${property.IdPredio}`, property).pipe(
      map(item => ({
      IdPredio: item.idPredio,
      IdPredioTipo: item.idPredioTipo,
      NombrePredio: item.nombrePredio,
      Descripcion: item.descripcion,
      AreaPredio: item.areaPredio,
      Direccion: item.direccion,
      Capacidad: item.capacidad,
      RegistroAgua: item.registroAgua,
      RegistroLuz: item.registroLuz,
      Ubigeo: item.ubigeo,
      Latitud: item.latitud,
      Longitud: item.longitud,
      Imagen: item.imagen,
      NombreTipo: item.nombreTipo
    } as Property))
    );
  }

}