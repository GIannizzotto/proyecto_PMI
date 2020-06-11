let reservar = document.getElementById("reservar");
let cerrar = document.getElementById("cerrar-modal");

reservar.addEventListener("click", mostrarModal);

function mostrarModal(e){
    e.preventDefault();
    document.getElementById("modal").classList.add("mostrar");
}

cerrar.addEventListener("click", cerrarModal);
function cerrarModal(e){
    e.preventDefault();
    document.getElementById("modal").classList.remove("mostrar");
}

function validarLogin(){
    let dato = "";
    let error = document.getElementById("error");
    let exito = document.getElementById("exito");
    let formulario = document.getElementById("formulario-login");

    dato = formulario[0].value;
    if( dato === "" || dato.length === 0) {
        formulario[0].setAttribute("placeholder","Campo obligatorio: usuario");
        error.classList.add("mostrar");
        return false;
    } else {
        error.classList.remove("mostrar");
    }

    dato = formulario[1].value;
    if( dato === "" || dato.length === 0) {
        formulario[1].setAttribute("placeholder","Campo obligatorio: clave");
        error.classList.add("mostrar");
        return false;
    } else {
        error.classList.remove("mostrar");
    }

    if(dato === "123") {
        exito.classList.add("mostrar");
        setTimeout(function(){
            location.replace("https://giannizzotto.github.io/proyecto_PMI/aulas/reserva.html");
        },1500);
        return true;
    } else {
        error.classList.add("mostrar");
        return false;
    }
}
