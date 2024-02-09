
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

  function asignarTextoElemento (elemento, texto){
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;

  }  
  

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
 
  if (numeroUsuario === numeroSecreto){
      asignarTextoElemento('p', `!Acertaste¡ el numero en ${intentos} ${(intentos > 1? "veces" : "vez")}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
      }
      else{ if (numeroUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El numero es menor');
        }
        else{ 
          asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos ++;
        limpiarCaja();
      } 
    return;
 }
 function limpiarCaja (){
  document.querySelector('#valorUsuario').value = "";
 }
 function  generarNumeroSecreto() {
     let numeroGenerado =  Math.floor((Math.random()*numeroMaximo))+1;
     console.log(numeroGenerado);
     console.log(listaNumeroSorteado);
     // si ya sorteamos todos los numeros
     if (listaNumeroSorteado.length == numeroMaximo){
      asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
     }
     else {
     // si el numero generado esta incluido en la lista/
     if (listaNumeroSorteado.includes(numeroGenerado)){
      return generarNumeroSecreto();
     }
     else{
      listaNumeroSorteado.push(numeroGenerado);
      return numeroGenerado;
     }
     }
  }
  function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero de 1 al  ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(intentos);
    console.log(numeroSecreto);
  }

  function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
  }

 condicionesIniciales();






 