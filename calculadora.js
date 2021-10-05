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
 //   console.log("Decimal a Binario" + resp);
    return resp;
}
function multi (a,b){
    var resultado="";
    while (a.length>0){
        var ultimoa;
        var ultimob;
        ultimoa=Number(a.substring(a.length-1,a.length));
        ultimob=Number(b.substring(b.length-1,b.length));
        console.log(a.length.toString() + ": ultimoa:" + ultimoa + "  ultimob:" + ultimob + " resultado:" + (ultimoa * ultimob).toString());
        resultado = (ultimoa * ultimob).toString() + resultado;
        
        a=a.substring(0,(a.length-1));
        b=b.substring(0,(b.length-1)); 
    }
    return resultado;
}
function invertirnumero (numero){
    numero=numero.replace("1","2"); // Convierto alguno bien sea el 0 o el 1 en un valor auxiliar
    numero=numero.replace("0","1");
    return numero.replace("2","0");
}
function binarioadecimal(valor){
   // console.log(valor);
    var resp=0;
    var a=0;
    for (a=0;a<valor.length;a++){
        var nume=Number(valor.substring(valor.length-1-a,valor.length-a));
       // console.log(a.toString() + ":" + nume);
        resp=resp+nume*Math.pow(2,a);
    }
   // console.log("Binario a decimal " + resp);
    return resp.toString();

}
// siendo var1 y var2 un numero que puede ser 0 o 1
function sumaOR(var1, var2){
    var suma=var1+var2;
    return Math.floor(suma/2)+suma % 2;
}
//Math.floor Encuentra el entero menor más cercano al resultado
function accionboton(){
   // console.log("Capturó el click del botón");
    var text1=document.getElementById("text1");// resumen del document.getelementbyid, para no escribirlo siempre
    document.getElementById("itext1").value=decimalabinario(text1.value);
    var text2=document.getElementById("text2");// resumen del document.getelementbyid, para no escribirlo siempre
    document.getElementById("itext2").value=decimalabinario(text2.value);
    var text3=document.getElementById("text3");// resumen del document.getelementbyid, para no escribirlo siempre
    document.getElementById("itext3").value=decimalabinario(text3.value);
    var text4=document.getElementById("text4");// resumen del document.getelementbyid, para no escribirlo siempre
    document.getElementById("itext4").value=decimalabinario(text4.value);
    var mascara="";
    for (a=0;a<nmask.value;a++)
        mascara=mascara+"1";
    while (mascara.length<32)
        mascara=mascara + "0";
    console.log(mascara);
    var mbtext1=document.getElementById("mbtext1");
    var mbtext2=document.getElementById("mbtext2");
    var mbtext3=document.getElementById("mbtext3");
    var mbtext4=document.getElementById("mbtext4");
   mbtext1.value=mascara.substring(0,8);
   mbtext2.value=mascara.substring(8,16);
   mbtext3.value=mascara.substring(16,24);
   mbtext4.value=mascara.substring(24,32);
   var mtext1=document.getElementById("mtext1");
   var mtext2=document.getElementById("mtext2");
   var mtext3=document.getElementById("mtext3");
   var mtext4=document.getElementById("mtext4");
   mtext1.value=binarioadecimal(mbtext1.value);
   mtext2.value=binarioadecimal(mbtext2.value);
   mtext3.value=binarioadecimal(mbtext3.value);
   mtext4.value=binarioadecimal(mbtext4.value);
    //Hallar el segmento
    var stext1=document.getElementById("stext1");
    stext1.value=multi(mbtext1.value,document.getElementById("itext1").value)
    var stext2=document.getElementById("stext2");
    stext2.value=multi(mbtext2.value,document.getElementById("itext2").value)
    var stext3=document.getElementById("stext3");
    stext3.value=multi(mbtext3.value,document.getElementById("itext3").value)
    var stext4=document.getElementById("stext4");
    stext4.value=multi(mbtext4.value,document.getElementById("itext4").value)

}

var botons=document.getElementById("btn"); // Seleccionar el Boton
botons.addEventListener("click",accionboton); // Aqui agrego el que va a hacer cuando le den click
