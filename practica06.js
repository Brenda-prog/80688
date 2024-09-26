console.log("entrando")

const validar = false
const usuario = false
const password = false
const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", e =>{
    e.preventDefault()
    console.log("se presiono el boton enviar")
    if(usuario && password){
        console.log("Enviando")
        formulario.submit()
    }
})

const x = document.getElementById("x") //es para el primer campo
x.addEventListener("focusout", () =>{
    if(x.value.length == 0){
        document.getElementById("Mensaje").innerHTML = "El campo esta vacio"
    }
    else{
        document.getElementById("Mensaje").innerHTML = ""
        usuario = true
    }

    //alert("Salí del campo")
})


//campo contrasena
const enviar = document.getElementById("xx") 

const y = document.getElementById("y")
y.addEventListener("keypress", e=>{
    console.log(e.key + " " + y.value.length) //se realiza la validacion desde el control
    if(y.value.length == 4){
        enviar.focus()
        password = true

    }
        
})



function limpiar(){
    x.value = ""
    y.value = "" //value es para el contenido y el innerHTML para los campos

}