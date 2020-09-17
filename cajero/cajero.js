var dinero = 0;
var div = 0;
var papeles = 0;
var dinero_cajero = 0; // agregue esta variable para contar el dinero restante 

var billetes = []; 
billetes["cincuenta"] = "billete50.png";
billetes["veinte"] = "billete20.png";
billetes["diez"] = "billete10.png";

class Billete 
{
  constructor(cash, v, c)
  {
    this.imagen = new Image();
    this.billete = cash;
    this.valor = v;
    this.cantidad = c;   
    
    this.imagen.src = billetes[this.billete];
  }
}
function entregarDinero () 
{
  var entregado = []; // Puse este array adentro de la funcion para que se muestre cada operacion individualmente
  var t = document.getElementById("dinero");  
  dinero = parseInt(t.value);
  var limite = dinero; // variable para saber si el dinero ingresado es un valor valido con el dinero que hay  
  for (var bi of caja)
  {     
    if (dinero > 0)
    {
      div = Math.floor(dinero / bi.valor); 
      if (div > bi.cantidad)
      {
        papeles = bi.cantidad; 
      }
      else 
      {
        papeles = div; 
      }     
      entregado.push( new Billete(bi.billete, bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);
      bi.cantidad -= papeles; // Reduce la cantidad de billetes del cajero                  
    }     
  }
  console.log("valor ingresado: " + limite);
  console.log("Dinero restante cajero: " + dinero_cajero);

  if (dinero > 0 || limite > dinero_cajero) // condicional OR para cuando se acabe el dinero del cajero 
  {    
    resultado.innerHTML = "no tengo suficiente dinero";
    resultado.innerHTML += "<hr />";
  }
  else 
  {
    for (var e of entregado)
    {
      for (var j = 0; j < e.cantidad; j++ ) // muestra el numero de billetes retirados  
      {
        resultado.innerHTML += "<img src =" + e.imagen.src +  " />";        
      } 
    resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />"; 
    dinero_cajero = dinero_cajero - (e.valor * e.cantidad); // disminuye el dinero segun lo que se retire                  
    }
    resultado.innerHTML += "<hr />"; // agrega la linea de separacion de cada transaccion
  }   
}

var caja = [];
caja.push( new Billete("cincuenta", 50, 20) );
caja.push( new Billete("veinte", 20, 30) );
caja.push( new Billete("diez", 10, 10) );

for (var i = 0; i < caja.length; i++) // esta funcion cuenta el dinero inicial del cajero
{  
  dinero_cajero += (caja[i].valor * caja[i].cantidad);     
}
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

var resultado = document.getElementById("resultado");




