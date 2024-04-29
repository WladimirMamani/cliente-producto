import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from '../model/producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  //COMUNICACIÓN CON EL BACK ENT
  private apiURL = 'http://localhost:8000/ruta-producto'

  //iNCORPORAMOS EL HTTP CLIENTE
  constructor(private http: HttpClient) { }

  //Llamado a los MÉTODOS

  //Consulta 1: Listar productos
  getTodosProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);

  }
  getOrdenarPorCodigoDesc(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/consulta4');

  }

  getListarPorFechaRegistroDesc(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/consulta6');

  }

  getListarPorNombre(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/consulta10');

  }

  getBuscarPrecioAlto(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/consulta13');

  }


  //Buscar por categoria
  // getPorCategoria(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiURL + '/consulta5');

  // }

  // ------------------ METODO CRUD ---------------------------

  agregarProducto(producto: ProductoModel): Observable<ProductoModel> {
    // return this.http.post<TareaModel>(`${this.apiURL}/agregar`,producto);
    return this.http.post<ProductoModel>(this.apiURL+'/agregar',producto);
  }

  editarProducto(id: string, producto: ProductoModel): Observable<ProductoModel> {
    return this.http.put<ProductoModel>(`${this.apiURL}/editar/${id}`,producto);
  }

  eliminarProducto(id: string): Observable<ProductoModel> {
    console.log(id);
    console.log(`${this.apiURL}/eliminar/${id}`);

    return this.http.delete<ProductoModel>(`${this.apiURL}/eliminar/${id}`);
  }


}
