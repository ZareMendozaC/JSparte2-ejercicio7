function calcular()
{
    var a= parseInt(document.getElementById("numero1").value);
    var b= parseInt(document.getElementById("numero2").value);
    var negative = parseInt(document.getElementById("nega").value);
    var respuesta = document.getElementById("respuesta");
    var resultado;
    //si alguno de los dos es negativo y el valor de negative es falseo
   if( ( (a<0 && b>0) | (a>0 && b<0) ) && negative == 0 )
    //return true
       respuesta.innerHTML = '<h4>Paso las condiciones, entonces: </h4><br><br>'+'<h3 class="animated wobble result">VERDADERO</h3>';
    else 
        if( (negative==1)&& (a<0 && b<0))//si el valor negative es true y ambos negativos
            //return true
            respuesta.innerHTML = '<h4>Paso las condiciones, entonces: </h4><br><br>'+'<h3 class="animated wobble result">VERDADERO</h3>';
        else 
            //return false
            respuesta.innerHTML = '<h4>No paso las condiciones, entonces: </h4><br><br>'+'<h3 class="animated wobble result">FALSO</h3>';
    
}

function limpiar(){// esta funcion limpia el campo del número
     numero1 = document.getElementById("numero1").value="";
     numero2 = document.getElementById("numero2").value="";
     resultado= 0;
     respuesta.innerHTML = '<br><h4>Prueba otra vez!!</h4><br> <h3 class="animated wobble result">'+resultado+'</h3>';
}

