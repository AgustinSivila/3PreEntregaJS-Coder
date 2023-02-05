//TERCERA PRE ENTREGA

class Pelicula {
        constructor(personaje, precio, imagen, id, name){
    
    this.personaje = personaje,
    this.precio = precio
    this.imagen = imagen
    this.id = id
    this.name = name
        }
    
    mostrarInfoPeliculas() {
        console.log(`Tu personaje es ${this.personaje}, y su precio es ${this.precio}`)
    }
}



const pelicula1 = new Pelicula("Luke", 3000, "assets/luke.jpg", 1, "Figura de Luke Skywalker")

const pelicula2 = new Pelicula("Darth Vader", 5000, "assets/vader.jpg", 1, "Figura de Darth Vader")

const pelicula3 = new Pelicula("Yoda", 4500, "assets/yoda.jpg", 3, "Figura de Yoda")

const pelicula4 = new Pelicula("Obi Wan Kenobi", 3500, "assets/kenobi.jpg", 4, "Figura de Obi Wan Kenobi")

const pelicula5 = new Pelicula("Han Solo", 2600, "assets/han.jpg", 5, "Figura de Han Solo")

const pelicula6 = new Pelicula("Boba Fett", 6000, "assets/boba.jpg", 6, "Figura de Boba Fett")   


const coleccion = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6]
console.log(coleccion);


localStorage.setItem("coleccion", JSON.stringify(coleccion))


 // DOM

let figurasDiv = document.getElementById("figuras")
        function arrayforeach(coleccion) {
            coleccion.forEach((pelicula) => {
                let nuevasFigurasDiv = document.createElement("div")
                nuevasFigurasDiv.innerHTML = `<div class="card-group">
            <div class="card" ${pelicula.id}>
            <img src= "${pelicula.imagen}"  class="img-fluid rounded-start"  width="250px" alt="...">
            <div class="card-body">
            <h5 class="card-title">${pelicula.personaje}</h5>
            <p class="card-text">${pelicula.name}</p>
            <p class="card-text"><small class="text-muted">Precio: ${pelicula.precio}</small></p>
            <button id="carrito ${pelicula.id}" class="btn btn-outline-success">Agregar al carrito</button>
            </div>`
            
            
                figurasDiv.appendChild(nuevasFigurasDiv)

                let carrito = document.getElementById(`carrito ${pelicula.id}`)
                console.log(carrito);
                carrito.addEventListener("click", ()=>{
                    console.log(`Tu figura ${pelicula.personaje} ha sido agregada al carrito`);
                })
            
        
         })
        }
        arrayforeach(coleccion)

    
      
      
       



//DARK MODE

        let botonDarkMode = document.getElementById("botonDarkMode")
        let botonLightMode = document.getElementById("botonLightMode")
        

let modoOscuro = JSON.parse(localStorage.getItem("modoOscuro"))
console.log(modoOscuro)

if(modoOscuro == true){
    document.body.classList.add("darkMode")
}
else{
     document.body.classList.remove("darkMode")
 }

botonDarkMode.addEventListener("click", ()=>{
    console.log("Btn oscuro funciona")
    document.body.classList.add("darkMode")
    localStorage.setItem("modoOscuro", true)})

    botonLightMode.addEventListener("click", ()=>{
        console.log("Btn claro funciona")
        document.body.classList.remove("darkMode")
        localStorage.setItem("modoOscuro", false)
    
    })
    

    