function bubbleSort(lista) {
    for (let i = 0; i < lista.length; i++) {
      for (let j = 0; j < lista.length - 1; j++) {
        if (lista[j] > lista[j + 1]) {
          let temp = lista[j];
          lista[j] = lista[j + 1];
          lista[j + 1] = temp;
        }
      }
    }
    return lista;
  }
  
  let numeros = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];
  console.log("Antes:", numeros.join(", "));
  console.log("Depois:", bubbleSort(numeros.join(", ")));