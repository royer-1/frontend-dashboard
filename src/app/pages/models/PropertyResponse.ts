export interface PropertyResponse {
  idPredio: string;
  idPredioTipo: string;
  nombrePredio: string;
  descripcion: string;
  areaPredio: number;
  direccion: string;
  capacidad?: number;
  registroAgua?: boolean;
  registroLuz?: boolean;
  ubigeo?: string;
  latitud?: string;
  longitud?: string;
  imagen?: string;
  nombreTipo?: string;
}