class Pelicula {
    constructor(personaje, precio, imagen, id, name) {
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



const pelicula1 = new Pelicula("Darth Maul", 3000, "assets/maul.jpg", 1, "Figura de Darth Maul")

const pelicula2 = new Pelicula("General Grievous", 5000, "assets/grievous.jpg", 2, "Figura de General Grievous")

const pelicula3 = new Pelicula("Yoda", 4500, "assets/yoda.jpg", 3, "Figura de Yoda")

const pelicula4 = new Pelicula("Ahsoka Tano", 3500, "assets/ahsoka.jpg", 4, "Figura de Ahsoka Tano")

const pelicula5 = new Pelicula("Han Solo", 2600, "assets/han.jpg", 5, "Figura de Han Solo")

const pelicula6 = new Pelicula("Boba Fett", 6000, "assets/boba.jpg", 6, "Figura de Boba Fett")

const pelicula7 = new Pelicula("Luke Skywalker", 6000, "assets/luke.jpg", 7, "Figura de Luke Skywalker")


const coleccion = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6, pelicula7]
console.log(coleccion);


localStorage.setItem("coleccion", JSON.stringify(coleccion))


// DOM
let figurasEnCarrito = [];
let figurasDiv = document.getElementById("figuras")

function arrayforeach(coleccion) {
    figurasDiv.innerHTML=""
    coleccion.forEach((pelicula) => {
        nuevasFigurasDiv = document.createElement("div")
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
        carrito.addEventListener("click", () => {
            
                swal({
                    title: "Tu figura ha sido agregada al carrito!",
                    icon: "success",
                    buttons: true,
                    dangerMode: true,
                  })
            console.log(`Tu figura ${pelicula.personaje} ha sido agregada al carrito`);
            figurasEnCarrito.push(pelicula);
            actualizarCarrito();
            
        })


    })
}
arrayforeach(coleccion)

const finalizar = document.getElementById(`carrito`)
finalizar.addEventListener('click', () => { 
    swal({
        title: "Estas seguro que quieres finalizar la compra?",
         icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Tu compra ah sido finalizada!", {
            icon: "success",
          });
          actualizarCarrito();
        } else {swal("Te llevaremos a la pagina inicial!");
          
        }

})})

 

function actualizarCarrito() {
  // Calcular el precio total de las figuras en el carrito
  let precioTotal = figurasEnCarrito.reduce((total, figura) => total + figura.precio, 0);
  console.log(`Precio total de las figuras en el carrito: ${precioTotal}`);
  let precioTotalElemento = document.getElementById("precio-total");
  precioTotalElemento.textContent = `Precio total: $${precioTotal}`;
}

arrayforeach(coleccion);
 

//DARK MODE

let botonDarkMode = document.getElementById("botonDarkMode")
let botonLightMode = document.getElementById("botonLightMode")


let modoOscuro = JSON.parse(localStorage.getItem("modoOscuro"))
console.log(modoOscuro)

if (modoOscuro == true) {
    document.body.classList.add("darkMode")
}
else {
    document.body.classList.remove("darkMode")
}

botonDarkMode.addEventListener("click", () => {
    console.log("Btn oscuro funciona")
    document.body.classList.add("darkMode")
    localStorage.setItem("modoOscuro", true)
})

botonLightMode.addEventListener("click", () => {
    console.log("Btn claro funciona")
    document.body.classList.remove("darkMode")
    localStorage.setItem("modoOscuro", false)

})
// BUSQUEDA

function encontrar() {
    let search = document.getElementById("search").value.toLowerCase(); 
    let arrayfiltrado = coleccion.filter(elem => elem.personaje.toLowerCase().includes(search)); 
    arrayforeach(arrayfiltrado);
  }
  

   //API
   const loadDataButton = document.getElementById('load-data');
   const resultsContainer = document.getElementById('results');

 

   loadDataButton.addEventListener('click', () => { 

    swal({
        title: "En esta seccion estan las proximas figuras que tendremos en stock, quieres ver?",
        text: "Actualmente no contamos con las fotos de las proximas figuras",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Ahora te lo mostraremos!", {
            icon: "success",
          });
        } else {swal("Te llevaremos a la pagina inicial!");
          
        }

      });

     fetch('https://swapi.dev/api/people/')
       .then(response => response.json())
       .then(data => {
         let output = '';
         console.log(data);

         data.results.forEach(pelicula => {
           output += `<div class="card-group">
           <div class="card" ${pelicula.id}>
           <img src= "assets/starwars.jpg"  class="img-fluid rounded-start"  width="250px" alt="...">
           <div class="card-body">
           <h5 class="card-title">${pelicula.name}</h5>
           <p class="card-text">${pelicula.name}</p>
           <p class="card-text"><small class="text-muted">Precio: ${pelicula.precio}</small></p>
           <button id="carrito ${pelicula.id}" class="btn btn-outline-success">Agregar al carrito</button>
           </div>`;
         });

         resultsContainer.innerHTML = output;
       });
   });
   

