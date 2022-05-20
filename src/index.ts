let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");
let btnEnviar2 = <HTMLButtonElement>document.getElementById("btnEnviar2");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let arregloDecreciente: number[] = new Array();
let indice: number = 0;
let tamaño: number = 0;

//La siguiente Funcion carga el arreglo de numeros enteros.
function cargarArreglo(arreglo: number[], tamaño: number) {
  arreglo.length = tamaño;
  for (indice = 0; indice < arreglo.length; indice++) {
    arreglo[indice] = tamaño;
    tamaño -= 1;
  }
}

rotulo1.innerHTML = "Ingrese el tamaño del arreglo";

btnEnviar1.addEventListener("click", () => {
  tamaño = Number(dato1.value);
  cargarArreglo(arregloDecreciente, tamaño);
});

btnEnviar2.addEventListener("click", () => {
  rotulo2.innerHTML = "" + arregloDecreciente;
});