const forma = document.getElementById("forma");
const aceptar = document.getElementById("aceptar");
const input = document.getElementById("color");

function cambiarColor(){
	var color = document.getElementById("color").value;
	forma.style.backgroundColor = color;
	return animacion();
}

function animacion(){
	const animacion = forma.animate([
		{transform: "scale(1.0)"},
		{transform: "scale(1.05)"},
		{transform: "scale(1.0)"}
		],{
		easing: "ease-in-out",
		iterations: 1,
		duration: 400
		}
	);
	return animacion.finished;
}

input.addEventListener("keypress", 
	function (e){
		if(e.key == 'Enter'){
			return cambiarColor()
		}
	}
);

aceptar.addEventListener("click", cambiarColor);

forma.addEventListener("click", animacion);

forma.addEventListener("mouseover", animacion);