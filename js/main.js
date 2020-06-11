function menuMovil(){
    let activarMenu = document.getElementById("menu-movil");
    let menu = document.getElementById("menu");
    if(activarMenu.classList.contains("x")){
        activarMenu.classList.remove("x");
        menu.classList.remove("activado");
    } else {
        activarMenu.classList.add("x");
        menu.classList.add("activado");
    }
}

function validarMail(mail){
    let y = mail.length;
    let arroba = 0;
    let unicode = 0;
    let cantidad = 0;
    let check = false;

    //obtiene la posición del @ del mail
    for(let i=0; i < y; i++){
        if(mail[i]=="@"){
            arroba = i;
            break;        
        }
    }

    //chequea que no haya . al principio, final del mail, o después de un @
    if(mail[0] == "." || mail[y-1] == "." || mail[arroba+1] == ".") {
        return false;
    }

    //chequea que haya al menos 2 caracteres despues del @ y que haya al menos
    //dos caracteres despues del .
    for(let i = arroba+1 ; i<y ; i++){
        if(mail[i] == "."){
            check = true;
            if(i-(arroba+1)<2){
                return false;
            } else if (y-(i+1)<2){
                return false;
            }
        }
    }

    //chequea que haya un . después del @
    if(check == false){
        return false;
    }

    //chequea que no haya menos de dos caracteres antes del @
    for(let i = 0 ; i<arroba ; i++){
        cantidad+=1;
    }
    if(cantidad<2){
        return false;
    }

    //chequea que no haya caracteres no aceptados
    function aceptados(char){
        let aceptados="@.!#$%&'*/=?^_+-`{|}~0123456789";

        for(let i = 0 ; i<aceptados.length ; i++) {
            if(char == aceptados[i]){
                check = true;
            }
        }

        return check;
    }

    for(let i=0 ; i<y ; i++){
        unicode = mail[i].charCodeAt();
        for(let k=0 ; k<aceptados.length ; k++){
            if( aceptados(mail[i]) || ((unicode>='97' && unicode<='122') || (unicode>='65' && unicode<='90'))) {
                continue;
            } else {
                return false;
            }
        }
    }

    //chequea que no haya @ despues del primer @ obligatorio
    for(let i = arroba+1 ; i<y ; i++){
        if(mail[i]=="@"){
            return false;
        }
    }

    return true;
}

function validarContacto(){
    let dato = "";
    let error = document.getElementById("error");
    let formulario = document.getElementById("formulario-contacto");
    
    dato = formulario[0].value;
    if( dato === "" || dato.length === 0) {
        formulario[0].setAttribute("placeholder","Campo obligatorio: nombre completo");
        error.classList.add("mostrar");
        return false;
    } else {
        error.classList.remove("mostrar");
    }

    dato = formulario[1].value;
    if( dato === "" || dato.length === 0) {
        formulario[1].setAttribute("placeholder","Campo obligatorio: e-mail");
        error.classList.add("mostrar");
        return false;
    } else {
        error.classList.remove("mostrar");
    }

    if(validarMail(dato)===true){
        error.classList.remove("mostrar");
    } else {
        formulario[1].value = "";
        formulario[1].setAttribute("placeholder","Error: e-mail incorrecto");
        error.classList.add("mostrar");
        return false;
    }

    dato = formulario[3].value;
    if(dato === "" || dato.length === 0){
        formulario[3].setAttribute("placeholder","Campo obligatorio: mensaje");
        error.classList.add("mostrar");
        return false;
    } else {
        error.classList.remove("mostrar");
    }

    error.innerHTML = `<p>Mensaje enviado exitosamente</p>`;
    return true; 
}

function abrirColapsable(e){
    e.preventDefault();
    var contenido = this.nextElementSibling;
    if (contenido.style.maxHeight){
        contenido.style.maxHeight = null;
        contenido.classList.remove("abierto");
    } else {
        contenido.style.maxHeight = contenido.scrollHeight + "px";
        contenido.classList.add("abierto");
    } 
}



