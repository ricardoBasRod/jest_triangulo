function clasificarTriangulo(a, b, c) {
  if (arguments.length !== 3) return 'Error';
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') return 'Error';
  if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) return 'Error';
  if (a <= 0 || b <= 0 || c <= 0) return 'Longitudes no válidas';
  if (a + b <= c || a + c <= b || b + c <= a) return 'No es un triángulo';
  if (a === b && b === c) {
    return 'Equilátero';
  }
  if (a === b || b === c || a === c) {
    return 'Isósceles';
  }
  return 'Escaleno';
}

module.exports = clasificarTriangulo;

