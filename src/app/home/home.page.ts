import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private productos = [{
    "id": 1,
    "nombre": "Celular",
    "precio": 25000,
    "cantidad": 10,
    "imagen": "https://medias.musimundo.com/medias/sys_master/images/images/h3a/h4f/10176642678814/00262250-138533-138533-01-138533-01.jpg"
  },
  { "id": 2,
    "nombre": "Tablet",
    "precio": 15000,
    "cantidad": 3,
    "imagen": "https://i.blogs.es/d6b6d1/c0153.mp4.00_21_46_12.imagen-fija001/840_560.jpg"
  },{
    "id": 3,
    "nombre": "TVled",
    "precio": 20000,
    "cantidad": 0,
    "imagen": "https://medias.musimundo.com/medias/sys_master/images/images/hdb/he2/10166492528670/00242172-138231-138231-01-138231-01.jpg"
  },
  { "id": 4,
    "nombre": "Audio",
    "precio": 3500,
    "cantidad": 5,
    "imagen": "amigo"
  },{
    "id": 5,
    "nombre": "Consola",
    "precio": 2500,
    "cantidad": 14,
    "imagen": "amigo"
  },
  { "id": 6,
    "nombre": "Play station",
    "precio": 30000,
    "cantidad": 0,
    "imagen": "amigo"
  }]
  constructor() {}

}
