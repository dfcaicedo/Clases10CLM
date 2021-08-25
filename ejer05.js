var a; // Declaración de variable
var b;// Declaración de variable
var c;// Declaración de variable

//Recibir los datos desde el prompt
a=prompt("Digite el valor A");
b=prompt("Digite el valor B");
c=prompt("Digite el valor C");
// Tener en cuenta que prompt recibe un String 

//Vamos a convertir esos string a número
//Para eso usamos Number como CAST a número
a=Number(a);
b=Number(b);
c=Number(c);

/*Como el ejercicio es decir cual es el mayor cual es el menor y cual el medio tengo que hacer varios
condicionales
*/

//Primera Forma IF Anidados
/*
+    a>b>c 1  
+    a>c>b 2 
+    b>a>c 3 -
+    b>c>a 4 -
+    c>a>b 5 
    c>b>a 6 -
*/
// Condición
if (a>b)
{
    if (b>c)
    {
        alert("A Es el mayor, B es el medio y C es el menor"); // opción 1
    }
    else
    {
        if (a>c)
        {
            alert("A Es el mayor, C es el medio y B es el menor"); // opción 2
        }
        else
        {
            alert("C Es el mayor, A es el medio y B es el menor"); // opción 5
        }
    }
}
else
{
    if (a>c){
        alert("B Es el mayor, A es el medio y C es el menor"); // opción 3
    }
    else
    {
        if (b>c){
            alert("B Es el mayor, C es el medio y A es el menor"); // opción 4
        }
        else
        {
            alert("C Es el mayor, B es el medio y A es el menor"); // opción 6
        }
    }
}
/* Tablas de Verdad
Tabla de verdad  Y-And    javascript "&&""
    Solo es verdadero cuando ambas son verdaderas (Multiplicación Lógica)
    V=1 F=0
    P   Q   P And Q
    V   V      V
    V   F      F
    F   V      F
    F   F      F

Tabla de verdad  O-OR    "||"
    Solo es falso cuando ambas son Falsas (Suma lógica)
    V=1 F=0
    P   Q   P OR Q
    V   V     V
    V   F     V 
    F   V     V
    F   F     F

Tabla de verdad Xor Or Exclusivo    "^"
    Solo es verdadera cuando los resultados son distintos
    P   Q   P XOR Q
    V   V     F
    V   F     V 
    F   V     V
    F   F     F

*/
/*              P         Q
+    a>b>c 1  (A>B) and (b>c)
+    a>c>b 2  (A>C) and (c>b)
+    b>a>c 3  (B>A) and (a>c)
+    b>c>a 4  (b>c) and (c>a)
+    c>a>b 5  (c>a) and (a>b)
    c>b>a 6 -
*/
//Segunda forma tabla de verdad
if (a>b && b>c)
   alert("A Es el mayor, B es el medio y C es el menor");
if (a>c && c>b)
    alert("A Es el mayor, C es el medio y B es el menor");
if (b>a && a>c)
    alert("B Es el mayor, A es el medio y C es el menor");
if (b>c && c>a)
    alert("B Es el mayor, C es el medio y A es el menor");
if (c>a && a>b)
    alert("C Es el mayor, A es el medio y B es el menor");
if (c>b && b>a)
    alert("C Es el mayor, B es el medio y A es el menor");
