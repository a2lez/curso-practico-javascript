console.log("¡Aqui vamos!");
const ladoCuadrado = 5;

console.group("Cuadrados")
console.log("El lado del cuadrado mide: "+ladoCuadrado+ " cms");

const perimetroCuadrado = 4*ladoCuadrado;
const areaCuadrado= ladoCuadrado*ladoCuadrado;
console.log("El perímetro de un cuadrado es: "+perimetroCuadrado+ " cms");

console.log("El área de un cuadrado es: "+perimetroCuadrado+ " cms2");
console.groupEnd();

const ladoTri1 = 5;
const ladoTri2 = 5;
const ladoTri3 = 6;
const altuTri = 5.5;

console.group("Triangulos");
console.log("Los lados del triángulo son: "+ladoTri1+"cm, "+ladoTri2+"cm y "+ladoTri3+"cm respectivamente");
console.log("La altura del triángulo es de "+altuTri+"cms");
const perimeTri= ladoTri1+ladoTri2+ladoTri3;
const areaTri= (ladoTri1*altuTri)/2;
console.log("El perímetro del triángulo es: "+perimeTri+ " cms");
console.log("El área del triángulo es: "+areaTri+ " cms2");
console.groupEnd();

const radioCirculo = 4;
const PI = 3.1416;
const periCirculo = 2*PI*radioCirculo;
const areaCirculo = PI* radioCirculo*radioCirculo; 

console.group("Circulos");
console.log("El radio del círculo es: "+radioCirculo+"cm,");
console.log("El perímetro del círculo es: "+periCirculo+ " cms");
console.log("El área del círculo es: "+areaCirculo+ " cms2");
console.groupEnd();