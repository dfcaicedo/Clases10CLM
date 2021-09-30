function decimalabinario(decimales){
    var resp = "";
    while (decimales > 0)
    {
        var residuo;
        residuo = Number(decimales % 2);
        resp = residuo.toString() + resp;
        decimales = (decimales - residuo) / 2;
    }
    while (resp.length < 8)
        resp = "0" + resp;
    console.log("Decimal a Binario" + resp);
    return resp;
}
function multi (a,b){
    var resultado="";
    while (a.length>0){
        var ultimoa;
        var ultimob;
        ultimoa=Number(a.substring(a.length-1,1));
        ultimob=Number(b.substring(b.length-1,1));
        resultado = (ultimoa * ultimob).toString() + resultado;
        a = a.Substring(0, a.Length - 1);
        b = b.Substring(0, b.Length - 1);
    }
    return resultado;
}
function invertirnumero (numero){
    numero=numero.replace("1","2"); // Convierto alguno bien sea el 0 o el 1 en un valor auxiliar
    numero=numero.replace("0","1");
    return numero.replace("2","0");
}
function binarioadecimal(valor){
    console.log(valor);
    var resp=0;
    var a=0;
    for (a=0;a<valor.length;a++){
        var nume=Number(valor.substring(valor.length-1-a,valor.length-a));
        console.log(a.toString() + ":" + nume);
        resp=resp+nume*Math.pow(2,a);
    }
    console.log("Binario a decimal " + resp);
    return resp.toString();

}
// siendo var1 y var2 un numero que puede ser 0 o 1
function sumaOR(var1, var2){
    var suma=var1+var2;
    return Math.floor(suma/2)+suma % 2;
}
//Math.floor Encuentra el entero menor más cercano al resultado
function accionboton(){
    console.log("Capturó el click del botón");
    var text1=document.getElementById("text1");// resumen del document.getelementbyid, para no escribirlo siempre
    //vamos a pasar a binario lo del text1 al itext1
    document.getElementById("itext1").value=decimalabinario(text1.value);
    var mtext1=document.getElementById("mtext1");
    var nmask=document.getElementById("nmask");
    var a=0;
    var mascara="";
    for (a=0;a<nmask.value;a++)
        mascara=mascara+"1";
    while (mascara.length<32)
        mascara=mascara + "0";
    document.getElementById("mbtext1").value=mascara.substring(0,8);
    document.getElementById("mtext1").value=binarioadecimal(document.getElementById("mbtext1").value)
    

}

var boton1=document.getElementById("btn"); // Seleccionar el Boton
boton1.addEventListener("click",accionboton); // Aqui agrego el que va a hacer cuando le den click
