const clasificarTriangulo = require('./triangulos');

describe('clasificarTriangulo', () => {
  test('Triángulo equilátero', () => {
    // Arrange
    const a = 3;
    const b = 3;
    const c = 3;
    const expected = 'Equilátero';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

  test('Triángulo escaleno', () => {
    // Arrange
    const a = 3;
    const b = 4;
    const c = 5;
    const expected = 'Escaleno';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

  test('Triángulo isósceles con primeros dos lados iguales', () => {
    // Arrange
    const a = 3;
    const b = 3;
    const c = 4;
    const expected = 'Isósceles';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

  test('Triángulo isósceles con últimos dos lados iguales', () => {
    // Arrange
    const a = 4;
    const b = 3;
    const c = 3;
    const expected = 'Isósceles';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

  test('Triángulo isósceles con primer y último lado iguales', () => {
    // Arrange
    const a = 3;
    const b = 4;
    const c = 3;
    const expected = 'Isósceles';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });



  test('Triángulo imposible a es mayor que b + c', () => {
    // Arrange
    const a = 7;
    const b = 3;
    const c = 3;
    const expected = 'No es un triángulo';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

  test('Triángulo imposible b es mayor que a + c', () => {
    // Arrange
    const a = 3;
    const b = 7;
    const c = 3;
    const expected = 'No es un triángulo';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

    test('Triángulo imposible c es mayor que a + b', () => {
    // Arrange
    const a = 3;
    const b = 3;
    const c = 7;
    const expected = 'No es un triángulo';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

      test('Lado a es 0', () => {
    // Arrange
    const a = 0;
    const b = 3;
    const c = 3;
    const expected = 'Longitudes no válidas';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

    test('Lado b es 0', () => {
    // Arrange
    const a = 3;
    const b = 0;
    const c = 3;
    const expected = 'Longitudes no válidas';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });
    test('Lado c es 0', () => {
    // Arrange
    const a = 3;
    const b = 3;
    const c = 0;
    const expected = 'Longitudes no válidas';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

    test('Todos los lados son 0', () => {
    // Arrange
    const a = 0;
    const b = 0;
    const c = 0;
    const expected = 'Longitudes no válidas';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

      test('Lado a es negotivo', () => {
    // Arrange
    const a = -1;
    const b = 3;
    const c = 3;
    const expected = 'Longitudes no válidas';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

    test('Lado b es negativo', () => {
    // Arrange
    const a = 3;
    const b = -1;
    const c = 3;
    const expected = 'Longitudes no válidas';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });
    test('Lado c es negativo', () => {
    // Arrange
    const a = 3;
    const b = 3;
    const c = -1;
    const expected = 'Longitudes no válidas';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

    test('Todos los lados son negativos', () => {
    // Arrange
    const a = -1;
    const b = -1;
    const c = -1;
    const expected = 'Longitudes no válidas';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

  
      test('Lado a es flotante', () => {
    // Arrange
    const a = 1.1;
    const b = 3;
    const c = 3;
    const expected = 'Error';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

    test('Lado b es flotante', () => {
    // Arrange
    const a = 3;
    const b = 1.1;
    const c = 3;
    const expected = 'Error';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });
    test('Lado c es flotante', () => {
    // Arrange
    const a = 3;
    const b = 3;
    const c = 1.1;
    const expected = 'Error';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

    test('Todos los lados son flotantes', () => {
    // Arrange
    const a = 1.1;
    const b = 1.1;
    const c = 1.1;
    const expected = 'Error';

    // Act
    const result = clasificarTriangulo(a, b, c);

    // Assert
    expect(result).toBe(expected);
  });

      test('2 parámetros', () => {
    // Arrange
    const a = 3;
    const b = 3;

    const expected = 'Error';

    // Act
    const result = clasificarTriangulo(a, b);

    // Assert
    expect(result).toBe(expected);
  });
      test('4 parámetros', () => {
    // Arrange
    const a = 3;
    const b = 3;
    const c = 3;
    const d = 3;
    const expected = 'Error';

    // Act
    const result = clasificarTriangulo(a, b, c, d);

    // Assert
    expect(result).toBe(expected);
  });
  });