import { Component, OnInit } from '@angular/core';
import { Producto, ProductoService } from 'src/app/SERVICE/producto.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from 'src/app/COMPONENTES/pop-up/pop-up.component';
import { sortBy } from 'lodash';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
}) 
export class InicioComponent implements OnInit{
  lista:any=[];
  
  productoActual: Producto={id:'',nombre:'',material:'',tipo:'',precio:'',consumidor:'',referencia:'', color:''};

  constructor(private productoService: ProductoService,private dialogRef:MatDialog) { }
  ngOnInit(): void {
    this.listarProductos();
  }


  listarProductos()
  {
    this.productoService.getProductos().subscribe(
      res=>{
        this.lista=sortBy(res, ['nombre', 'name']);
        console.log(res);
      },
      err=>console.log(err)
    );

  }


  eliminar(id:string)
  {
    if(confirm("Estas seguro que deseas eliminar el producto?")) {
      this.productoService.deleteProducto(id).subscribe(
        res=>{this.ngOnInit();},
        err=>console.log(err)
      );
    }
  }

  
  openDialog(id:string){

    this.productoService.getUnProducto(id).subscribe(
      res=>{
        this.productoActual=res;
        this.dialogRef.open(PopUpComponent,{
          data : this.productoActual
        });

      },
      
      err=>console.log(err)
    );
  }


  verdetalle(id:string)
  {
    this.productoService.getUnProducto(id).subscribe(
      res=>{
        this.productoActual=res;
        alert("Producto"+" \n nombre: "+this.productoActual.nombre
        +" \n Material: "+this.productoActual.material 
        +" \n Tipo: "+this.productoActual.tipo 
        +" \n Precio: COP "+this.productoActual.precio 
        +" \n Consumidor: "+this.productoActual.consumidor
        +" \n Referencia: "+this.productoActual.referencia 
        +" \n Color: "+this.productoActual.color )
      },
      


      err=>console.log(err)
    );
    
    
  }

  
  
}
