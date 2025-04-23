const {
  mostrarArray,
  sumarElementos,
  encontrarMaximo,
  encontrarMinimo,
  filtrarPares,
  duplicarElementos,
  contarElementos,
  invertirArray,
  buscarElemento,
  concatenarArrays,
  eliminarDuplicados,
  ordenarArray,
  calcularPromedio,
  dividirArray,
  rotarArray
} = require('./actividades');

describe('Actividades de Arrays', () => {
  // Actividad 1
  test('mostrarArray debe mostrar el array por consola', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const array = [1, 2, 3];
    mostrarArray(array);
    expect(consoleSpy).toHaveBeenCalledWith(array);
  });

  // Actividad 2
  test('sumarElementos debe sumar todos los elementos del array', () => {
    expect(sumarElementos([1, 2, 3])).toBe(6);
    expect(sumarElementos([-1, 0, 1])).toBe(0);
  });

  // Actividad 3
  test('encontrarMaximo debe encontrar el número más grande', () => {
    expect(encontrarMaximo([1, 2, 3])).toBe(3);
    expect(encontrarMaximo([-1, -2, -3])).toBe(-1);
  });

  // Actividad 4
  test('encontrarMinimo debe encontrar el número más pequeño', () => {
    expect(encontrarMinimo([1, 2, 3])).toBe(1);
    expect(encontrarMinimo([-1, -2, -3])).toBe(-3);
  });

  // Actividad 5
  test('filtrarPares debe filtrar solo los números pares', () => {
    expect(filtrarPares([1, 2, 3, 4])).toEqual([2, 4]);
    expect(filtrarPares([1, 3, 5])).toEqual([]);
  });

  // Actividad 6
  test('duplicarElementos debe duplicar cada elemento', () => {
    expect(duplicarElementos([1, 2, 3])).toEqual([2, 4, 6]);
    expect(duplicarElementos([0, -1, 2])).toEqual([0, -2, 4]);
  });

  // Actividad 7
  test('contarElementos debe contar la cantidad de elementos', () => {
    expect(contarElementos([1, 2, 3])).toBe(3);
    expect(contarElementos([])).toBe(0);
  });

  // Actividad 8
  test('invertirArray debe invertir el orden de los elementos', () => {
    expect(invertirArray([1, 2, 3])).toEqual([3, 2, 1]);
    expect(invertirArray(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
  });

  // Actividad 9
  test('buscarElemento debe encontrar si un elemento existe', () => {
    expect(buscarElemento([1, 2, 3], 2)).toBe(true);
    expect(buscarElemento([1, 2, 3], 4)).toBe(false);
  });

  // Actividad 10
  test('concatenarArrays debe unir dos arrays', () => {
    expect(concatenarArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(concatenarArrays(['a'], ['b'])).toEqual(['a', 'b']);
  });

  // Actividad 11
  test('eliminarDuplicados debe eliminar elementos duplicados', () => {
    expect(eliminarDuplicados([1, 2, 2, 3])).toEqual([1, 2, 3]);
    expect(eliminarDuplicados(['a', 'a', 'b'])).toEqual(['a', 'b']);
  });

  // Actividad 12
  test('ordenarArray debe ordenar los elementos', () => {
    expect(ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
    expect(ordenarArray(['c', 'a', 'b'])).toEqual(['a', 'b', 'c']);
  });

  // Actividad 13
  test('calcularPromedio debe calcular el promedio de los números', () => {
    expect(calcularPromedio([1, 2, 3])).toBe(2);
    expect(calcularPromedio([0, 0, 0])).toBe(0);
  });

  // Actividad 14
  test('dividirArray debe dividir el array en partes iguales', () => {
    expect(dividirArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(dividirArray([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
  });

  // Actividad 15
  test('rotarArray debe rotar los elementos n posiciones', () => {
    expect(rotarArray([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]);
    expect(rotarArray([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2]);
  });
}); 