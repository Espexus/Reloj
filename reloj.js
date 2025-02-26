

setInterval(actualizar, 1000)

let semana = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"]
let meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]

function actualizar() {
    let fecha = new Date();

    let year = fecha.getFullYear();
    let month = fecha.getMonth();
    let day = fecha.getDate();
    let diasemana = fecha.getDay();
    let semanita = semana[diasemana];
    let mes = meses[month]

    
    let hour = fecha.getHours();
    let minute = fecha.getMinutes();
    let second =  fecha.getSeconds();



document.getElementById('horita').textContent = hour + " :";
document.getElementById('minuto').textContent = minute + " :";
document.getElementById('segundo').textContent = second;

document.getElementById('fechita').textContent = semanita + " " + day + " de " + mes + " " + year;
}

