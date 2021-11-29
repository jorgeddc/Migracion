const migracion = document.querySelector(".migracion")
const numeroPuestos = document.querySelector(".puestos")
const iniciar = document.querySelector(".init")
const save = document.querySelector('.save')
const erase = document.querySelector('.erase')
let anyDesk = document.getElementById('Any')
let anyDeskP = document.getElementById('Anyp')
let checkboxS = document.querySelectorAll('.check-s')
let numdepuestos = localStorage.getItem('numerodedepuestos')
let i = 1;
let j = 0;
let item = 16;




function getLS_S()

{
    
    
    let datosAny = (localStorage.getItem('AnyDesk'))
    
    anyDesk.value = datosAny
    
    
    for (let i = 1; i < checkboxS.length + 1; i++) {
        let getLocalServidor = JSON.parse(localStorage.getItem(`checkeme${i}`))
        
        document.getElementById(`item${i}`).checked = getLocalServidor
    }
    
    let numeroDePuestos = localStorage.getItem('cantidad')
    migracion.innerHTML = numeroDePuestos
    
    
    
}

// FUNCION PARA MOSTRAR LO QUE TIENES GUARDADO EN LOCALSTORAGE
function getLS_P() {
    let puestoget = document.querySelectorAll(`.puesto`)
    let anyDeskpu = document.querySelector('.anyp')
    
    for (let h = 0; h < numdepuestos; h++) {
        
        for (let k = 1; k < item; k++) {
            
            let getPuesto = JSON.parse(localStorage.getItem(`puesto${h}${k}`))

            puestoget[h].querySelector(`.itemp${k}`).checked = getPuesto
            
            let anyDeskP = localStorage.getItem(`AnyDeskP${h}`)
            
            
            puestoget[h].querySelector('.anyp').value=anyDeskP
            
            
        }
        
    }
}

function getLS_datos()
{
    let fecha = document.querySelector(".date")
    const getFecha = localStorage.getItem("fecha")
    fecha.value=getFecha
    let telefono = document.querySelector(".telefono")
    const getTelefono = localStorage.getItem("telefono")
    telefono.value=getTelefono
    let nombre = document.querySelector(".nombre")
    const getNombre = localStorage.getItem("nombre")
    nombre.value = getNombre
    let ip = document.querySelector(".ip")
    const getIp=localStorage.getItem("ip")
    ip.value = getIp
    let text = document.querySelector(".textarea")
    const getText=localStorage.getItem("text")
    text.value = getText
}

getLS_S()
getLS_P()
getLS_datos()



erase.addEventListener('click', e => {
   let aceptar = document.querySelector('.aceptar')
   let cancelar = document.querySelector('.cancelar')

document.querySelector('.message').style.display='block'
        aceptar.addEventListener('click' , e => {
        document.querySelector('.message').style.display='none'
        localStorage.clear()
        location.reload();
              })
    cancelar.addEventListener('click' , e => {
        document.querySelector('.message').style.display='none'
    })
      
      
    
})

function LocalStPuestos() {
    
    localStorage.setItem('AnyDeskP', anyDeskP.value)
    
}

// save.addEventListener('click', e =>

function grabar() {
    
    
    // e.preventDefault()
    
    
    localStorage.setItem('AnyDesk', anyDesk.value)
    
    
    for (let i = 1; i < checkboxS.length + 1; i++) {
        
        let item = document.querySelector(`.item${i}`)
        localStorage.setItem(`checkeme${i}`, item.checked)
        
    }
    lsPuestos()
    lsDatosDeInteres()
}

 setInterval(grabar,1000)

function lsDatosDeInteres()

{
    let fecha = document.querySelector(".date")
    localStorage.setItem("fecha",fecha.value)
    let telefono = document.querySelector(".telefono")
    localStorage.setItem("telefono",telefono.value)
    let nombre = document.querySelector(".nombre")
    localStorage.setItem("nombre",nombre.value)
    let ip = document.querySelector(".ip")
    localStorage.setItem("ip",ip.value)
    let text = document.querySelector(".textarea")
    localStorage.setItem("text",text.value)
    



}

function lsPuestos() { // FUNCION QUE GUARDA EN LS SI SON CHECKEADOS O NO

    let puesto = document.querySelectorAll(`.puesto`)
    for (let j = 0; j < puesto.length; j++) { // RECORRE LOS PUESTOS

        for (let h = 1; h < item; h++) // RECORRE LOS ITEMS
        {   
            let itemp = puesto[j].querySelector(`.itemp${h}`)
            let anyDeskP = puesto[j].querySelector('.anyp')
            localStorage.setItem(`puesto${j}${h}`, itemp.checked)
            localStorage.setItem(`AnyDeskP${j}`, anyDeskP.value)
                //GUARDA DE TODOS LOS PUESTOS J TODOS LOS ITEMS H

         
        }


    }


    getLS_P(puesto)


}




iniciar.addEventListener("click", e => {

    e.preventDefault()

    if (numeroPuestos.value != 0) {
        let cont = numeroPuestos.value
        console.log("comencemos")
        iniciar.disabled=true
        localStorage.setItem('numerodedepuestos', cont)

        pintarPuestos(cont)
    } else if (numeroPuestos.value == "") {
        alert("a tu casa!!")
    }
})

const pintarPuestos = (cont) => {



    const datosMigracion = migracion.innerHTML += (`
        <div class="puesto${i} puesto">
        <p class="titulo"> Puesto ${i}</p>
        <div class="container-anydesk">
        <p class="texto">Introduce direccion Anydesk </p>
        <input type="text" name="" id="Anyp" class="anyp any-deskp${i}"></div>
        <br>
        <input type="checkbox" name="" id="itemp1" class="check-p itemp1">
        <label for="usuario-impresoras">Usuario impresoras</label><br>
        
        <input type="checkbox" name="" id="itemp2" class="check-p itemp2">
        <label for="usuario-impresoras">Gpedit</label><br>
        
        <input type="checkbox" name="" id="itemp3" class="check-p itemp3">
        <label for="usuario-impresoras">Adobe DC</label><br>
        
        <input type="checkbox" name="" id="itemp4" class="check-p itemp4">
        <label for="usuario-impresoras">Libre Office</label><br>
        
        <input type="checkbox" name="" id="itemp5" class="check-p itemp5">
        <label for="usuario-impresoras">Nod 32</label><br>
        
        <input type="checkbox" name="" id="itemp6" class="check-p itemp6">
        <label for="usuario-impresoras">Farmanager Client</label><br>
        
        <input type="checkbox" name="" id="itemp7" class="check-p itemp7">
        <label for="usuario-impresoras">PDF</label><br>
        
        <input type="checkbox" name="" id="itemp8" class="check-p itemp8">
        <label for="usuario-impresoras">Ereceta</label><br>
        
        <input type="checkbox" name="" id="itemp9" class="check-p itemp9">
        <label for="usuario-impresoras">Java</label><br>
        
        <input type="checkbox" name="" id="itemp10" class="check-p itemp10">
        <label for="usuario-impresoras">Api 10.5</label><br>
        
        <input type="checkbox" name="" id="itemp11" class="check-p itemp11">
        <label for="usuario-impresoras">Setup Online</label><br>

        <input type="checkbox" name="" id="itemp12" class="check-p itemp12">
        <label for="usuario-impresoras">Acceso directo Sifare.</label><br>
        
        <input type="checkbox" name="" id="itemp13" class="check-p itemp13">
        <label for="funcionamiento-RE" class='pregunta'>¿Has comprobado que funciona receta electronica?</label><br>
        
        <input type="checkbox" name="" id="itemp14" class="check-p itemp14">
        <label for="funcionamiento-sevem" class='pregunta'>¿Has comprobado que funciona SEVEM?</label><br>
        
        <input type="checkbox" name="" id="itemp15" class="check-p itemp15 ">
        <label for="funcionamiento-impresoras" class='pregunta'>¿Has comprobado que funcionan todas las impresoras?</label><br>
        
        <br><br><br><br>
        </div> `)







    localStorage.setItem('cantidad', datosMigracion)
    cuantosPuestos(cont)



}

const cuantosPuestos = (cont) => {

    if (i < cont) {

        i++

        pintarPuestos(cont)
    }
}