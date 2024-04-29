import { Component } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { AlignDirective, BorderDirective, ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, HtmlAttributesDirective, ListGroupDirective, ListGroupItemDirective, PageItemComponent, PageLinkDirective, PaginationComponent, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { ProductoModel } from '../model/producto.model';
import { DocsExampleComponent } from "../../../../components/docs-example/docs-example.component";
import { RouterLink } from '@angular/router';



@Component({
    selector: 'app-producto',
    standalone: true,
    templateUrl: './producto.component.html',
    styleUrl: './producto.component.scss',
    imports: [
        ListGroupDirective,
        ListGroupItemDirective,
        ButtonDirective,
        RowComponent, ColComponent,
        CardComponent, CardHeaderComponent, CardBodyComponent,
        FormsModule, FormDirective, FormLabelDirective, FormControlDirective,
        DocsExampleComponent,


        RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective,


        RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, PaginationComponent, PageItemComponent, PageLinkDirective, RouterLink
    ]
})
export class ProductoComponent {
  listaProductos : any[] = [];
  producto: ProductoModel;

  
  constructor(private productoServicios: ProductoService) {
    this.producto = new ProductoModel;

    
    
  }
  ngOnInit(){
    this.getProductos();
  }

  getProductos(){
    this.productoServicios.getTodosProductos().subscribe(
      (data) => {
        this.listaProductos = data;
        console.log(this.listaProductos); 
      },
      (error) => console.error()
      
    )
  }

  //Consulta 4: Ordenar por codigo desc
  getOrdenarProductoPorCodigoDesc(){
    this.productoServicios.getOrdenarPorCodigoDesc().subscribe(
      (data) => {
        this.listaProductos = data;
        console.log(this.listaProductos); 
      },
      (error) => console.error()
      
    )
  }

  //Consulta 6: Listar por fecha registro desc
  getListarPorFechaRegistroDesc(){
    this.productoServicios.getListarPorFechaRegistroDesc().subscribe(
      (data) => {
        this.listaProductos = data;
        console.log(this.listaProductos); 
      },
      (error) => console.error()
      
    )
  }


  //Consulta 10: Listar por Nombre
  getListarPorNombre(){
    this.productoServicios.getListarPorNombre().subscribe(
      (data) => {
        this.listaProductos = data;
        console.log(this.listaProductos); 
      },
      (error) => console.error()
      
    )
  }

  //Consulta 13: Buscar producto con más precio
  getBuscarPrecioAlto(){
    this.productoServicios.getBuscarPrecioAlto().subscribe(
      (data) => {
        this.listaProductos = data;
        console.log(this.listaProductos); 
      },
      (error) => console.error()
      
    )
  }




  //CRUD

  // Agregar Producto
  agregarProducto(){
    // console.log(this.producto);
    if (this.producto._id == null || this.producto._id == ''){
        //agregar
        this.productoServicios.agregarProducto(this.producto).subscribe(
          (data: ProductoModel) => {
            console.log("Producto agregada:", data);
            this.getProductos();
          },
          (error) => console.log(error)
        );
        //Editar
    } else {
      this.productoServicios.editarProducto(this.producto._id,this.producto).subscribe(
        (data: ProductoModel) => {
          console.log("Producto editado:", data);
          this.getProductos();
        },
        (error) => console.log(error)
      );
    }
  }

  editarProducto(item : ProductoModel){
    console.log(item);
    this.producto = item;
  }
  
  eliminarProducto(item : ProductoModel){
    this.productoServicios.eliminarProducto(item._id).subscribe(
      (data: ProductoModel) => {
        console.log("Producto eliminado:", data);
        this.getProductos();
      },
      (error) => console.log(error)
    );
  }


}
