const app = document.getElementById("app")
const url = "https://picsum.photos/id"
const size = "/200/200"
const picture = parametro => {  //este parametro no es lo mismo que el de la linea 36
    const src = url + parametro + size;
    return `
        <figure>
            <img src="https://picsum.photos/id/${parametro}/200/200" alt="" id="${parametro}" class="">
            <figcaption>${parametro}</figcaption>
        </figure>
    `
}

//console.log(picture())

app.innerHTML = picture(1) + picture(2) + picture(3)

//const elemento1 = document.getElementById("1")
//const elemento2 = document.getElementById("2")
//const elemento3 = document.getElementById("3")
//elemento1.addEventListener("click", miFuncion)
//elemento2.addEventListener("click", miFuncion)
//elemento3.addEventListener("click", miFuncion)


const lista = document.querySelectorAll("img")
console.log(lista)
console.log(lista.length)

for (let i = 0; i < lista.length; i++) {
    lista[i].addEventListener("mouseenter", miFuncion)

    // lista[i].addEventListener("mouseenter", (evento) => {evento.target.classList.toggle("redonda")})
}


// target es el obj img
function miFuncion(parametro){ // este parametro se define aqui
    console.log("hayyy: ")
    console.log(parametro.target)
    var imagen = parametro.target
    imagen.classList.toggle("redonda") //toggle para agregar el parametro de la imagen
}