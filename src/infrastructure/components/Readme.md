<h1 style="text-align:center; color:green"> Arquitectura Hexagonal </h1>

#### En esta seccion vamos a dividir los componentes como hacemos de constumbre

## Example:
- Importaremos la interfaz desde dominio y el servicio
~~~~// src/infrastructure/components/ProductList.tsx
import * as React from 'react'
import { Product } from '../../domain/models/Product'
import { productService } from '../../domain/services/Product.service'

export const ProductList: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([])

  React.useEffect(() => {
    productService.getProducts().then(setProducts)
  }, [])

  return (
    <ul>
      {products.map((product) => <li key={product.id}>{product.title}</li>)}
    </ul>
  )
}
~~~~
