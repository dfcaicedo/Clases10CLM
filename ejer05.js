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
