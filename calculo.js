console.log("¡Aqui vamos!");
//const ladoCuadrado = 5;

console.group("Cuadrados")
/*console.log("El lado del cuadrado mide: "+ladoCuadrado+ " cm");

const perimetroCuadrado = 4*ladoCuadrado;
const areaCuadrado= ladoCuadrado*ladoCuadrado;
console.log("El perímetro de un cuadrado es: "+perimetroCuadrado+ " cm");
console.log("El área de un cuadrado es: "+perimetroCuadrado+ " cm2");*/
//let ladoC = 0;
//prompt("ingrese cuánto mide el lado de cuadrado en cm: "+ladoC)
function perimetroCuadrado(lado){
    return ("El perímetro de tu cuadrado es "+4*lado+"cm");
}
function areaCuadrado(lado){
    return ("El área de tu cuadrado es "+lado*lado+"cm2");
}

console.groupEnd();

/*const ladoTri1 = 5;
const ladoTri2 = 5;
const ladoTri3 = 6;
const altuTri = 5.5;

console.group("Triangulos");
console.log("Los lados del triángulo son: "+ladoTri1+"cm, "+ladoTri2+"cm y "+ladoTri3+"cm respectivamente");
console.log("La altura del triángulo es de "+altuTri+"cms");
const perimeTri= ladoTri1+ladoTri2+ladoTri3;
const areaTri= (ladoTri1*altuTri)/2;
console.log("El perímetro del triángulo es: "+perimeTri+ " cms");
console.log("El área del triángulo es: "+areaTri+ " cms2");*/
function perimetroTriangulo(l1, l2, l3){
    const pTriangulo = l1+l2+l3;
    return ("El perímetro del cuadrado es "+pTriangulo+"cm");
}
function areaTriangulo(base,altura){
    const aTriangulo = (base*altura)/2;
    return ("El perímetro del cuadrado es "+aTriangulo+"cm");
}
console.groupEnd();

//const radioCirculo = 4;
 

console.group("Circulos");

//const periCirculo = 2*PI*radioCirculo;
//const areaCirculo = PI* radioCirculo*radioCirculo;

function periCirculo(radio){
    const PI = 3.1416;
    const pCirculo = 2*PI*radio;
    return pCirculo;
}
function aCirculo(radio){
    const PI = 3.1416;
    const aCirculo = PI*radio*radio;
    return aCirculo;
}


/*console.log("El radio del círculo es: "+radioCirculo+"cm,");
console.log("El perímetro del círculo es: "+periCirculo+ " cm");
console.log("El área del círculo es: "+areaCirculo+ " cm2");*/

console.groupEnd();


function CalPeriCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert (perimetro);
}

function CalAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const Area = areaCuadrado(value);
    alert (Area);
}

function CalPeriCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = periCirculo(value);
    alert (perimetro);
}

function CalAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const Area = aCirculo(value);
    alert (Area);
}

function CalAreaTri(){
    const input1 = document.getElementById("inputBase");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputAltura");
    const value2 = Number(input2.value);
    const Area = areaTriangulo(value1, value2);
    alert (Area);
}

function CalPeriTriangulo(){
    const input1 = document.getElementById("inputT1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputT2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("inputTb");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert (perimetro);

    function hTriangule(s1,s2,base){
        if( s1===s2 && s1!=base && s2!=base){
            console.log(" El triangulo es isósceles");
            const altura = Math.sqrt(s1**2- (base/2)**2);
            return ("La altura del triángulo es: "+altura);
        }
        else{
            console.log("No es un triangulo isósceles")
        }
    }

}