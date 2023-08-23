# Arquitectura Hexagonal
## Capa de Dominio
### Services
#### En la capa de dominio encontramos la carpeta services: 
- En esta carpeta se encuentran los servicios de dominio, los cuales son utilizados por los casos de uso y las entidades de dominio.
- Los servicios de dominio son los objetos que representan los datos que se manejan en el dominio, estos objetos son utilizados por los casos de uso y las entidades de dominio.
- En este caso tenemos Tarea y Usuario.
- Tarea: Representa una tarea que se puede *crear, editar, eliminar y listar* .
- Usuario: Representa un usuario que se puede crear, editar, eliminar y listar.
- Estos modelos son utilizados por los casos de uso y las entidades de dominio.


## Example:
```typescript
 src/domain/services/Product.service.ts
import { productRepository } from '../../infrastructure/repositories/product.repository'


export const productService = {
  getProducts: () => {
    return productRepository.getProducts()
  }
}
```


