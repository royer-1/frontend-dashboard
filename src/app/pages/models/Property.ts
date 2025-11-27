export interface Property {
  IdPredio: string;
  IdPredioTipo: string;
  NombrePredio: string;
  Descripcion: string;
  AreaPredio: number;
  Direccion: string;
  Capacidad?: number;
  RegistroAgua?: boolean;
  RegistroLuz?: boolean;
  Ubigeo?: string;
  Latitud?: string;
  Longitud?: string;
  Imagen?: string;
  NombreTipo?: string;
}