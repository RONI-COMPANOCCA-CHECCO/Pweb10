import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private apiUrl = 'http://localhost:8000/api/';

  getProductos() {
    return axios.get(`${this.apiUrl}productos/`);
  }

  // Métodos para otras entidades...
}
