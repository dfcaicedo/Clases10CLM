var a=Number(prompt("digite el número"));
var b=a;
document.writeln("<ol>");
while (a<=30)
{
    document.writeln("<li>" + (a++).toString() + "</li>" );
    //document.writeln("<li>" + (a).toString() + "</li>" );
    //a=a+1;
    //alert(a.toString);
}
document.writeln("</ol>");
document.writeln("<ol>");
while (b<=30)
{
    document.writeln("<li>" + (++b).toString() + "</li>" );
    //b=b+1;
    //document.writeln("<li>" + (b).toString() + "</li>" );
    //alert(a.toString);
    
}
document.writeln("</ol>")