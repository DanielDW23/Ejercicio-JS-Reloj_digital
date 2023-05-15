function horaPantalla(){const d = new Date();

let hora = d.getHours()
let minutos =d.getMinutes()
let segundos = d.getSeconds()
// let fecha = d.toDateString()

// console.log(fecha);

fecha2 = new Date().toLocaleDateString('es-ES', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) 

// minutos =revisarTiempo(minutos);
// segundos =revisarTiempo(segundos);

minutos0 = String(minutos).padStart(2, "0");
segundos0 = String(segundos).padStart(2, "0");


document.querySelector("#hora").innerHTML = `${hora}:${minutos0}:${segundos0}`;
document.querySelector("#fecha").innerHTML = fecha2;
}

setInterval(horaPantalla, 1000);

// function revisarTiempo(i){
//     if (i<10){
//     i="0" + i;
//     }
//     return i;
// } 