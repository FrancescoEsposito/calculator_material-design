$(".button-collapse").sideNav();

function btnPlus() {
	document.getElementById('display').value += '+';
}

function btnMinus() {
	document.getElementById('display').value += '-';
}

function btnDiv() {
	document.getElementById('display').value += '/';
}

function btnMol() {
	document.getElementById('display').value += '*';
}

function btnClear() {
	document.getElementById('display').value = '';
}

function btnDot() {
	document.getElementById('display').value += '.';
}

function btnResult() {
	document.getElementById('display').value = eval(document.getElementById('display').value);
}

function btnPerc() {
	document.getElementById('display').value += '%';
}

function btnE() {
	document.getElementById('display').value = Math.E;
}

function btnParOpened() {
	document.getElementById('display').value += '(';
}

function btnParClosed() {
	document.getElementById('display').value += ')';
}
  		
function btnPoten() {
  	document.getElementById('display').value = Math.pow(document.getElementById('display').value,2);
}

function btnSqrt() {
  	document.getElementById('display').value = Math.sqrt(document.getElementById('display').value);
}

function btnSin() {
  	document.getElementById('display').value = Math.sin(document.getElementById('display').value);
}

function btnCos() {
  	document.getElementById('display').value = Math.cos(document.getElementById('display').value);
}

function btnTan() {
  	document.getElementById('display').value = Math.tan(document.getElementById('display').value);
}

function btnLog() {
  	document.getElementById('display').value = Math.log(document.getElementById('display').value);
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