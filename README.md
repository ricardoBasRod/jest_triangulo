# jest_triangulo

Este proyecto clasifica triángulos basándose en la longitud de sus lados.

## Instalación

```bash
npm install
```

## Uso

La función `clasificarTriangulo(a, b, c)` toma tres números positivos que representan las longitudes de los lados de un triángulo y devuelve:

- `'Equilátero'`: Si todos los lados son iguales.
- `'Isósceles'`: Si al menos dos lados son iguales.
- `'Escaleno'`: Si todos los lados son diferentes.

También valida que las longitudes formen un triángulo válido.

## Ejemplo

```javascript
const clasificarTriangulo = require('./triangulos');

console.log(clasificarTriangulo(3, 3, 3)); // 'Equilátero'
console.log(clasificarTriangulo(3, 4, 5)); // 'Escaleno'
```

## Tests

Ejecuta los tests con:

```bash
npm test
```