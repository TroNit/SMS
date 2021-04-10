document.getElementById("main").onclick = function() {lomio()};

function lomio() {
  var precioTrabajo = document.getElementById("precio");
  var vendedor = precioTrabajo * 10 / 100;
  precioTrabajo = precioTrabajo - vendedor;

  var film = document.getElementById("filma");
  switch (film) {
    case film1:
      var instalador = precioTrabajo * 18 / 100;
      break;
    case film2:
      var instalador = precioTrabajo * 15 / 100;
      break
    default:
      document.getElementById("main").innerHTML = "Defina todo";

  }

  var installers = document.getElementById("instaladores");
  if (installers >= 0) {
      installers = instalador / installers; 
  }


var diasTrabajo = document.getElementById("dias");
if (diasTrabajo > 1) {
    diasTrabajo = instalador / diasTrabajo; 
    document.getElementById("main").innerHTML = "You gonna be getting " + instalador
} else if 
    (diasTrabajo <= 1) {
        document.getElementById('main').innerHTML = instalador;
    }
}
