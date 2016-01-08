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
	document.getElementById('display').value += ')';.
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

function verifica() {
