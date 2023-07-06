var gravedad = 0.5;
var numHijos = 100;

var numParticulas = 100;
var particulasCreadas = 0;

function crearParticula() {
    var particula = document.createElement("div");
    particula.className = "particula";

    var y = window.innerHeight;
    var x = Math.random() * window.innerWidth;

    particula.style.top = y + "px";
    particula.style.left = x + "px";

    var velocidadY = -15 - Math.random() * 15;

    particula.setAttribute("data-velocidad-y", velocidadY);
    particula.setAttribute("data-velocidad-x", "0");
    particula.setAttribute("data-padre", "true");

    particula.style.background = getRandomVividColor();

    document.getElementsByTagName("body")[0].append(particula);

    particulasCreadas++;

    if (particulasCreadas < numParticulas) {
        setTimeout(crearParticula, 100 + Math.random() * 200); // Ajusta el tiempo de espera aquí
    }
}

function start() {
    crearParticula();
}

function update() {
    var particulas = document.getElementsByClassName("particula");
    for (var p = 0; p < particulas.length; p++) {
        var particula = particulas[p];

        var velocidadY = parseFloat(particula.getAttribute("data-velocidad-y"));
        velocidadY += gravedad;

        particula.setAttribute("data-velocidad-y", velocidadY);

        var top = particula.style.top ? particula.style.top : "0";
        top = parseFloat(top.replace("px", ""));
        top += velocidadY;
        particula.style.top = top + "px";

        var velocidadX = parseFloat(particula.getAttribute("data-velocidad-x"));

        var left = particula.style.left ? particula.style.left : "0";
        left = parseFloat(left.replace("px", ""));
        left += velocidadX;
        particula.style.left = left + "px";

        var padre = particula.getAttribute("data-padre");

        if (velocidadY >= 0 && padre === "true") {
            explotar(particula);
        }

        if (top > window.innerHeight) {
            particula.remove();
        }
    }

    setTimeout(update, 20);
}

function explotar(particula) {
    for (var h = 0; h < numHijos; h++) {
        var hijo = document.createElement("div");
        hijo.className = "particula";

        hijo.style.top = particula.style.top;
        hijo.style.left = particula.style.left;
        hijo.style.background = particula.style.background;

        var velocidadY = Math.random() * 20 - 18;
        hijo.setAttribute("data-velocidad-y", velocidadY);
        var velocidadX = Math.random() * 16 - 8;
        hijo.setAttribute("data-velocidad-x", velocidadX);

        hijo.setAttribute("data-padre", false);

        document.getElementsByTagName("body")[0].append(hijo);
    }

    particula.remove();
}

function loadScript() {
    var script = document.createElement("script");
    script.src = "juegos_artficailes.js";
    document.head.appendChild(script);
}

window.onload = function () {
    start();
    update();
};

// Utilerías
function getRandomVividColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        var index = Math.floor(Math.random() * letters.length);
        color += letters[index];
    }
    return color;
}
