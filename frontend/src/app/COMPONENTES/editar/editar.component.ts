import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto, ProductoService } from 'src/app/SERVICE/producto.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  listaTipo:string[]=["anillo","cadena","reloj"]; 
  id:string="";
  productoActual: Producto={id:'',nombre:'',material:'',tipo:'',precio:'',consumidor:'',referencia:'',color:''};
  productoActual2: Producto={id:'',nombre:'',material:'',tipo:'',precio:'',consumidor:'',referencia:'',color:''};
  constructor(
    private productoService:ProductoService,
    private antivateRouter: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void { 
    this.id= this.antivateRouter.snapshot.params.id;
    this.productoService.getUnProducto(this.id).subscribe(
      res=>{
        this.productoActual=res;
      },

      err=>console.log(err)
    );

    this.productoService.getUnProducto(this.id).subscribe(
      res2=>{
        this.productoActual2=res2;
      },

      err2=>console.log(err2)
    );
  }
  
  guardad(){
    

    if (this.productoActual.nombre != this.productoActual2.nombre) {
      console.log('no permitido');
      alert('no permitido')
      //this.router.navigate(['/inicio']);
    }
    else{
      if(this.productoActual.material != this.productoActual2.material) {
        console.log('no permitido');
        alert('no permitido')
      }
      else{
        if(this.productoActual.consumidor != this.productoActual2.consumidor) {
          console.log('no permitido');
          alert('no permitido')
        }
        else{
          if(this.productoActual.referencia != this.productoActual2.referencia) {
            console.log('no permitido');
            alert('no permitido')
          }
          else{
            if(this.productoActual.color != this.productoActual2.color) {
              console.log('no permitido');
              alert('no permitido')
            }
            else{
              this.productoService.editProducto(this.id, this.productoActual).subscribe(
                res=>{
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