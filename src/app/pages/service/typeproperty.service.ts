import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

import { TypeProperty } from '../models/TypeProperty';
import { TypePropertyResponse } from '../models/TypePropertyResponse';

@Injectable({ providedIn: 'root' })
export class TypePropertyService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<TypePropertyResponse[]>(`${environment.apiUrl}/PredioTipo`).pipe(
      map(data => data.map(item => ({
      IdPredioTipo: item.idPredioTipo,
      NombreTipo: item.nombreTipo
    } as TypeProperty)))
    );
  }
}