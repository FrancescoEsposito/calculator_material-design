$(".button-collapse").sideNav();

var operators = ['+', '-', '*', '/', '.', '%'];
var parentesi = ['(',')'];

// var che permette di non aggiungere operatori su operatori disabilitando la calcolatrice
var operatorAfterResult = true;

// variabile che capisce se l'operazione è finita
var setup = false;

var dot = false;

// funzione che riporta numeri e operatori nell'espressione e nel display
function n(number) {
  //document.getElementById('display').dir = "rtl"; //o .style.direction = "rtl";
  // se il numero è 0 o si è gia ottenuto il risultato dell'operazione inizia da capo
  if(document.getElementById("display").value =="0" || document.getElementById("display").value==null || setup == true){
    document.getElementById("display").value = number;
    setup = false;
  }
  else {
    document.getElementById("display").value += number;
  };
  operatorAfterResult = false;
}

function btnResult() {
  document.getElementById('display').value = eval(document.getElementById('display').value);
  setup = true;
  dot = false;
}

//funzione che cancella l'ultimo valore digitato
function btnC() { 
  document.getElementById("display").value=document.getElementById("display").value.substring(0, document.getElementById("display").value.length-1); 
}

function btnPlus() {
  //document.getElementById('display').dir = "ltr";
  var search = operators.indexOf(document.getElementById('display').value.slice(-1),0);
  if (search == -1){ 
      document.getElementById('display').value += '+';
  };
  setup = false;
}

function btnMinus() {
  var search = operators.indexOf(document.getElementById('display').value.slice(-1),0);
  if (search == -1){ 
      document.getElementById('display').value += '-'; 
  };
  setup = false;
}

function btnDiv() {
  var search = operators.indexOf(document.getElementById('display').value.slice(-1),0);
  if (search == -1){ 
      document.getElementById('display').value += '/'; 
  };
  setup = false;
}

function btnMol() {
  var search = operators.indexOf(document.getElementById('display').value.slice(-1),0);
  if (search == -1){ 
      document.getElementById('display').value += '*'; 
  };
  setup = false;
}

function btnClear() {
  document.getElementById('display').value = '';
}

function btnDot() {
  var search = operators.indexOf(document.getElementById('display').value.slice(-1),0);
  if (search == -1){ 
      document.getElementById('display').value += '.'; 
  };
  setup = false;
}

function btnPerc() {
  var search = operators.indexOf(document.getElementById('display').value.slice(-1),0);
  if (search == -1){ 
      document.getElementById('display').value += '%';
  };
  setup = false;
}

function btnE() {
  document.getElementById('display').value = Math.E;
  setup = true;
  dot = false;
}

function btnParOpened() {
  var search = parentesi.indexOf(document.getElementById('display').value.slice(-1),0);
  if (search == -1){ 
      document.getElementById('display').value += '(';
  };
  setup = false;
}

function btnParClosed() {
  var search = parentesi.indexOf(document.getElementById('display').value.slice(-1),0);
  if (search == -1){ 
      document.getElementById('display').value += ')';
  };
  setup = false;
}
      
function btnPoten() {
  document.getElementById('display').value = Math.pow(document.getElementById('display').value,2);
  setup = true;
  dot = false;
}

function btnSqrt() {
  document.getElementById('display').value = Math.sqrt(document.getElementById('display').value);
  setup = true;
  dot = false;
}

function btnSin() {
  document.getElementById('display').value = Math.sin(document.getElementById('display').value);
  setup = true;
  dot = false;
}

function btnCos() {
  document.getElementById('display').value = Math.cos(document.getElementById('display').value);
  setup = true;
  dot = false;
}

function btnTan() {
  document.getElementById('display').value = Math.tan(document.getElementById('display').value);
  setup = true;
  dot = false;
}

function btnLog() {
  document.getElementById('display').value = Math.log(document.getElementById('display').value);
  setup = true;
  dot = false;
}

function btnPiGreco() {
  document.getElementById('display').value = Math.PI;
}

$('.pallino1').click(function() {
   $('.deep-orange').addClass('green');
   $('.green').removeClass('deep-orange');
   $('.light-blue').addClass('red');  
   $('.red').removeClass('light-blue');
   $('#slide-out').css("background-color","#E53935");
});

$('.pallino1').click(function() {
   $('.yellow').addClass('green');
   $('.green').removeClass('yellow');
   $('.purple').addClass('red');  
   $('.red').removeClass('purple');
});

$('.pallino2').click(function() {
   $('.red').addClass('purple');
   $('.purple').removeClass('red');
   $('.green').addClass('yellow');  
   $('.yellow').removeClass('green');
   $('#slide-out').css("background-color","#8e24aa");
});

$('.pallino2').click(function() {
   $('.light-blue').addClass('purple');
   $('.purple').removeClass('light-blue');
   $('.deep-orange').addClass('yellow');  
   $('.yellow').removeClass('deep-orange');
});

$('.pallino3').click(function() {
   $('.red').addClass('light-blue');
   $('.light-blue').removeClass('red');
   $('.green').addClass('deep-orange');  
   $('.deep-orange').removeClass('green');
   $('#slide-out').css("background-color","#039be5");
});

$('.pallino3').click(function() {
   $('.yellow').addClass('deep-orange');
   $('.deep-orange').removeClass('yellow');
   $('.purple').addClass('light-blue');  
   $('.light-blue').removeClass('purple');
});