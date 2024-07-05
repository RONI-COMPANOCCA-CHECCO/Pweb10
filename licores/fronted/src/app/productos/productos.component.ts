import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../services/inventario.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any = [];

  constructor(private inventarioService: InventarioService) { }

  ngOnInit(): void {
    this.inventarioService.getProductos().then(response => {
      this.productos = response.data;
    }).catch(error => {
      console.error('Error fetching productos:', error);
    });
  }
}
