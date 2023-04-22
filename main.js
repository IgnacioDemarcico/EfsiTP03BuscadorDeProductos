var datos
const cargarProductos = async () => {
    const response = await fetch('https://dummyjson.com/products/')
    const data = await response.json()
    datos = data   
    // console.log(data.products)
    const container = document.getElementById("test1")
    for(producto of data.products) {
        container.innerHTML += `
        <div id="seccion-${producto.title}"class="card">
        <img src="${producto.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.title}</h5>
          <p class="card-text">${producto.description}</p>
        </div>
      </div>
        `
    }
}
cargarProductos()

const buscar = async () =>{
    const busqueda = document.getElementById("busco").value
    for(producto of datos.products) {
        if (!producto.title.toUpperCase().includes(busqueda.toUpperCase())){
            document.getElementById(`seccion-${producto.title}`).classList.add("d-none")
        }
    }
}
const dispararOp = () => {
    document.getElementById("audio").play()
    document.getElementById("killsound").play()
    document.getElementById("kill").classList.remove("d-none")
    setTimeout(() => document.getElementById("kill").classList.add("d-none"), 2.1 * 1000)
}