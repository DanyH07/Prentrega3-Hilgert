

const itemCarrito=document.getElementById("contenedor-Carrito")

const formulario=document.getElementById("formulario")



let acarrito = JSON.parse(localStorage.getItem("acarrito")) || []

let pizzas = [
    {id:"1", tipo:"Mozarela",precio: 1300,ingredientes:"salsa de tomate, queso, aceitunas y jamon",Imagen:"./img/muzarela.jpg"},
    {id:"2", tipo:"Napolitana",precio: 1800,ingredientes:"salsa de tomate, tomates, ajo, queso y jamon",Imagen:"./img/napolitana.jpg"},
    {id:"3", tipo:"4quesos",precio: 2000,ingredientes:"salsa de tomate, queso azul, queso parmesano, mozarela y queso fontina",Imagen:"./img/4quesos.jpg"},
    {id:"4", tipo:"Anchoas",precio: 2100,ingredientes:"salsa de tomate,anchoas,aceitunas y jamon",Imagen:"./img/anchoas.jpg"},
    {id:"5", tipo:"Verduras",precio: 2230,ingredientes:"salsa de tomate, cebolla, morron, rucula y aceitunas",Imagen:"./img/verdura.jpg"},
    {id:"6", tipo:"Champigniones",precio: 2200,ingredientes:"salsa de tomate, champignones, aceitunas y jamon",Imagen:"./img/champigniones.jpg"},
    {id:"7", tipo:"Vegana",precio: 2150,ingredientes:"salas de tomate, morron, cebolla, aceitunas negras y queso vegan",Imagen:"./img/veg1.jpg"},
	

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
    <img src="${pizza.Imagen}" class="img1">
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


const agregarACarrito= (id)=> {
	const pizza = pizzas.find((pizza)=>pizza.id===id)
	const productoEnCarrito= acarrito.find((pizza)=> pizza.id===id);
 if (productoEnCarrito){
	productoEnCarrito.cantidad++;
	localStorage.setItem("contenedor-Carrito", JSON.stringify(acarrito))
	mostrarCarrito()
 }else {pizza.cantidad=1
	acarrito.push(pizza)
	localStorage.setItem("contenedor-Carrito", JSON.stringify(acarrito))
mostrarCarrito()
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
 


 const inputName=document.getElementById("inputName")
 const direccion=document.getElementById("idDireccion")
const btn =document.getElementById("btn")

 formulario.addEventListener("submit", validacionformulario)
 
 function validacionformulario(e){
	 e.preventDefault()
	
 console.log(`Estos son tu datos: ${inputName.value}, Direccion a enviar${direccion.value}`)

 }

 btn.addEventListener("click", ()=> {
	Swal.fire({
		title: 'Do you want to save the changes?',
		showDenyButton: true,
		showCancelButton: true,
		confirmButtonText: 'Save',
		denyButtonText: `Don't save`,
	  }).then((result) => {
		/* Read more about isConfirmed, isDenied below */
		if (result.isConfirmed) {
		  Swal.fire('Saved!', '', 'success')
		} else if (result.isDenied) {
		  Swal.fire('Changes are not saved', '', 'info')
		}
	  })
	  })


 mostrarProducto(pizzas)
mostrarCarrito()

 
 
 
 



