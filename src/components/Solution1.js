function suma(a, b, callback) {
  let c = a + b;
  callback(c);
}
function cb(result) {
  console.log("El resultado es", result);
}
suma(2, 3, cb);

//Suma es una funcion que recibe otra function como tercer param,
//y se ejecutará cuando termine la ejecución de la funcion principal (i.e, cuando termine de sumarse a+b)
//cabe destacar que las callbacs son de naturaleza async, no bloquean el stack
//por eso es bueno usarlas cuando esperamos datos async ( por ejemplo, de una api o db)
