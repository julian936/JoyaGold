import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Producto } from 'src/app/SERVICE/producto.service';
declare var $: any;

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit{

  @ViewChild('closebutton') closebutton: any;
  nombre;
  material;
  tipo;
  precio;
  consumidor;
  referencia;
  color;
   
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data:Producto) {
    this.nombre = data.nombre
    this.material = data.material
    this.tipo = data.tipo
    this.precio = data.precio
    this.consumidor = data.consumidor
    this.referencia = data.referencia
    this.color = data.color
  }

  ngOnInit(): void {
  }

  cerarUno(){
    this.closebutton.nativeElement.click();
  }

}
