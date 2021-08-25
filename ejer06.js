//Determinar si un año es bisiesto
var agno;
agno=Number(prompt("Digite el año","2021"));
if (agno % 400 == 0)
{
    alert("Bisiesto");
}
else
{
    if (agno % 4 == 0 && agno % 100 != 0)
    {
        alert("Bisiesto");
    }
    else
    {
        alert("No Bisiesto");
    }
}
