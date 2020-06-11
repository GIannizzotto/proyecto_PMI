function mostrarOpcion(clicked){
    let campoCalendario = document.getElementById("campo-fecha");
    let campoDia = document.getElementById("campo-dia");
    if(clicked == "cuatrimestre"){
        campoDia.classList.add("mostrar-dia");
        campoCalendario.classList.remove("mostrar-calendario");
    } else {
        campoDia.classList.remove("mostrar-dia");
        campoCalendario.classList.add("mostrar-calendario");

    }
}

function validarReserva(){
    let materia = "";
    let anio = "";
    let carrera = "";
    let estudiantes = "";
    let dia = "";
    let horario = "";
    let cuatrimestre = "";
    let radio = [];
    let fecha = "";
    let tiempo = "";

    materia = document.getElementById("materia").value;
    if( materia === "" || materia.length === 0) {
        document.getElementById("materia").setAttribute("placeholder","Campo obligatorio: materia");
        error.classList.add("mostrar");
        return false;
    } else {
        error.classList.remove("mostrar");
    }

    anio = document.getElementById("anio").value;
    if( anio === "" || anio.length === 0) {
        document.getElementById("campo-anio").firstElementChild.classList.add("mostrar");
        error.classList.add("mostrar");
        return false;
    } else {
        document.getElementById("campo-anio").firstElementChild.classList.remove("mostrar");
        error.classList.remove("mostrar");
    }

    carrera = document.getElementById("carrera").value;
    if( carrera === "" || carrera.length === 0) {
        document.getElementById("carrera").setAttribute("placeholder","Campo obligatorio: carrera");
        error.classList.add("mostrar");
        return false;
    } else {
        error.classList.remove("mostrar");
    }

    estudiantes = document.getElementById("estudiantes").value;    
    if( estudiantes === "" || estudiantes.length === 0) {
        document.getElementById("campo-estudiantes").firstElementChild.classList.add("mostrar");
        error.classList.add("mostrar");
        return false;
    } else {
        document.getElementById("campo-estudiantes").firstElementChild.classList.remove("mostrar");
        error.classList.remove("mostrar");
    }
    
    dia = document.getElementById("dia");
    if( dia === "" || dia.length === 0) {
        document.getElementById("campo-dia").firstElementChild.classList.add("mostrar");
        error.classList.add("mostrar");
        return false;
    } else {
        document.getElementById("campo-dia").firstElementChild.classList.remove("mostrar");
        error.classList.remove("mostrar");
    }

    radio = document.getElementsByName("cuatrimestre");
    for(let i = 0 ; i < radio.length; i++){
        if(radio[i].checked){
            cuatrimestre = radio[i].value;
        }
    }
    
    if( cuatrimestre === "" || cuatrimestre.length === 0) {
        document.getElementById("campo-cuatrimestre").firstElementChild.classList.add("mostrar");
        error.classList.add("mostrar");
        return false;
    } else {
        document.getElementById("campo-cuatrimestre").firstElementChild.classList.remove("mostrar");
        error.classList.remove("mostrar");
    }

    radio = document.getElementsByName("tiempo");
    for(let i = 0 ; i < radio.length; i++){
        if(radio[i].checked){
            tiempo = radio[i].value;
        }
    }

    if( tiempo === "" || tiempo.length === 0) {
        document.getElementById("campo-tiempo").firstElementChild.classList.add("mostrar");
        error.classList.add("mostrar");
        return false;
    } else {
        document.getElementById("campo-tiempo").firstElementChild.classList.remove("mostrar");
        error.classList.remove("mostrar");
    }

    if(tiempo === "dia"){
        fecha = document.getElementById("fecha").value;
        if( fecha === "" || fecha.length === 0) {
            document.getElementById("campo-fecha").firstElementChild.classList.add("mostrar");
            error.classList.add("mostrar");
            return false;
        } else {
            document.getElementById("campo-fecha").firstElementChild.classList.remove("mostrar");
            error.classList.remove("mostrar");
        }
    }

    if(tiempo === "dia"){
        fecha = fecha.split("-");  
        let mes = parseInt(fecha[1]);
        if(mes === 7 || mes === 12 || mes === 1 || mes === 2){
            let contenido = `<p>El mes elegido no tiene actividades</p>`;
            error.innerHTML = contenido;
            error.classList.add("mostrar");
            return false;
        }
        if((cuatrimestre === "primero" && (mes > 6 )) || (cuatrimestre === "segundo" && (mes < 8 )) ){
            let contenido = `<p>El cuatrimestre no correspone con la fecha elegida</p>`;
            error.innerHTML = contenido;
            error.classList.add("mostrar");
            return false;
        }
    }

    horario = document.getElementById("horario").value;
    if( horario === "" || horario.length === 0) {
        document.getElementById("campo-horario").firstElementChild.classList.add("mostrar");
        error.classList.add("mostrar");
        return false;
    } else {
        document.getElementById("campo-horario").firstElementChild.classList.remove("mostrar");
        error.classList.remove("mostrar");
    }


    document.getElementById("exito").classList.add("mostrar");
    let boton = document.getElementById("boton-imprimir")
    boton.removeAttribute("disabled");
    boton.classList.remove("anulado");
    return false;
}


function imprimirReserva(){
    let materia = "";
    let fecha = "";
    let tiempo = "";
    let cuatrimestre = "";
    let radio = "";
    let horario = "";
    
    materia = document.getElementById("materia").value;
    horario = document.getElementById("horario").value;
    
    radio = document.getElementsByName("tiempo");
    for(let i = 0 ; i < radio.length; i++){
        if(radio[i].checked){
            tiempo = radio[i].value;
        }
    }

    radio = document.getElementsByName("cuatrimestre");
    for(let i = 0 ; i < radio.length; i++){
        if(radio[i].checked){
            cuatrimestre = radio[i].value;
        }
    }

    if(tiempo === "dia") {
        fecha = document.getElementById("fecha").value;
        fecha = fecha.split("-").reverse().join("-");
    } else {
        fecha = document.getElementById("dia").value;

        if(cuatrimestre === "primero") {
            fecha = "primer cuatrimestre, días "+fecha;
        } else {
            fecha = "segundo cuatrimestre, días "+fecha;
        }
    }

    let contenido = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Aulas | FCFMyN</title>
        
            <!-- Fuentes Tipográficas -->
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Roboto:ital,wght@0,700;1,400&display=swap" rel="stylesheet">
        
            <!-- Archivos CSS -->
            <link rel="stylesheet" href="../css/normalize.css">
            <link rel="stylesheet" href="../css/grid.css">
            <link rel="stylesheet" href="../css/styles.css">
            <link rel="stylesheet" href="../css/responsive.css">
            
            <!-- Fav Icon -->
            <link rel="icon" href="../images/fav.svg?ver=1.0" type="image/svg">
        </head>
        <body>
        
            <main class="principal ticket-reserva" onload="cargarTicket();">
                <div class="contenedor">
                    <section class="ticket-reserva col-x-12">
                        <div class="fila">
                            <div class="ticket col-x-12 col-s-6" id="ticket">
                                <div class="contenido" id="contenido">
                                    <div class="logo">
                                        <a href="../index.html">
                                            <img src="../images/logo-fmn-color.svg" alt="logo fmc">
                                        </a>
                                    </div>
                                    <h2>Ticket</h2>
                                    <p>Comprobante de reserva</p>
                                    <div class="divisor"></div>
                                    <p><span>Nombre de la materia:</span> ${materia}</p>
                                    <p><span>Fecha de reserva:</span> ${fecha}</p>
                                    <p><span>Horario:</span> ${horario}:00hs</p>
                                    <a href="#" class="boton-enlace">Descargar</a>
                                    <a href="../aulas.html" class="boton-enlace">Nueva Reserva</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        
        </body>
        </html>
    `;
    document.write(contenido);    
}


