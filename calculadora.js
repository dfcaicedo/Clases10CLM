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
    return resp;
}




function accionboton(){
    console.log("Capturó el click del botón");
    var text1=document.getElementById("text1");
    var itext1=document.getElementById("itext1");
    itext1.value=decimalabinario(text1.value);
    var text2=document.getElementById("text2");
    var itext2=document.getElementById("itext2");
    itext2.value=decimalabinario(text2.value);
    var text3=document.getElementById("text3");
    var itext3=document.getElementById("itext3");
    itext3.value=decimalabinario(text3.value);
    var text4=document.getElementById("text4");
    var itext4=document.getElementById("itext4");
    itext4.value=decimalabinario(text4.value);

}
var boton1=document.getElementById("btn"); // Seleccionar el Boton
boton1.addEventListener("click",accionboton);
