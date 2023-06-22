

const itemCarrito=document.getElementById("contenedor-Carrito")

const formulario=document.getElementById("formulario")

const inputName=document.getElementById("inputName")

const direccion=document.getElementById("idDireccion")

let acarrito = JSON.parse(localStorage.getItem("acarrito")) || []

let pizzas = [
    {id:"1", tipo:"Mozarela",precio: 1300,ingredientes:"salsa de tomate, queso, aceitunas y jamon",Imagen:"./img/muzarela.jpg"},
    {id:"2", tipo:"Napolitana",precio: 1800,ingredientes:"salsa de tomate, tomates, ajo, queso y jamon",Imagen:"./img/napolitana.jpg"},
    {id:"3", tipo:"4quesos",precio: 2000,ingredientes:"salsa de tomate, queso azul, queso parmesano, mozarela y queso fontina",Imagen:"./img/4quesos.jpg"},
    {id:"4", tipo:"Anchoas",precio: 2100,ingredientes:"salsa de tomate,anchoas,aceitunas y jamon",Imagen:"./img/anchoas.jpg"},
    {id:"5", tipo:"Verduras",precio: 2230,ingredientes:"salsa de tomate, cebolla, morron, rucula y aceitunas",Imagen:"./img/verdura.jpg"},
    {id:"6", tipo:"Champigniones",precio: 2200,ingredientes:"salsa de tomate, champignones, aceitunas y jamon",Imagen:"./img/champigniones.jpg"},
    {id:"7", tipo:"Vegana",precio: 2150,ingredientes:"salas de tomate, morron, cebolla, aceitunas negras y queso vegan",Imagen:"./img/veg1.jpg"},
	{id:"8", tipo:"Vegana2",precio: 2250,ingredientes:"salsa de tomate, brocoli,rucula tofu, queso vegan y aceite de sesamo",Imagen:"./img/veg2.jpg"}

]
const mostrarProducto = (pizzas)=> {
	const contenedor = document.getElementById("contenedorPizza")
	contenedor.innerHTML="";

pizzas.forEach((pizza,) =>{
    const div = document.createElement(`div`)
   div.innerHTML = 
     `
	 <div class="container">
    <h5 class="tipotext1">${pizza.tipo}</h5>
    <img src="${pizza.Imagen}" class=img1" alt="card-img-top">
    <p class="ingrediente1">${pizza.ingredientes}</p>
    <p class="precio1"><small class="text-muted">$${pizza.precio}</small></p>
    <button id="${pizza.id}" type="button" class="botonagregar" data-bs-toggle="button" autocomplete="off">Agregar a Carrito</button>
	</div>
	`
    contenedor.appendChild(div);

    const botonPizza= document.getElementById(`${pizza.id}`)
    botonPizza.addEventListener(`click`, ()=>{
         agregarACarrito(pizza.id)

} )
 })
}

const agregarACarrito= (id)=>{
	const agregar= acarrito.findIndex((pizza)=>{
		return pizza.id === pizzas[id].id
	} );
	if (agregar === -1){
	const productoAgregado = pizzas[id]
	productoAgregado.cantidad = 1
	acarrito.push(productoAgregado),
	localStorage.setItem("contenedor-Carrito", JSON.stringify(acarrito))
	mostrarCarrito()
	console.log(acarrito)
	}else {
		acarrito[agregar].cantidad+=1
	

	}

   }

  const mostrarCarrito = ()=>{
	  itemCarrito.id ="contenedor-Carrito"
	  itemCarrito.innerHTML= ""
	 acarrito.forEach((pizza)=>{
	 const mostrarCarrito= document.createElement("ul")
	 mostrarCarrito.classList.add("cssproductos")

	 mostrarCarrito.innerHTML=
	 `
	 
	 <h5 class="tipotext2">${pizza.tipo}</h5>
	 <img src="${pizza.Imagen}" class="img2" alt="card-img-top">   
	<p class="ingrediente2">${pizza.ingredientes}</p>
	<p class="precio2"><small class="text-muted">$${pizza.precio * pizza.cantidad}</small></p>
	<p class="cantidad1"><small class="text-muted">Total-${pizza.cantidad}</small></p>
	 <button id="eliminar${pizza.id}" type="button" class="eliminarelemento" data-bs-toggle="button" autocomplete="off">Eliminar Producto</button>
	
	 `
 
	 itemCarrito.appendChild(mostrarCarrito)

	 const boton = document.getElementById(`eliminar${pizza.id}`);
	 boton.addEventListener("click", ()=>{
		eliminarPizza(pizza.id)
	 })

	 })
 }

 const eliminarPizza = (id) =>{
	    acarrito=acarrito.filter((pizza) =>pizza.id !==id) 
     localStorage.setItem("carrito", JSON.stringify(acarrito));
	    mostrarCarrito();
	 } 
 

	 
	 const actualizarTotal= (c)=> {
		     const finalizar = carrito.reduce((a,pizza) =>a + pizza.precio,0);
		    c.textContent=`Precio: $${finalizar}`
		 }

 
 formulario.addEventListener("submit", validacionformulario)
 
 function validacionformulario(e){
	 e.preventDefault()
 console.log(`Estos son tu datos: ${inputName.value}, Direccion a enviar${direccion.value}`)
 }
 
 
 mostrarProducto(pizzas)
mostrarCarrito()

 
 
 
 
















































//  const formulario=document.getElementById("formulario")

//  const inputName=document.getElementById("inputName")

// const direccion=document.getElementById("idDireccion")



// let carrito= JSON.parse(localStorage.getItem("carrito")) || [];

// const mostrarPizza = (pizzas) => {
//     const listado = document.getElementById("contenedorPizza");

//     listado.innerHTML="";
    
//     pizzas.forEach((pizza) =>{
//         const div =document.createElement("div");
//     div.innerHTML =
//     `
//     <img src="${pizza.Imagen}" class="img" />
//     <h5>${pizza.tipo}</h5>
//     <p class="">${pizza.ingredientes}</p>
//     <p class=""><small class="text-muted">$${pizza.precio}</small></p>
//     <button id ="agregar${pizza.id}" class="botonagregar"> Agregar Compra </button>
//     `;

//     listado.appendChild(div);
//     const boton = document.getElementById(`agregar-${pizza.id}`);
//     boton.addEventListener("click", ()=>{
//         agregarCarrito(pizza.id);
//     } );

//     } );

// }

// const agregarCarrito= (id)=> {
//    if (!carrito.some((pizza) => pizza.id === id)){
//     const pizza = pizzas.find((pizza) =>pizza.id === id )
//    carrito.push({...pizza, cantidad:1})
// }else {
//     const pizza= carrito.find((pizza) => pizza.id===id);
//     pizza.cantidad++
// }
  
//     localStorage.setItem("carrito", JSON.stringify(carrito));;}
//     // mostrarCarrito();}

// // //  const agregaracarrito= (id)=>{
// // //    const agregar= pizzas.find((pizza)=> pizza.id=== id);
// // //     acarrito.push(agregar),
// // //     mostraracarrito()
// // //     console.log(acarrito)
// // //   }

// //  const mostrarCarrito= () =>{
// //     const productosCarrito= document.getElementById("carrito");
// //     productosCarrito.innerHTML="";
// //      if (carrito.length > 0 ){

// //         const cardpizza = document.createElement("ul")
// //        cardpizza.classList.add("cardpizza");
// //        productosCarrito.appendChild(cardpizza);
       
// //          const total= document.createElement("p")
// //         actualizartotal(total);
// //         productosCarrito.appendChild(total);
        
// //        carrito.forEach((pizza)=> {
// //              const li= document.createElement("li")
// //            li.innerHTML=
// //             `
// //             <img src="${pizza.Imagen}" class="img" />
// //              <h5>${pizza.tipo}</h5>
// //            <p class="">${pizza.ingredientes}</p>
// //            <button id ="eliminar${pizza.id}" class="botonEliminar"> Eliminar Compra </button>

// //            `
// //             cardpizza.appendChild(li);

// //            const boton= document.getElementById(`eliminar${pizza.id}`);
// //           boton.addEventListener("click", ()=>{
// //                eliminarPizza(pizza.id);
// //             })

// //         })
        
// //     } 
// //     else{
// //          productosCarrito.innerHTML=` <h4 class="" > No Agregaste Productos </h4>`
// //     }

// //  };

// // const eliminarPizza = (id) =>{
// //     carrito=carrito.filter((pizza) =>pizza.id !==id) 
// //      localStorage.setItem("carrito", JSON.stringify(carrito));
// //     mostrarPizza();
// //  } 

// //  const actualizartotal= (c)=> {
// //      const finalizar = carrito.reduce((a,pizza) =>a + pizza.precio,0);
// //     c.textContent=`Precio: $${finalizar}`
// //  }

//  mostrarPizza(pizzas);
//  agregarCarrito();


// // formulario.addEventListener("submit", validacionformulario)

// // function validacionformulario(e){
// //     e.preventDefault()
// // console.log(`Estos son tu datos: ${inputName.value}, Direccion a enviar${direccion.value}`)
// // }


