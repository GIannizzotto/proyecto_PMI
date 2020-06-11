let eleccion = "";


let menuPrincipal = document.getElementsByClassName("boton-enlace");
for(let i = 0 ; i < menuPrincipal.length ; i++){
    menuPrincipal[i].addEventListener("click", function(e){
        e.preventDefault()
   });
}

function abrirDesplegable(clicked){
    if(clicked=="carrera"){
        let menu = document.getElementById("menu-carrera");
        if(menu.classList.contains("abrir")){
            menu.classList.remove("abrir");
        } else {
            menu.classList.add("abrir");
        }
    }

    if(clicked=="anio"){
        let menu = document.getElementById("menu-anio");
        if(menu.classList.contains("abrir")){
            menu.classList.remove("abrir");
        } else {
            menu.classList.add("abrir");
        }
    }

    if(clicked=="materia"){
        let menu = document.getElementById("menu-materia");
        if(menu.classList.contains("abrir")){
            menu.classList.remove("abrir");
        } else {
            menu.classList.add("abrir");
        }
    }
}

function elegirCarrera(clicked){
    let menuAnio = document.getElementById("menu-anio");
    let panelMaterias = document.getElementById("panel-materias");
    let tituloHorarios = document.getElementById("titulo-horarios");
    let panelHorarios = document.getElementById("panel-horarios");
    menuCarrera.classList.remove("abrir");
    eleccion = clicked;

    if(clicked=="ing-elec-dig"){
        let menu = `<li><a class="link" id="1a" href="#" onclick="elegirMateria(this.id)">Primer año</a></li>
        <li class="divisor"></li>
        <li><a class="link" id="2a" href="#" onclick="elegirMateria(this.id)">Segundo año</a></li>
        <li class="divisor"></li>
        <li><a class="link" id="3a" href="#" onclick="elegirMateria(this.id)">Tercer año</a></li>
        <li class="divisor"></li>
        <li><a class="link" id="4a" href="#" onclick="elegirMateria(this.id)">Cuarto año</a></li>
        <li class="divisor"></li>
        <li><a class="link" id="5a" href="#" onclick="elegirMateria(this.id)">Quinto año</a></li>`;

        let contenidoMaterias = `<h3>Ingieniería en electrónica con orientación en sistemas digitales</h3>
        <p class="aviso">Elige un año para ver los horarios de cursada</p>
        <ul class="menu-materia" id="menu-materia">
                            
        </ul>   
        `;

        menuAnio.innerHTML = menu;
        panelMaterias.innerHTML = contenidoMaterias;
        panelHorarios.innerHTML = ``;
        tituloHorarios.innerHTML = ``;
        document.getElementById("desplegable-anio").classList.add("mostrar");
    }

    if(clicked=="prof-tecn"){
        let menu = `<li><a class="link" id="1a" onclick="elegirMateria(this.id)" href="#">Primer año</a></li>
        <li class="divisor"></li>
        <li><a class="link" id="2a" onclick="elegirMateria(this.id)" href="#">Segundo año</a></li>
        <li class="divisor"></li>
        <li><a class="link" id="3a" onclick="elegirMateria(this.id)" href="#">Tercer año</a></li>
        <li class="divisor"></li>
        <li><a class="link" id="4a" onclick="elegirMateria(this.id)" href="#">Cuarto año</a></li>`;

        let contenidoMaterias = `<h3>Profesorado en Tecnologías</h3>
        <p class="aviso">Elige un año para ver los horarios de cursada</p>
        <ul class="menu-materia" id="menu-materia">
                            
        </ul>   
        `;

        menuAnio.innerHTML = menu;
        panelMaterias.innerHTML = contenidoMaterias;
        panelHorarios.innerHTML = ``;
        tituloHorarios.innerHTML = ``;
        document.getElementById("desplegable-anio").classList.add("mostrar");
    }

    if(clicked=="tue"){
        let menu = `<li><a class="link" id="1a" onclick="elegirMateria(this.id)" href="#">Primer año</a></li>
        <li class="divisor"></li>
        <li><a class="link" id="2a" onclick="elegirMateria(this.id)" href="#">Segundo año</a></li>
        <li class="divisor"></li>
        <li><a class="link" id="3a" onclick="elegirMateria(this.id)" href="#">Tercer año</a></li>`;

        let contenidoMaterias = `<h3>Tecnicatura Universitaria Electrónica</h3>
        <p class="aviso">Elige un año para ver los horarios de cursada</p>
        <ul class="menu-materia" id="menu-materia">
                            
        </ul>   
        `;

        menuAnio.innerHTML = menu;
        panelMaterias.innerHTML = contenidoMaterias;
        panelHorarios.innerHTML = ``;
        tituloHorarios.innerHTML = ``;
        document.getElementById("desplegable-anio").classList.add("mostrar");
    }

    if(clicked=="tut"){
        let menu = `<li><a class="link" id="1a" onclick="elegirMateria(this.id)" href="#">Primer año</a></li>
        <li class="divisor"></li>
        <li><a class="link" id="2a" onclick="elegirMateria(this.id)" href="#">Segundo año</a></li>
        <li class="divisor"></li>
        <li><a class="link" id="3a" onclick="elegirMateria(this.id)" href="#">Tercer año</a></li>`;

        let contenidoMaterias = `<h3>Tecnicatura Universitaria en Telecomunicaciones</h3>
        <p class="aviso">Elige un año para ver los horarios de cursada</p>
        <ul class="menu-materia" id="menu-materia">
                            
        </ul>   
        `;

        menuAnio.innerHTML = menu;
        panelMaterias.innerHTML = contenidoMaterias;
        panelHorarios.innerHTML = ``;
        tituloHorarios.innerHTML = ``;
        document.getElementById("desplegable-anio").classList.add("mostrar");
    }

    let links = menuAnio.getElementsByClassName("link");

    for(let i = 0 ; i<links.length ; i++){
         links[i].addEventListener("click", function(e){
             e.preventDefault();
             this.classList.add("activo");
         })
     }    
}

let menuCarrera = document.getElementById("menu-carrera");
let links = menuCarrera.getElementsByClassName("link");

for(let i = 0 ; i <links.length ; i++){
    links[i].addEventListener("click", function(e){ 
        e.preventDefault();
        let actual = document.getElementsByClassName("activo");
        if(actual.length!=0){
            actual[0].classList.remove("activo");
        }
    })
}

for(let i = 0 ; i<links.length ; i++){
    links[i].addEventListener("click", function(e){
        e.preventDefault();
        this.classList.add("activo");
    })
}

function elegirMateria(clicked){
    let menuMaterias = document.getElementById("menu-materia");
    let tituloHorarios = document.getElementById("titulo-horarios");
    let panelHorarios = document.getElementById("panel-horarios");
    let panelMaterias = document.getElementById("panel-materias");

    document.getElementById("menu-anio").classList.remove("abrir");    

    if(clicked=="1a" && eleccion=="ing-elec-dig"){
        let menu = `<li><h4>Anual</h4></li> 
        <li>
            <a class="link colapsable" href="#">Inglés</a>
            <div class="contenido-colapsable">
                <p>Los horarios y lugar de cursada serán publicados en la cartelera de sección de alumnos, segundo piso, rectorado.</p>
                <p>Primera clase: Semana del 16 de Marzo</p>
            </div>
        </li>
        <li><h4>Primer Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Calculo I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Teoría (ambos grupos): Viernes, 18hs a 20hs</p>
                <p>Lugar: Anfiteatro 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Práctica G1 (Apellidos A-L): Martes y Jueves, 8hs a 11hs</p>
                <p>Lugar: Lab. 1, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Práctica G2 (Apellidos M-Z): Martes y Jueves, 8hs a 11hs</p>
                <p>Lugar: Lab. 14, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Algebra I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes, 8hs a 10hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles, 8hs a 11hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes, 8hs a 11hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 11/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Química</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes, 11hs a 13hs</p>
                <p>Lugar: Aula 52, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves, 11hs a 13hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 18/03</p>
            </div>            
        </li>
        <li><h4>Segundo Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Algebra II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes, 8hs a 11hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves, 8hs a 11hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 11/08</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Física I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Miércoles, 8hs a 10hs</p>
                <p>Lugar: Aula 5, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles, 10hs a 13hs</p>
                <p>Lugar: Aula 34, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes, 8hs a 10hs</p>
                <p>Lugar: Aula 42, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 12/08</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Fundamentos de la informática</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes, 8hs a 10hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Dia y Horario: Viernes, 10hs a 12hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Dia y Horario: Martes, 11hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Sistemas de representación</a>
            <div class="contenido-colapsable">
                <p>Dia y Horario: Lunes, 16hs a 20hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
            </div>
        </li>
        `;
        let titulos = `
        <h3>Horarios de cursada de primer año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Inglés</td>
                        <td colspan="2">Los horarios y lugar de cursada serán publicados en la cartelera de sección de alumnos, segundo piso, rectorado.</td>
                        <td>Semana del 16 de Marzo</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Calculo I</td>
                        <td>Teoría (ambos grupos): Viernes, 18hs a 20hs</td>
                        <td>Anfiteatro 2</td>
                        <td rowspan="3">Martes 10/03</td>
                    </tr>
                    <tr>
                        <td>Práctica G1 (Apellidos A-L): Martes y Jueves, 8hs a 11hs</td>
                        <td>Lab. 1, 2do piso, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Práctica G1 (Apellidos M-Z): Martes y Jueves, 8hs a 11hs</td>
                        <td>Lab. 14, 2do piso, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Algebra I</td>
                        <td>Lunes, 8hs a 10hs</td>
                        <td>Aula 58, bloque 2</td>
                        <td rowspan="3">Miércoles 11/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 8hs a 11hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 8hs a 11hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Química</td>
                        <td>Miércoles, 11hs a 13hs</td>
                        <td>Aula 52, bloque 2</td>
                        <td rowspan="2">Miércoles 18/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 11hs a 13hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Algebra II</td>
                        <td>Martes, 8hs a 11hs</td>
                        <td>Aula 58, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 8hs a 11hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Física I</td>
                        <td>Miércoles, 8hs a 10hs</td>
                        <td>Aula 5, bloque 2</td>
                        <td rowspan="3">Miércoles 12/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 10hs a 13hs</td>
                        <td>Aula 34, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 8hs a 10hs</td>
                        <td>Aula 42, bloque 1</td>
                    </tr> 
                    <tr>
                        <td rowspan="3">Fundamentos de la informática</td>
                        <td>Lunes, 8hs a 11hs</td>
                        <td>Aula 58, bloque 2</td>
                        <td rowspan="3">Miércoles 10/08</td>
                    </tr>
                    <tr>
                        <td>Viernes, 10hs a 12hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>                
                    <tr>
                        <td>Martes, 11hs a 12hs</td>
                        <td>Aula 8, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Sistemas de representación</td>
                        <td>Lunes, 16hs a 20hs</td>
                        <td>Aula 58, bloque 2</td>
                        <td rowspan="3">Miércoles 10/08</td>
                    </tr>                           
                </tbody>
            </table>
        </div>
        `;

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;

        menuMaterias.classList.add("mostrar");
    }

    if(clicked=="2a" && eleccion=="ing-elec-dig"){
        let menu = `<li><h4>Primer Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Programación</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Electrónica digital</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 9hs a 10hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 9hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes 10hs a 12hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Lunes 09/03</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Física II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 16hs a 18hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 18hs a 20hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 20hs a 22hs</p>
                <p>Lugar: Lab. 1, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 18/03</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Calculo II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 16hs a 18hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 18hs a 20hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes 16hs a 20hs</p>
                <p>Lugar: Lab. 1, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 17/03</p>
            </div>    
        </li>
        <li><h4>Segundo Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Matemática aplicada</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 9hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Juves 9hs a 13hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 11/08</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Procesadores I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 14hs a 16hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 18hs a 20hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes 16hs a 17hs</p>
                <p>Lugar: Lab. 14, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 12/08</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Electrónica analógica</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 16hs a 19hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 8hs a 10hs</p>
                <p>Lugar: Aula 43, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 10hs a 11hs</p>
                <p>Lugar: Lab. 1, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 08/08</p>
            </div>         
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Redes eléctricas I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Jueves 8hs a 10hs</p>
                <p>Lugar: Aula 43, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 10hs a 11hs</p>
                <p>Lugar: Lab. 14, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes 16hs a 19hs</p>
                <p>Lugar: Aula 5, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Jueves 11/08</p>
            </div>        
        </li>
        `;

        let titulos = `
        <h3>Horarios de cursada de segundo año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Programación</td>
                        <td>Martes, 10hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 10/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 12hs</td>
                        <td>Aula 8, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Electrónica digital</td>
                        <td>Lunes, 9hs a 10hs</td>
                        <td>Aula 8, bloque 2</td>
                        <td rowspan="3">Lunes 9/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 9hs a 12hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 10hs a 12hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Física II</td>
                        <td>Martes, 16hs a 18hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Miércoles 18/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Jueves, 20hs a 22hs</td>
                        <td>Lab. 1, 2do piso, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Calculo II</td>
                        <td>Martes, 16hs a 18hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Martes 17/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 11hs a 13hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Matemática aplicada</td>
                        <td>Martes, 9hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 13hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Procesadores I</td>
                        <td>Lunes, 14hs a 16hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Miércoles 12/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 16hs a 17hs</td>
                        <td>Lab. 14, 2do piso, bloque 2/td>
                    </tr> 
                    <tr>
                        <td rowspan="3">Electrónica analógica</td>
                        <td>Lunes, 16hs a 19hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Miércoles 08/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 8hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                    </tr>                
                    <tr>
                        <td>Miércoles, 10hs a 11hs</td>
                        <td>Lab. 1, 2do piso, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Redes eléctricas I</td>
                        <td>Jueves, 8hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                        <td rowspan="3">Jueves 11/08</td>
                    </tr>
                        <tr>
                        <td>Jueves, 10hs a 11hs</td>
                        <td>Lab. 14, 2do piso, bloque 2</td>
                    </tr>                
                    <tr>
                        <td>Viernes, 16hs a 19hs</td>
                        <td>Aula 5, bloque 2</td>
                    </tr>                           
                </tbody>
            </table>
        </div>
        `; 

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;
        menuMaterias.classList.add("mostrar");
    }

    if(clicked=="3a" && eleccion=="ing-elec-dig"){
        let menu = `<li><h4>Primer Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Electrotecnia</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Probabilidad y estadística</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Procesadores II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Electrónica analógica II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Redes eléctricas II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li><h4>Segundo Cuatrimestre</h4></li>  
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Señales y sistemas</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Interfaces</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Tecnología de computadoras</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Diseño de sistemas digitales</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        `;

        let titulos = `
        <h3>Horarios de cursada de tercer año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Electrotecnia</td>
                        <td>Martes, 10hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 10/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 12hs</td>
                        <td>Aula 8, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Probabilidad y estadística</td>
                        <td>Lunes, 9hs a 10hs</td>
                        <td>Aula 8, bloque 2</td>
                        <td rowspan="3">Lunes 9/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 9hs a 12hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 10hs a 12hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Procesadores II</td>
                        <td>Martes, 16hs a 18hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Miércoles 18/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Jueves, 20hs a 22hs</td>
                        <td>Lab. 1, 2do piso, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Electrónica analógica II</td>
                        <td>Martes, 16hs a 18hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Martes 17/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 11hs a 13hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 11hs a 13hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Redes eléctricas II</td>
                        <td>Martes, 16hs a 18hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Martes 17/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 11hs a 13hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Señales y sistemas</td>
                        <td>Martes, 9hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 13hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Interfaces</td>
                        <td>Lunes, 14hs a 16hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Miércoles 12/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 16hs a 17hs</td>
                        <td>Lab. 14, 2do piso, bloque 2/td>
                    </tr> 
                    <tr>
                        <td rowspan="3">Tecnología de computadoras</td>
                        <td>Lunes, 16hs a 19hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Miércoles 08/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 8hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                    </tr>                
                    <tr>
                        <td>Miércoles, 10hs a 11hs</td>
                        <td>Lab. 1, 2do piso, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Diseño de sistemas digitales</td>
                        <td>Jueves, 8hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                        <td rowspan="3">Jueves 11/08</td>
                    </tr>
                        <tr>
                        <td>Jueves, 10hs a 11hs</td>
                        <td>Lab. 14, 2do piso, bloque 2</td>
                    </tr>                
                    <tr>
                        <td>Viernes, 16hs a 19hs</td>
                        <td>Aula 5, bloque 2</td>
                    </tr>                           
                </tbody>
            </table>
        </div>
        `; 

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;

        menuMaterias.classList.add("mostrar");
    }

    if(clicked=="4a" && eleccion=="ing-elec-dig"){
        let menu = `<li><h4>Primer Cuatrimestre</h4>  
        <li>
            <a class="link colapsable" href="#">Procesamiento digital de señales I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Control I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Electromagnetismo y medios de transmisión</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Economía y organización industrial</a>
            <div class="contenido-colapsable">
                 <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li><h4>Segundo Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Comunicaciones I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Automatización industrial</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Control II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Gestión ambiental y legislación</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        `;

        let titulos = `
        <h3>Horarios de cursada de cuarto año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Procesamiento digital de señales I</td>
                        <td>Martes, 10hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 10/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 12hs</td>
                        <td>Aula 8, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Control I</td>
                        <td>Lunes, 9hs a 10hs</td>
                        <td>Aula 8, bloque 2</td>
                        <td rowspan="3">Lunes 9/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 9hs a 12hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 10hs a 12hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Electromagnetismo y medios de transmisión</td>
                        <td>Martes, 16hs a 18hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Miércoles 18/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Jueves, 20hs a 22hs</td>
                        <td>Lab. 1, 2do piso, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Economía y organización industrial</td>
                        <td>Martes, 16hs a 18hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Martes 17/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 11hs a 13hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 11hs a 13hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Comunicaciones I</td>
                        <td>Martes, 9hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 13hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Automatización industrial</td>
                        <td>Lunes, 14hs a 16hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Miércoles 12/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 16hs a 17hs</td>
                        <td>Lab. 14, 2do piso, bloque 2/td>
                    </tr> 
                    <tr>
                        <td rowspan="3">Control II</td>
                        <td>Lunes, 16hs a 19hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Miércoles 08/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 8hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                    </tr>                
                    <tr>
                        <td>Miércoles, 10hs a 11hs</td>
                        <td>Lab. 1, 2do piso, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Gestión ambiental y legislación</td>
                        <td>Jueves, 8hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                        <td rowspan="3">Jueves 11/08</td>
                    </tr>
                        <tr>
                        <td>Jueves, 10hs a 11hs</td>
                        <td>Lab. 14, 2do piso, bloque 2</td>
                    </tr>                
                    <tr>
                        <td>Viernes, 16hs a 19hs</td>
                        <td>Aula 5, bloque 2</td>
                    </tr>                           
                </tbody>
            </table>
        </div>
        `; 

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;

        menuMaterias.classList.add("mostrar");
    }

    if(clicked=="5a" && eleccion=="ing-elec-dig"){
        let menu = `<li><h4>Primer Cuatrimestre</h4>  
        <li>
            <a class="link colapsable" href="#">Comunicaciones II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Arquitectura de computadoras II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Procesamiento digital de señales II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Redes de datos</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li><h4>Segundo Cuatrimestre</h4></li> 
        <li>
            <a class="link colapsable" href="#">Práctica profesional supervisada</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Proyecto final</a>
            <div class="contenido-colapsable">
                <p>Las prácticas serán asignadas en la primera clase en el aula 58, bloque 2</p>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        `;

        let titulos = `
        <h3>Horarios de cursada de quinto año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Comunicaciones II</td>
                        <td>Martes, 10hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 10/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 12hs</td>
                        <td>Aula 8, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Arquitectura de computadoras II</td>
                        <td>Lunes, 9hs a 10hs</td>
                        <td>Aula 8, bloque 2</td>
                        <td rowspan="3">Lunes 9/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 9hs a 12hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 10hs a 12hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Procesamiento digital de señales II</td>
                        <td>Martes, 16hs a 18hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Miércoles 18/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Jueves, 20hs a 22hs</td>
                        <td>Lab. 1, 2do piso, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Redes de datos</td>
                        <td>Martes, 16hs a 18hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Martes 17/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 11hs a 13hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 11hs a 13hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Prática profesional supervisada</td>
                        <td colspan="2">Las prácticas serán asignadas en la primera clase en el aula 58, bloque 2</td>
                        <td>Martes 11/08</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Proyecto final</td>
                        <td>Lunes, 14hs a 16hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Miércoles 12/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 16hs a 17hs</td>
                        <td>Lab. 14, 2do piso, bloque 2</td>
                    </tr>                          
                </tbody>
            </table>
        </div>
        `; 

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;

        menuMaterias.classList.add("mostrar");
    }

    if(clicked=="1a" && eleccion=="prof-tecn"){
        let menu = `<li><h4>Anual</h4></li> 
        <li>
            <a class="link colapsable" href="#">Inglés</a>
            <div class="contenido-colapsable">
                <p>Los horarios y lugar de cursada serán publicados en la cartelera de sección de alumnos, segundo piso, rectorado.</p>
                <p>Primera clase: Semana del 16 de Marzo</p>
            </div>
        </li>
        <li><h4>Primer Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Algebra</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Teoría (ambos grupos): Viernes, 18hs a 20hs</p>
                <p>Lugar: Anfiteatro 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Práctica G1 (Apellidos A-L): Martes y Jueves, 8hs a 11hs</p>
                <p>Lugar: Lab. 1, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Práctica G2 (Apellidos M-Z): Martes y Jueves, 8hs a 11hs</p>
                <p>Lugar: Lab. 14, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Calculo</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes, 8hs a 10hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles, 8hs a 11hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes, 8hs a 11hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 11/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Estrategia de comprensión y producción de textos</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes, 11hs a 13hs</p>
                <p>Lugar: Aula 52, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves, 11hs a 13hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 18/03</p>
            </div>            
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Resolución de problemas y algoritmos</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes, 8hs a 11hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves, 8hs a 11hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 11/08</p>
            </div> 
        </li>
        <li><h4>Segundo Cuatrimestre</h4></li>          
        <li>
            <a class="link colapsable" href="#">Programación I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Miércoles, 8hs a 10hs</p>
                <p>Lugar: Aula 5, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles, 10hs a 13hs</p>
                <p>Lugar: Aula 34, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes, 8hs a 10hs</p>
                <p>Lugar: Aula 42, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 12/08</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Matemática discreta</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes, 8hs a 10hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Dia y Horario: Viernes, 10hs a 12hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Dia y Horario: Martes, 11hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Problemática pedagógica fundamental</a>
            <div class="contenido-colapsable">
                <p>Dia y Horario: Lunes, 16hs a 20hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
            </div>
        </li>
        `;

        let titulos = `
        <h3>Horarios de cursada de primer año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Inglés</td>
                        <td colspan="2">Los horarios y lugar de cursada serán publicados en la cartelera de sección de alumnos, segundo piso, rectorado.</td>
                        <td>Semana del 16 de Marzo</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Algebra</td>
                        <td>Teoría (ambos grupos): Viernes, 18hs a 20hs</td>
                        <td>Anfiteatro 2</td>
                        <td rowspan="3">Martes 10/03</td>
                    </tr>
                    <tr>
                        <td>Práctica G1 (Apellidos A-L): Martes y Jueves, 8hs a 11hs</td>
                        <td>Lab. 1, 2do piso, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Práctica G1 (Apellidos M-Z): Martes y Jueves, 8hs a 11hs</td>
                        <td>Lab. 14, 2do piso, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Calculo</td>
                        <td>Lunes, 8hs a 10hs</td>
                        <td>Aula 58, bloque 2</td>
                        <td rowspan="3">Miércoles 11/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 8hs a 11hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 8hs a 11hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Estrategia de comprensión y producción de textos</td>
                        <td>Miércoles, 11hs a 13hs</td>
                        <td>Aula 52, bloque 2</td>
                        <td rowspan="2">Miércoles 18/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 11hs a 13hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Resolución de problemas y algoritmos</td>
                        <td>Miércoles, 11hs a 13hs</td>
                        <td>Aula 52, bloque 2</td>
                        <td rowspan="2">Miércoles 18/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 11hs a 13hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Programación I</td>
                        <td>Martes, 8hs a 11hs</td>
                        <td>Aula 58, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 8hs a 11hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Matemática discreta</td>
                        <td>Miércoles, 8hs a 10hs</td>
                        <td>Aula 5, bloque 2</td>
                        <td rowspan="3">Miércoles 12/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 10hs a 13hs</td>
                        <td>Aula 34, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 8hs a 10hs</td>
                        <td>Aula 42, bloque 1</td>
                    </tr> 
                    <tr>
                        <td rowspan="3">Problemática pedagógica fundamental</td>
                        <td>Lunes, 8hs a 11hs</td>
                        <td>Aula 58, bloque 2</td>
                        <td rowspan="3">Miércoles 10/08</td>
                    </tr>
                    <tr>
                        <td>Viernes, 10hs a 12hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>                
                    <tr>
                        <td>Martes, 11hs a 12hs</td>
                        <td>Aula 8, bloque 2</td>
                    </tr>                           
                </tbody>
            </table>
        </div>
        `;

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;

        menuMaterias.classList.add("mostrar");
    }

    if(clicked=="2a" && eleccion=="prof-tecn"){
        let menu = `<li><h4>Primer Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Probabilidad y estadística</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Psicología evolutiva y teoría del aprendizaje</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 9hs a 10hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 9hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes 10hs a 12hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Lunes 09/03</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Programación II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 16hs a 18hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 18hs a 20hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 20hs a 22hs</p>
                <p>Lugar: Lab. 1, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 18/03</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Arquitectura del procesador</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 16hs a 18hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 18hs a 20hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes 16hs a 20hs</p>
                <p>Lugar: Lab. 1, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 17/03</p>
            </div>    
        </li>
        <li><h4>Segundo Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Investigación educativa en informática</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 9hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Juves 9hs a 13hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 11/08</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Didáctica</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 14hs a 16hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 18hs a 20hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes 16hs a 17hs</p>
                <p>Lugar: Lab. 14, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 12/08</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Estructura de datos y algoritmos</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 16hs a 19hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 8hs a 10hs</p>
                <p>Lugar: Aula 43, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 10hs a 11hs</p>
                <p>Lugar: Lab. 1, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 08/08</p>
            </div>         
        </li>
        `;

        let titulos = `
        <h3>Horarios de cursada de segundo año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Probabilidad y estadística</td>
                        <td>Martes, 10hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 10/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 12hs</td>
                        <td>Aula 8, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Psicología evolutiva y teoría del aprendizaje</td>
                        <td>Lunes, 9hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                        <td rowspan="2">Lunes 9/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 9hs a 12hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Programación II</td>
                        <td>Martes, 16hs a 18hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Miércoles 18/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Jueves, 20hs a 22hs</td>
                        <td>Lab. 1, 2do piso, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Arquitectura del procesador</td>
                        <td>Martes, 16hs a 18hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Martes 17/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 11hs a 13hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Investigación educativa en informática</td>
                        <td>Martes, 9hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 13hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Didáctica</td>
                        <td>Lunes, 14hs a 16hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Miércoles 12/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Estructura de datos y algoritmos</td>
                        <td>Lunes, 16hs a 19hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Miércoles 08/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 8hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                    </tr>                                        
                </tbody>
            </table>
        </div>
        `; 

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;
        menuMaterias.classList.add("mostrar");
    }

    if(clicked=="3a" && eleccion=="prof-tecn"){
        let menu = `<li><h4>Primer Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Sistemas operativos</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Historia de la educación Latinoamericana y Argentina</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Seminario taller: Informática educativa</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Ingeniería del software</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li><h4>Segundo Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Base de datos</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Redes de computadoras</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Análisis comparativo de lenguajes</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        `;

        let titulos = `
        <h3>Horarios de cursada de tercer año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Sistemas operativos</td>
                        <td>Martes, 10hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 10/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 12hs</td>
                        <td>Aula 8, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Historia de la educación Latinoamericana y Argentina</td>
                        <td>Lunes, 9hs a 10hs</td>
                        <td>Aula 8, bloque 2</td>
                        <td rowspan="3">Lunes 9/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 9hs a 12hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 10hs a 12hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Seminario taller: Informática educativa</td>
                        <td>Martes, 16hs a 18hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Miércoles 18/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Ingenieríá del software</td>
                        <td>Martes, 16hs a 18hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Martes 17/03</td>
                    </tr>
                    <tr>
                        <td>Viernes, 11hs a 13hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Base de datos</td>
                        <td>Lunes, 18hs a 22hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 18hs a 20hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Redes de computadoras</td>
                        <td>Lunes, 14hs a 16hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Miércoles 12/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Análisis comparativo de lenguajes</td>
                        <td>Lunes, 16hs a 19hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Miércoles 08/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 8hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                    </tr>               
                </tbody>
            </table>
        </div>
        `; 

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;

        menuMaterias.classList.add("mostrar");
    }

    if(clicked=="4a" && eleccion=="prof-tecn"){
        let menu = `<li><h4>Primer Cuatrimestre</h4>  
        <li>
            <a class="link colapsable" href="#">Formación docente y didáctica específica</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Taller tecnologías educativas emergentes</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes 9hs a 12hs</p>
                <p>Lugar: Aula 52, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Prática profesional docente I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li><h4>Segundo Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Taller de software educativo</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Prática profesional docente II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Optativa</a>
            <div class="contenido-colapsable">
                <p>Corresponderá a la materia optativa elegida</p>
            </div>
        </li>
        `;

        let titulos = `
        <h3>Horarios de cursada de cuarto año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Formación docente y didáctica específica</td>
                        <td>Martes, 10hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 10/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 12hs</td>
                        <td>Aula 8, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Taller tecnologías educativas emergentes</td>
                        <td>Lunes, 9hs a 10hs</td>
                        <td>Aula 8, bloque 2</td>
                        <td rowspan="3">Lunes 9/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 9hs a 12hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 10hs a 12hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Práctica profesional docente I</td>
                        <td>Martes, 16hs a 18hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td>Martes 18/03</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Taller de software educativo</td>
                        <td>Martes, 9hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 13hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Práctica profesional docente II</td>
                        <td>Lunes, 14hs a 16hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="3">Miércoles 12/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 16hs a 17hs</td>
                        <td>Lab. 14, 2do piso, bloque 2/td>
                    </tr> 
                    <tr>
                        <td>Electiva</td>
                        <td colspan="3">Corresponderá a la materia optativa elegida</td>
                    </tr>                          
                </tbody>
            </table>
        </div>
        `; 

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;

        menuMaterias.classList.add("mostrar");
    }

    if(clicked=="1a" && eleccion=="tue"){
        let menu = `<li><h4>Anual</h4></li> 
        <li>
            <a class="link colapsable" href="#">Inglés</a>
            <div class="contenido-colapsable">
                <p>Los horarios y lugar de cursada serán publicados en la cartelera de sección de alumnos, segundo piso, rectorado.</p>
                <p>Primera clase: Semana del 16 de Marzo</p>
            </div>
        </li>
        <li><h4>Primer Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Matemática aplicada</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Teoría (ambos grupos): Viernes, 18hs a 20hs</p>
                <p>Lugar: Anfiteatro 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Práctica G1 (Apellidos A-L): Martes y Jueves, 8hs a 11hs</p>
                <p>Lugar: Lab. 1, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Práctica G2 (Apellidos M-Z): Martes y Jueves, 8hs a 11hs</p>
                <p>Lugar: Lab. 14, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Electricidad y medidas electrónicas I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes, 8hs a 10hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles, 8hs a 11hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes, 8hs a 11hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 11/03</p>
            </div>
        </li>
        <li><h4>Segundo Cuatrimestre</h4></li>          
        <li>
            <a class="link colapsable" href="#">Electricidad y medidas electrónicas II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Miércoles, 8hs a 10hs</p>
                <p>Lugar: Aula 5, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles, 10hs a 13hs</p>
                <p>Lugar: Aula 34, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes, 8hs a 10hs</p>
                <p>Lugar: Aula 42, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 12/08</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Fundamentos de la informática</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes, 8hs a 10hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Dia y Horario: Viernes, 10hs a 12hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Dia y Horario: Martes, 11hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
            </div>
        </li>
        `;

        let titulos = `
        <h3>Horarios de cursada de primer año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Inglés</td>
                        <td colspan="2">Los horarios y lugar de cursada serán publicados en la cartelera de sección de alumnos, segundo piso, rectorado.</td>
                        <td>Semana del 16 de Marzo</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Matemática aplicada</td>
                        <td>Lunes, 8hs a 10hs</td>
                        <td>Aula 58, bloque 2</td>
                        <td rowspan="2">Miércoles 11/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 8hs a 11hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Electricidad y medidas electrónicas I</td>
                        <td>Miércoles, 11hs a 13hs</td>
                        <td>Aula 52, bloque 2</td>
                        <td rowspan="2">Miércoles 18/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 11hs a 13hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Electricidad y medidas electrónicas II</td>
                        <td>Martes, 8hs a 11hs</td>
                        <td>Aula 58, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 8hs a 11hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Fundamentos de la informática</td>
                        <td>Miércoles, 8hs a 10hs</td>
                        <td>Aula 5, bloque 2</td>
                        <td rowspan="3">Miércoles 12/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 10hs a 13hs</td>
                        <td>Aula 34, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 8hs a 10hs</td>
                        <td>Aula 42, bloque 1</td>
                    </tr>                         
                </tbody>
            </table>
        </div>
        `;

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;

        menuMaterias.classList.add("mostrar");
    }

    if(clicked=="2a" && eleccion=="tue"){
        let menu = `<li><h4>Primer Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Electrónica digital</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Electrónica programable</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 9hs a 10hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 9hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes 10hs a 12hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Lunes 09/03</p>
            </div>       
        </li>        
        <li><h4>Segundo Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Procesadores I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 9hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Juves 9hs a 13hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 11/08</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Seguridad, higiene y legislación</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 14hs a 16hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 18hs a 20hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes 16hs a 17hs</p>
                <p>Lugar: Lab. 14, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 12/08</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Electrónica analógica I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 16hs a 19hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 8hs a 10hs</p>
                <p>Lugar: Aula 43, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 10hs a 11hs</p>
                <p>Lugar: Lab. 1, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 08/08</p>
            </div>         
        </li>
        `;

        let titulos = `
        <h3>Horarios de cursada de segundo año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Electrónica digital</td>
                        <td>Martes, 10hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 10/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 12hs</td>
                        <td>Aula 8, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Electrónica programable</td>
                        <td>Lunes, 9hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                        <td rowspan="2">Lunes 9/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 9hs a 12hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Procesadores I</td>
                        <td>Martes, 9hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 13hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Seguridad, higiene y legislación</td>
                        <td>Lunes, 14hs a 16hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Miércoles 12/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Electrónica analógica</td>
                        <td>Lunes, 16hs a 19hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Miércoles 08/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 8hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                    </tr>                                        
                </tbody>
            </table>
        </div>
        `; 

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;
        menuMaterias.classList.add("mostrar");
    }

    if(clicked=="3a" && eleccion=="tue"){
        let menu = `<li><h4>Primer Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Procesadores II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Electrónica analógica II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Optativa I</a>
            <div class="contenido-colapsable">
                <p>Corresponderá a la materia optativa elegida</p>
            </div> 
        </li>
        <li><h4>Segundo Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Práctica técnica supervisada</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Interfaces</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Tecnologías de computadoras</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Optativa II</a>
            <div class="contenido-colapsable">
                <p>Corresponderá a la materia optativa elegida</p>
            </div> 
        </li>
        `;

        let titulos = `
        <h3>Horarios de cursada de tercer año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Procesadores II</td>
                        <td>Martes, 10hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 10/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 12hs</td>
                        <td>Aula 8, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Electrónica analógica II</td>
                        <td>Lunes, 9hs a 10hs</td>
                        <td>Aula 8, bloque 2</td>
                        <td rowspan="3">Lunes 9/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 9hs a 12hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 10hs a 12hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Optativa I</td>
                        <td colspan="3">Corresponderá a la materia optativa elegida</td>
                    </tr>    
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Práctica técnica supervisada</td>
                        <td>Lunes, 18hs a 22hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 18hs a 20hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Interfaces</td>
                        <td>Lunes, 14hs a 16hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Miércoles 12/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Tecnologías de computadoras</td>
                        <td>Lunes, 16hs a 19hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Miércoles 08/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 8hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                    </tr>               
                    <tr>
                        <td>Optativa II</td>
                        <td colspan="3">Corresponderá a la materia optativa elegida</td>
                    </tr>               
                </tbody>
            </table>
        </div>
        `; 

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;

        menuMaterias.classList.add("mostrar");
    }

    if(clicked=="1a" && eleccion=="tut"){
        let menu = `<li><h4>Anual</h4></li> 
        <li>
            <a class="link colapsable" href="#">Inglés</a>
            <div class="contenido-colapsable">
                <p>Los horarios y lugar de cursada serán publicados en la cartelera de sección de alumnos, segundo piso, rectorado.</p>
                <p>Primera clase: Semana del 16 de Marzo</p>
            </div>
        </li>
        <li><h4>Primer Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Matemática aplicada</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Teoría (ambos grupos): Viernes, 18hs a 20hs</p>
                <p>Lugar: Anfiteatro 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Práctica G1 (Apellidos A-L): Martes y Jueves, 8hs a 11hs</p>
                <p>Lugar: Lab. 1, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Práctica G2 (Apellidos M-Z): Martes y Jueves, 8hs a 11hs</p>
                <p>Lugar: Lab. 14, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Electricidad y medidas electrónicas I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes, 8hs a 10hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles, 8hs a 11hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes, 8hs a 11hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 11/03</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Producción multimedial</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes, 8hs a 10hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles, 8hs a 11hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes, 8hs a 11hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 11/03</p>
            </div>
        </li>
        <li><h4>Segundo Cuatrimestre</h4></li>          
        <li>
            <a class="link colapsable" href="#">Electricidad y medidas electrónicas II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Miércoles, 8hs a 10hs</p>
                <p>Lugar: Aula 5, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles, 10hs a 13hs</p>
                <p>Lugar: Aula 34, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes, 8hs a 10hs</p>
                <p>Lugar: Aula 42, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 12/08</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Seguridad, higiene y legislación</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes, 8hs a 10hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Dia y Horario: Viernes, 10hs a 12hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Dia y Horario: Martes, 11hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
            </div>
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Fundamentos de la informática</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes, 8hs a 10hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Dia y Horario: Viernes, 10hs a 12hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Dia y Horario: Martes, 11hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
            </div>
        </li>
        `;

        let titulos = `
        <h3>Horarios de cursada de primer año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Inglés</td>
                        <td colspan="2">Los horarios y lugar de cursada serán publicados en la cartelera de sección de alumnos, segundo piso, rectorado.</td>
                        <td>Semana del 16 de Marzo</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Matemática aplicada</td>
                        <td>Lunes, 8hs a 10hs</td>
                        <td>Aula 58, bloque 2</td>
                        <td rowspan="2">Miércoles 11/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 8hs a 11hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Electricidad y medidas electrónicas I</td>
                        <td>Miércoles, 11hs a 13hs</td>
                        <td>Aula 52, bloque 2</td>
                        <td rowspan="2">Miércoles 18/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 11hs a 13hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Producción multimedial</td>
                        <td>Miércoles, 11hs a 13hs</td>
                        <td>Aula 52, bloque 2</td>
                        <td rowspan="2">Miércoles 18/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 11hs a 13hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Electricidad y medidas electrónicas II</td>
                        <td>Martes, 8hs a 11hs</td>
                        <td>Aula 58, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 8hs a 11hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Fundamentos de la informática</td>
                        <td>Martes, 8hs a 11hs</td>
                        <td>Aula 58, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 8hs a 11hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Fundamentos de la informática</td>
                        <td>Miércoles, 8hs a 10hs</td>
                        <td>Aula 5, bloque 2</td>
                        <td rowspan="3">Miércoles 12/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 10hs a 13hs</td>
                        <td>Aula 34, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 8hs a 10hs</td>
                        <td>Aula 42, bloque 1</td>
                    </tr>                         
                </tbody>
            </table>
        </div>
        `;

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;

        menuMaterias.classList.add("mostrar");
    }

    if(clicked=="2a" && eleccion=="tut"){
        let menu = `<li><h4>Primer Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Electrónica digital</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Instalaciones de redes</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 9hs a 10hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 9hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes 10hs a 12hs</p>
                <p>Lugar: Aula 58, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Lunes 09/03</p>
            </div>       
        </li>
        <li class="divisor"></li>        
        <li>
            <a class="link colapsable" href="#">Señales y sistemas</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 9hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Juves 9hs a 13hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 11/08</p>
            </div>       
        </li>
        <li><h4>Segundo Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Procesadores I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 14hs a 16hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 18hs a 20hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Viernes 16hs a 17hs</p>
                <p>Lugar: Lab. 14, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 12/08</p>
            </div>       
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Telecomunicaciones</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 16hs a 19hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 8hs a 10hs</p>
                <p>Lugar: Aula 43, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 10hs a 11hs</p>
                <p>Lugar: Lab. 1, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 08/08</p>
            </div>         
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Audio y video</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 16hs a 19hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 8hs a 10hs</p>
                <p>Lugar: Aula 43, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 10hs a 11hs</p>
                <p>Lugar: Lab. 1, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 08/08</p>
            </div>         
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Electrónica analógica I</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Lunes 16hs a 19hs</p>
                <p>Lugar: Aula 53, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 8hs a 10hs</p>
                <p>Lugar: Aula 43, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Miércoles 10hs a 11hs</p>
                <p>Lugar: Lab. 1, 2do piso, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Miércoles 08/08</p>
            </div>         
        </li>
        `;

        let titulos = `
        <h3>Horarios de cursada de segundo año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Electrónica digital</td>
                        <td>Martes, 10hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 10/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 12hs</td>
                        <td>Aula 8, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Instalaciones de redes</td>
                        <td>Lunes, 9hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                        <td rowspan="2">Lunes 9/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 9hs a 12hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Señales y sistemas</td>
                        <td>Lunes, 9hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                        <td rowspan="2">Lunes 9/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 9hs a 12hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Procesadores I</td>
                        <td>Martes, 9hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 13hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Telecomunicaciones</td>
                        <td>Lunes, 14hs a 16hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Miércoles 12/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 18hs a 20hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Audio y video</td>
                        <td>Lunes, 16hs a 19hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Miércoles 08/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 8hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                    </tr>                                        
                    <tr>
                        <td rowspan="2">Electrónica analógica I</td>
                        <td>Lunes, 16hs a 19hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Miércoles 08/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 8hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                    </tr>                                        
                </tbody>
            </table>
        </div>
        `; 

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;
        menuMaterias.classList.add("mostrar");
    }

    if(clicked=="3a" && eleccion=="tut"){
        let menu = `<li><h4>Primer Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Técnicas de radiofrecuencia</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Electrónica analógica II</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Redes de datos</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Optativa I</a>
            <div class="contenido-colapsable">
                <p>Corresponderá a la materia optativa elegida</p>
            </div> 
        </li>
        <li><h4>Segundo Cuatrimestre</h4></li>  
        <li>
            <a class="link colapsable" href="#">Sistemas embebidos</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Práctica técnica supervisada</a>
            <div class="contenido-colapsable">
                <p>Día y horario: Martes 10hs a 12hs</p>
                <p>Lugar: Aula 57, bloque 2</p>
                <div class="divisor"></div>
                <p>Día y horario: Jueves 9hs a 12hs</p>
                <p>Lugar: Aula 8, bloque 2</p>
                <div class="divisor"></div>
                <p>Primera clase: Martes 10/03</p>
            </div> 
        </li>
        <li class="divisor"></li>
        <li>
            <a class="link colapsable" href="#">Optativa II</a>
            <div class="contenido-colapsable">
                <p>Corresponderá a la materia optativa elegida</p>
            </div> 
        </li>
        `;

        let titulos = `
        <h3>Horarios de cursada de tercer año</h3>
        <p>Primer Cuatrimestre</p>
        `;

        let horarios = `
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Técnicas de radiofrecuencia</td>
                        <td>Martes, 10hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 10/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 12hs</td>
                        <td>Aula 8, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Electrónica analógica II</td>
                        <td>Lunes, 9hs a 10hs</td>
                        <td>Aula 8, bloque 2</td>
                        <td rowspan="3">Lunes 9/03</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 9hs a 12hs</td>
                        <td>Aula 53, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Viernes, 10hs a 12hs</td>
                        <td>Aula 58, bloque 2</td>
                    </tr>
                    <tr>
                    <td rowspan="2">Redes de datos</td>
                        <td>Martes, 10hs a 12hs</td>
                        <td>Aula 57, bloque 2</td>
                        <td rowspan="2">Martes 10/03</td>
                    </tr>
                    <tr>
                        <td>Jueves, 9hs a 12hs</td>
                        <td>Aula 8, bloque 2</td>
                    </tr>
                    <tr>
                        <td>Optativa I</td>
                        <td colspan="3">Corresponderá a la materia optativa elegida</td>
                    </tr>    
                </tbody>
            </table>
        </div>

        <p>Segundo Cuatrimestre</p>
        <div class="contenedor-tabla">
            <table class="tabla horarios">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Día y horario</th>
                        <th>Lugar</th>
                        <th>Primera clase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Sistemas embebidos</td>
                        <td>Lunes, 18hs a 22hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Martes 11/08</td>
                    </tr>
                    <tr>
                        <td>Jueves, 18hs a 20hs</td>
                        <td>Aula 57, bloque 2</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Práctica técnica supervisada</td>
                        <td>Lunes, 16hs a 19hs</td>
                        <td>Aula 53, bloque 2</td>
                        <td rowspan="2">Miércoles 08/08</td>
                    </tr>
                    <tr>
                        <td>Miércoles, 8hs a 10hs</td>
                        <td>Aula 43, bloque 2</td>
                    </tr>               
                    <tr>
                        <td>Optativa II</td>
                        <td colspan="3">Corresponderá a la materia optativa elegida</td>
                    </tr>               
                </tbody>
            </table>
        </div>
        `; 

        menuMaterias.innerHTML = menu;
        tituloHorarios.innerHTML = titulos;
        panelHorarios.innerHTML = horarios;

        menuMaterias.classList.add("mostrar");
    }

    let menuAnio = document.getElementById("menu-anio");
    let links = menuAnio.getElementsByClassName("link");

    for(let i = 0 ; i < links.length ; i++){
        if(links[i].classList.contains("activo")){
            links[i].classList.remove("activo")
        }
    }

    var colapsables = document.getElementsByClassName("colapsable");
    for (let i = 0; i < colapsables.length; i++) {
        colapsables[i].addEventListener("click", abrirColapsable);
    }

    let aviso = panelMaterias.getElementsByClassName('aviso');
    aviso[0].classList.add('cerrar');
        
}