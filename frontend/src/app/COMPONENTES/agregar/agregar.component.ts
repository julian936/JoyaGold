import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto, ProductoService } from 'src/app/SERVICE/producto.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {

  listaMaterial:string[]=["Oro","Plata"];
  listaTipo:string[]=["anillo","cadena","reloj"]; 

  productoNuevo: Producto={id:'',nombre:'',material:'',tipo:'',precio:'',consumidor:'',referencia:'',color:''};

  constructor(private productoService: ProductoService, private router:Router) { }

  ngOnInit(): void {

  }


  agregarProducto(){

    if (this.productoNuevo.nombre == '') {
      console.log('Campo nombre vacio');
      alert('Ingresa el nombre ')
    }
    else{
      if (this.productoNuevo.material == '') {
        console.log('Campo material vacio');
        alert('Ingresa el material ')
      }
      else{
        if (this.productoNuevo.tipo == '') {
          console.log('Campo tipo vacio');
          alert('Ingresa el tipo ')
        }
        else{
          if (this.productoNuevo.precio == '') {
            console.log('Campo precio vacio');
            alert('Ingresa el precio ')
          }
          else{
            if (this.productoNuevo.consumidor == '') {
              console.log('Campo consumidor vacio');
              alert('Ingresa el consumidor ')
            }
            else{
              if (this.productoNuevo.referencia == '') {
                console.log('Campo referencia vacio');
                alert('Ingresa el referencia ')
              }
            
              else{
                if (this.productoNuevo.color == '') {
                  console.log('Campo color vacio');
                  alert('Ingresa el color ')
                }
                else{
                  this.productoService.saveProducto(this.productoNuevo).subscribe(
                    res=>{
                      console.log(res);
                      this.router.navigate(['/inicio']);
                    },
                    err=>console.log(err)
                  );
                }
              }
            }
          }
        }
      }
    }
  }

}