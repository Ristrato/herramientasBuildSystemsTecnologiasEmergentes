import { Component, HostListener } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  seleccionado: any;
  productoSeleccionado: number = 1;
  carrito: any[] = [];
  numProductos: number = 0;
  seHizoCompra: boolean = false;

  constructor(){
    this.busqueda = '';
    this.seleccionado = null;
  }



  catalogoItems = [
      { id: 1, nombre: 'Aguacate', imagen: 'assets/aguacate.jpg', precio: 10.00, cantidad: 30 },
      { id: 2, nombre: 'Ajo', imagen: 'assets/ajo.jpg', precio: 20.00, cantidad: 100 },
      { id: 3, nombre: 'Almendras', imagen: 'assets/almendras.jpg', precio: 30.00, cantidad: 50 },
      { id: 4, nombre: 'Arándanos', imagen: 'assets/arandanos.jpg', precio: 10.00, cantidad: 30 },
      { id: 5, nombre: 'Brocoli', imagen: 'assets/brocoli.png', precio: 20.00, cantidad: 60 },
      { id: 6, nombre: 'Calabaza', imagen: 'assets/calabaza.jpg', precio: 30.00, cantidad: 10 },
      { id: 7, nombre: 'Canela', imagen: 'assets/canela.jpg', precio: 10.00, cantidad: 1000 },
      { id: 8, nombre: 'Cebolla', imagen: 'assets/cebolla.jpg', precio: 20.00, cantidad: 100 },
      { id: 9, nombre: 'Fresa', imagen: 'assets/fresa.jpg', precio: 30.00, cantidad: 30},
      { id: 10, nombre: 'Kiwi', imagen: 'assets/kiwi.jpg', precio: 10.00, cantidad: 30 },
      { id: 11, nombre: 'Limón', imagen: 'assets/limon.jpg', precio: 20.00, cantidad: 40 },
      { id: 12, nombre: 'Lychee', imagen: 'assets/lychee.jpg', precio: 30.00, cantidad: 20 },
      { id: 13, nombre: 'Maíz', imagen: 'assets/maiz.jpg', precio: 10.00, cantidad: 50 },
      { id: 14, nombre: 'Manzana', imagen: 'assets/manzana.jpg', precio: 20.00, cantidad: 100 },
      { id: 15, nombre: 'Naranja', imagen: 'assets/naranja.jpg', precio: 30.00, cantidad: 100 },
      { id: 16, nombre: 'Papa', imagen: 'assets/papa.jpg', precio: 10.00, cantidad: 200 },
      { id: 17, nombre: 'Pasta', imagen: 'assets/pasta.jpg', precio: 20.00, cantidad: 100 },
      { id: 18, nombre: 'Pimienta', imagen: 'assets/pimienta.jpg', precio: 30.00, cantidad: 100 },
      { id: 19, nombre: 'Repollo', imagen: 'assets/repollo.jpg', precio: 10.00, cantidad: 30 },
      { id: 20, nombre: 'Tomate', imagen: 'assets/tomate.jpg', precio: 20.00, cantidad: 100 },
      { id: 21, nombre: 'Zanahoria', imagen: 'assets/zanahoria.jpg', precio: 30.00, cantidad: 100 }
    ];

    busqueda: string;
    catalogoItemsOriginales: any[] = [];
     itemSeleccionado: any;

 verDetalles(item: any): void {
   this.itemSeleccionado = item;
 }

cantidadSeleccionada: number = 0;


    ngOnInit(): void {
     this.catalogoItemsOriginales = this.catalogoItems;

   }

    filtrarProductos() {
  if (!this.busqueda) {
    this.catalogoItems = [
        { id: 1, nombre: 'Aguacate', imagen: 'assets/aguacate.jpg', precio: 10.00, cantidad: 0 },
        { id: 2, nombre: 'Ajo', imagen: 'assets/ajo.jpg', precio: 20.00, cantidad: 0 },
        { id: 3, nombre: 'Almendras', imagen: 'assets/almendras.jpg', precio: 30.00, cantidad: 0 },
        { id: 4, nombre: 'Arándanos', imagen: 'assets/arandanos.jpg', precio: 10.00, cantidad: 0 },
        { id: 5, nombre: 'Brocoli', imagen: 'assets/brocoli.png', precio: 20.00, cantidad: 0 },
        { id: 6, nombre: 'Calabaza', imagen: 'assets/calabaza.jpg', precio: 30.00, cantidad: 0 },
        { id: 7, nombre: 'Canela', imagen: 'assets/canela.jpg', precio: 10.00, cantidad: 0 },
        { id: 8, nombre: 'Cebolla', imagen: 'assets/cebolla.jpg', precio: 20.00, cantidad: 0 },
        { id: 9, nombre: 'Fresa', imagen: 'assets/fresa.jpg', precio: 30.00, cantidad: 0 },
        { id: 10, nombre: 'Kiwi', imagen: 'assets/kiwi.jpg', precio: 10.00, cantidad: 0 },
        { id: 11, nombre: 'Limón', imagen: 'assets/limon.jpg', precio: 20.00, cantidad: 0 },
        { id: 12, nombre: 'Lychee', imagen: 'assets/lychee.jpg', precio: 30.00, cantidad: 0 },
        { id: 13, nombre: 'Maíz', imagen: 'assets/maiz.jpg', precio: 10.00, cantidad: 0 },
        { id: 14, nombre: 'Manzana', imagen: 'assets/manzana.jpg', precio: 20.00, cantidad: 0 },
        { id: 15, nombre: 'Naranja', imagen: 'assets/naranja.jpg', precio: 30.00, cantidad: 0 },
        { id: 16, nombre: 'Papa', imagen: 'assets/papa.jpg', precio: 10.00, cantidad: 0 },
        { id: 17, nombre: 'Pasta', imagen: 'assets/pasta.jpg', precio: 20.00, cantidad: 0 },
        { id: 18, nombre: 'Pimienta', imagen: 'assets/pimienta.jpg', precio: 30.00, cantidad: 0 },
        { id: 19, nombre: 'Repollo', imagen: 'assets/repollo.jpg', precio: 10.00, cantidad: 0 },
        { id: 20, nombre: 'Tomate', imagen: 'assets/tomate.jpg', precio: 20.00, cantidad: 0 },
        { id: 21, nombre: 'Zanahoria', imagen: 'assets/zanahoria.jpg', precio: 30.00, cantidad: 0 }
      ];
    return;
  }
}

buscar(): void {
  if (!this.busqueda) {
    this.catalogoItems = this.catalogoItemsOriginales;
  } else {
    this.catalogoItems = this.catalogoItemsOriginales.filter(item => item.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
  }
}

verMas(item: {id: number, nombre: string, imagen: string, precio: number, cantidad: number}){
  this.itemSeleccionado = item;
}

cerrarDetalle() {
  this.itemSeleccionado = null;
}

// lógica carrito de compras

mostrarIcono: boolean = true;

@HostListener('window:scroll', ['$event'])

onWindowScroll(e: Event){
  if(window.pageYOffset > 10){
    this.mostrarIcono = false;
  } else {
    this.mostrarIcono = true;
  }
}

  mostrarDiv = false;

  toggleDiv() {
    this.mostrarDiv = !this.mostrarDiv;

  }

  comprar() {
    const itemComprado = {
      imagen: this.itemSeleccionado.imagen,
      nombre: this.itemSeleccionado.nombre,
      cantidad: this.cantidadSeleccionada,
      precio: this.itemSeleccionado.precio,
      total: this.cantidadSeleccionada * this.itemSeleccionado.precio
    };
    this.carrito.push(itemComprado);
    this.numProductos += 1;
     console.log(this.numProductos)
    // Restar la cantidad del producto seleccionado del inventario original
    this.catalogoItems.forEach(item => {
      if (item.nombre === this.itemSeleccionado.nombre) {
        item.cantidad -= this.cantidadSeleccionada;
      }
    });

     this.cantidadSeleccionada = 0;
     this.seHizoCompra = true;
  }



vaciarCarrito() {

  // Vaciar el carrito de compras
  this.carrito = [];
  localStorage.removeItem('carrito');

  // Actualizar el número de productos en el carrito
  this.numProductos = 0;

  //ocultar la Div
  this.mostrarDiv = false;
  
//volver a ocultar numero de carrito
   this.seHizoCompra = false;
}



}
