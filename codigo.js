let productos = [{
    nombre: 'crepe italiano',
    precio: 7500,
    imagen: "https://cdn.shopify.com/s/files/1/0566/2677/4192/products/Crepeitaliano2_600x.jpg?v=1663778714",
    
},
{
    nombre: 'Crepe Colombiano',
    precio: 2000,
    imagen: "https://crepesywaffles.com/sites/default/files/2018-05/fromage_1920_1080.jpg",
    
},
{
    nombre: 'Crepe Español',
    precio: 3000,
    imagen: "https://images.deliveryhero.io/image/talabat/Menuitems/%D9%83%D8%B1%D9%8A%D8%A8_%D8%AC%D8%A8%D9%86%D9%87_%D8%B4%D9%8A%D8%AF%D8%B1_637605088037131055.jpg",
   
},
{
    nombre: 'Crepe de nutella',
    precio: 3600,
    imagen: "http://recetasdecocina.elmundo.es/wp-content/uploads/2015/09/Crepes-de-nutella.jpg",
   
},
{
    nombre: 'Crepe de frutas',
    precio: 1500,
    imagen: "https://www.recetasparavivirmejor.com/wp-content/uploads/2021/03/americaDigital_crepes_con_fruta_2021.jpg",
   
}
]



let tituloTienda = "Crepres rolos rolos"

var tiutloBienvenida = "Gracias por su compra... esperamos tenerlo de vuelta"

const nitTienda = "Domicilios 018000 7474"


let tituloh1 = document.getElementById("titulo")
tituloh1.innerText = tituloTienda

setTimeout(() => {
tituloh1.innerHTML = tiutloBienvenida + " <br> " + nitTienda
}, 5000);

let contenedorProductos = document.getElementById('grilla-productos')
// console.log(contenedorProductos)



for (const productoEmpanada of productos) {
console.log(productoEmpanada.nombre)
contenedorProductos.innerHTML += `
    <div class="col">
        <div class="card">
            <img src="${productoEmpanada.imagen}" class="card-img-top w-50 m-auto" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${productoEmpanada.nombre}</h5>
                <p class="card-text text-center">$ ${productoEmpanada.precio}</p>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="input-group mb-3 w-25">
                        <span class="input-group-text">-</span>
                        <input type="number" class="form-control" min="0">
                        <span class="input-group-text">+</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
}