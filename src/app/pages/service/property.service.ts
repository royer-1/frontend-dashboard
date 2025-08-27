import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Property{
  idInmuebles: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  area: number;
  capacidad: string;
  direccion: string;
  registro_agua: string;
  registro_luz: string;
  ubigeo: string;
  latitud: string;
  longitud: string;
}

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  getPropertyData(){
    return [
      {
        idInmuebles: 1,
        nombre: "Quiosco Central",
        imagen: "https://ibentoinfraestructuras.es/wp-content/uploads/2020/08/categoria-1.png",
        descripcion: "Quiosco de venta de snacks y bebidas",
        area: 25,
        capacidad: "",
        direccion: "Av. Principal 123",
        registro_agua: "Si",
        registro_luz: "Si",
        ubigeo: "150101",
        latitud: "-12.0453",
        longitud: "-77.0311"
      },
      {
        idInmuebles: 2,
        nombre: "Servicios Higiénicos Norte",
        imagen: "https://img10.naventcdn.com/avisos/111/01/47/13/97/82/360x266/1549089186.jpg?isFirstImage=true",
        descripcion: "Servicios higiénicos públicos zona norte",
        area: 40,
        capacidad: "",
        direccion: "Jr. Los Olivos 456",
        registro_agua: "Si",
        registro_luz: "No",
        ubigeo: "150102",
        latitud: "-12.0501",
        longitud: "-77.0402"
      },
      {
        idInmuebles: 3,
        nombre: "Almacén Pequeño A",
        imagen: "https://img10.naventcdn.com/avisos/111/01/47/13/97/82/360x266/1549089186.jpg?isFirstImage=true",
        descripcion: "Almacén para insumos varios",
        area: 30,
        capacidad: "",
        direccion: "Calle Comercio 789",
        registro_agua: "No",
        registro_luz: "Si",
        ubigeo: "150103",
        latitud: "-12.0560",
        longitud: "-77.0388"
      },
      {
        idInmuebles: 4,
        nombre: "Quiosco Escolar",
        imagen: "https://ibentoinfraestructuras.es/wp-content/uploads/2020/08/categoria-1.png",
        descripcion: "Quiosco de alimentos saludables escolares",
        area: 20,
        capacidad: "",
        direccion: "Av. Universitaria 1000",
        registro_agua: "Si",
        registro_luz: "Si",
        ubigeo: "150104",
        latitud: "-12.0622",
        longitud: "-77.0451"
      },
      {
        idInmuebles: 5,
        nombre: "Servicios Higiénicos Sur",
        imagen: "https://img10.naventcdn.com/avisos/111/01/47/13/97/82/360x266/1549089186.jpg?isFirstImage=true",
        descripcion: "Servicios higiénicos públicos zona sur",
        area: 45,
        capacidad: "",
        direccion: "Av. Grau 1122",
        registro_agua: "Si",
        registro_luz: "Si",
        ubigeo: "150105",
        latitud: "-12.0700",
        longitud: "-77.0520"
      },
      {
        idInmuebles: 6,
        nombre: "Almacén de Herramientas",
        imagen: "https://img10.naventcdn.com/avisos/111/01/47/13/97/82/360x266/1549089186.jpg?isFirstImage=true",
        descripcion: "Almacén de herramientas de mantenimiento",
        area: 35,
        capacidad: "",
        direccion: "Jr. Puno 334",
        registro_agua: "No",
        registro_luz: "Si",
        ubigeo: "150106",
        latitud: "-12.0725",
        longitud: "-77.0600"
      },
      {
        idInmuebles: 7,
        nombre: "Quiosco de Libros",
        imagen: "https://ibentoinfraestructuras.es/wp-content/uploads/2020/08/categoria-1.png",
        descripcion: "Quiosco de venta de periódicos y revistas",
        area: 18,
        capacidad: "",
        direccion: "Av. Arequipa 2020",
        registro_agua: "No",
        registro_luz: "Si",
        ubigeo: "150107",
        latitud: "-12.0802",
        longitud: "-77.0705"
      },

      {
        idInmuebles: 8,
        nombre: "Auditorio Principal",
        imagen: "https://live.staticflickr.com/7408/8762648792_f0812c2328_b.jpg",
        descripcion: "Auditorio principal para conferencias",
        area: 300,
        capacidad: "250 personas",
        direccion: "Av. Central 321",
        registro_agua: "",
        registro_luz: "",
        ubigeo: "150108",
        latitud: "-12.0900",
        longitud: "-77.0800"
      },
      {
        idInmuebles: 9,
        nombre: "Auditorio Norte",
        imagen: "https://live.staticflickr.com/7408/8762648792_f0812c2328_b.jpg",
        descripcion: "Auditorio mediano para charlas",
        area: 180,
        capacidad: "120 personas",
        direccion: "Jr. Amazonas 876",
        registro_agua: "",
        registro_luz: "",
        ubigeo: "150109",
        latitud: "-12.0925",
        longitud: "-77.0822"
      },
      {
        idInmuebles: 10,
        nombre: "Auditorio de Eventos Especiales",
        imagen: "https://live.staticflickr.com/7408/8762648792_f0812c2328_b.jpg",
        descripcion: "Espacio para eventos culturales",
        area: 250,
        capacidad: "200 personas",
        direccion: "Av. Colonial 543",
        registro_agua: "",
        registro_luz: "",
        ubigeo: "150110",
        latitud: "-12.0955",
        longitud: "-77.0855"
      },
      {
        idInmuebles: 11,
        nombre: "Auditorio Sur",
        imagen: "https://live.staticflickr.com/7408/8762648792_f0812c2328_b.jpg",
        descripcion: "Auditorio pequeño para reuniones",
        area: 100,
        capacidad: "70 personas",
        direccion: "Jr. Piura 234",
        registro_agua: "",
        registro_luz: "",
        ubigeo: "150111",
        latitud: "-12.0988",
        longitud: "-77.0880"
      },
      {
        idInmuebles: 12,
        nombre: "Auditorio Ejecutivo",
        imagen: "https://live.staticflickr.com/7408/8762648792_f0812c2328_b.jpg",
        descripcion: "Auditorio corporativo para reuniones ejecutivas",
        area: 150,
        capacidad: "90 personas",
        direccion: "Av. La Marina 1500",
        registro_agua: "",
        registro_luz: "",
        ubigeo: "150112",
        latitud: "-12.1011",
        longitud: "-77.0915"
      },
      {
        idInmuebles: 13,
        nombre: "Auditorio Cultural",
        imagen: "https://live.staticflickr.com/7408/8762648792_f0812c2328_b.jpg",
        descripcion: "Espacio para actividades artísticas y culturales",
        area: 220,
        capacidad: "160 personas",
        direccion: "Jr. Ancash 450",
        registro_agua: "",
        registro_luz: "",
        ubigeo: "150113",
        latitud: "-12.1040",
        longitud: "-77.0950"
      },
      {
        idInmuebles: 14,
        nombre: "Auditorio Universitario",
        imagen: "https://live.staticflickr.com/7408/8762648792_f0812c2328_b.jpg",
        descripcion: "Auditorio amplio para clases y conferencias",
        area: 280,
        capacidad: "220 personas",
        direccion: "Av. Universitaria 2000",
        registro_agua: "",
        registro_luz: "",
        ubigeo: "150114",
        latitud: "-12.1085",
        longitud: "-77.1000"
      }
    ]
  }
  constructor(private http: HttpClient) {}

   getPropertyMini() {
        return Promise.resolve(this.getPropertyData().slice(0, 5));
    }

    getPropertySmall() {
        return Promise.resolve(this.getPropertyData().slice(0, 10));
    }

    getPropertyMedium() {
        return Promise.resolve(this.getPropertyData().slice(0, 50));
    }

    getPropertyLarge() {
        return Promise.resolve(this.getPropertyData().slice(0, 200));
    }
    getPropertyXLarge() {
        return Promise.resolve(this.getPropertyData());
    }
}