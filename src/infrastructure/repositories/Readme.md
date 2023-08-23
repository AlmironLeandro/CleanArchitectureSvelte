<h1 style="text-align:center; color:green"> Arquitectura Hexagonal </h1>

- La finalidad de esta capa es hacer la petición y transformar el dato devuelto   por el servidor a un modelo de dominio definido en nuestra aplicación:



 ## Example: 

```typescript // /src/infrastructure/repositories/product.repository.ts

import { http } from '../../infrastructure/http/http'
import { ProductDTO } from '../../infrastructure/dto/ProductDTO'
import { Product } from '../models/Product'

export const productRepository = {
  getProducts: async () => {
    const products = await http.get<ProductDTO[]>('http://localhost:3001/products')
// we can extract this transform to a function inside this file to be reused by different methods
    return products.map((productDto): Product => ({
      id: productDto.product_id,
      title: productDto.title,
      price: Number(productDto.price)
    }))
  }
}
```