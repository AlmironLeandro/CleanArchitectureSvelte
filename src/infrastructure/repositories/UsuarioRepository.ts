// infrastructure/adapters/ProductRepositoryAdapter.ts
import type { Usuario } from '../../domain/models/Usuario.js';
import type { ProductRepository } from '../../domain/repositories/ProductRepository';

export class ProductRepositoryAdapter implements ProductRepository {
  async getProducts(): Promise<Product[]> {
    // Aquí puedes implementar la lógica para obtener productos desde una fuente de datos
    // Por simplicidad, aquí solo se devuelve un arreglo de productos estático
    const products: Product[] = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      // ...
    ];

    return products;
  }
}
