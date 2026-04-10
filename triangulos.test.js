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
});