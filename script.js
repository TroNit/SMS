function sunControl() {

  let precioTrabajo = document.getElementById("precio").value;
  let instalador = precioTrabajo * 20 / 100;
  let numeroInstallers = document.getElementById("instaladores").value;
  if (numeroInstallers >= 0) {
    instalador = instalador / numeroInstallers;
  };
  let sky = document.getElementById("skylites").value;
  if (sky > 0){
    sky = sky * 25 / numeroInstallers;
    instalador = instalador + sky;
  };
  let days = document.getElementById("dias").value;
  if (days > 1) {
    days = instalador / days;
    document.getElementById('main').innerHTML = "Your Estimate Payment is $ " + instalador.toPrecision(5) +
      " and " +
      days.toPrecision(5) + " Daily";
  } else if (days <= 1) {
    document.getElementById('main').innerHTML = "Your Estimate Payment is $ " + instalador.toPrecision(5);
  };
}

function safety() {


  let precioTrabajo = document.getElementById("precio").value;
  let instalador = precioTrabajo * 20 / 100;
  let sqf = document.getElementById("pies2").value;
  sqf = sqf * 7 / 5 * 0.25;
  instalador = instalador + sqf;
  let numeroInstallers = document.getElementById("instaladores").value;
  if (numeroInstallers > 0) {
    instalador = instalador / numeroInstallers;
  };
  let sky = document.getElementById("skylites").value;
  if (sky => 0){
    sky = sky * 25 / numeroInstallers;
    instalador = instalador + sky;
  }

  let days = document.getElementById("dias").value;
  if (days > 1) {
    days = instalador / days;
    document.getElementById('main').innerHTML = "Your Estimate Payment is $ " + instalador.toPrecision(5) +
      " and " +
      days.toPrecision(5) + " Daily";
  } else if (days <= 1) {
    document.getElementById('main').innerHTML = "Your Estimate Payment is $ " + instalador.toPrecision(5);
  };

}
