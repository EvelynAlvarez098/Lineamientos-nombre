let Productos = [
    {
        "codigo":1,
        "descripcion":"Manzana",
        "precio":100
    },
    {
        "codigo":2,
        "descripcion":"Pera",
        "precio":100
    },
    {
        "codigo":3,
        "descripcion":"Chetos",
        "precio":100
    },
    {
        "codigo":5,
        "descripcion":"Zanahoria",
        "precio":100
    }

]

let articuloSelect = {}
var vcodigo = document.getElementById("vcodigo");
var vdescripcion = document.getElementById("vdescripcion");
var vprecio = document.getElementById("vprecio");
var boton = document.getElementById("btnAbrir");

genera_tabla();

let ventana;
boton.addEventListener("click", () => {
	ventana = window.open ("tienda.html","mywindow","menubar=0,resizable=1,width=350,height=250"); 

});

function borrar(id) {
    if (confirm("Estas seguro que quiere borrar?") == true) {
        for(let x=0;x<Productos.length;x++){
            if (Productos[x].codigo==id)
            {
                Productos.splice(x,1);
                console.log(Productos)
                genera_tabla()
              return;
            }
        }
    }
}

function seleccionar(producto) {
    console.log("Entra a seleccionar")
    articuloSelect.codigo = producto.codigo
    articuloSelect.descripcion = producto.descripcion
    articuloSelect.precio = producto.precio
    alert("Seleccionaste un articulo: " +articuloSelect.codigo+","+articuloSelect.descripcion+","+articuloSelect.precio)

    
    vcodigo.value = articuloSelect.codigo
    vdescripcion.value = articuloSelect.descripcion
    vprecio.value = articuloSelect.precio

}

function modificar(){
    if(Object.entries(articuloSelect).length === 0){
        alert("No has seleccionado ningun articulo");
        return false;
    }

    console.log("Vcodigo: "+ vcodigo.value+", articuloselect: "+articuloSelect.codigo);
    if(vcodigo.value == 0){
        alert("Debe ingresar un codigo de articulo distinto a cero")
        return false
    }
    let bandera = 0
    Productos.forEach((Element) => {
        console.log("Vcodigo: "+ vcodigo.value+", articuloselect: "+articuloSelect.codigo);
        if(vcodigo.value != articuloSelect.codigo && Element.codigo == vcodigo.value){
            bandera = 1;
        }
    })
    if(bandera == 1){
        alert("Ya existe un articulo con dicho codigo")
        return false
    }
    for(let x=0;x<Productos.length;x++){
        if (Productos[x].codigo==articuloSelect.codigo)
        {
            Productos[x].codigo = vcodigo.value;
            Productos[x].descripcion = vdescripcion.value;
            Productos[x].precio = vprecio.value;
            articuloSelect = {};
            console.log(Productos);
            genera_tabla();
          return;
        }
    }


}
function agregarArticulo() {
    if(vcodigo.value == 0){
        alert("Debe ingresar un codigo de articulo distinto a cero")
        return false
    }
    let bandera = 0
    Productos.forEach((Element) => {
        if(Element.codigo == vcodigo.value){
            bandera = 1;
        }
    })
    if(bandera == 1){
        alert("Ya existe un articulo con dicho codigo")
        return false
    }
    const newArt = {
        codigo: vcodigo.value,
        descripcion: vdescripcion.value,
        precio: vprecio.value
    }
    Productos.push(newArt)
    genera_tabla()
}
function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementById("tabla");
    body.innerHTML=""
    // Crea las celdas
    for (var i = 0; i < Productos.length; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
      hilera.innerHTML = "<td>"+Productos[i].codigo+"</td>"+
      "<td>"+Productos[i].descripcion+"</td>"+
      "<td>"+Productos[i].precio+"</td>"+
      "<td><button onclick='borrar("+Productos[i].codigo+")'>Borrar</button></td>"+
      "<td><button onclick='seleccionar("+JSON.stringify(Productos[i])+")'>Seleccionar</button></td>"

    //   var codigo = document.createElement("td");
    //   var codigoHijo = document.createTextNode(Productos[i].codigo);
    //   codigo.appendChild(codigoHijo);
    //   var descripcion = document.createElement("td");
    //   var descripcionoHijo = document.createTextNode(Productos[i].descripcion);
    //   descripcion.appendChild(descripcionoHijo);
    //   hilera.appendChild(codigo);
    //   hilera.appendChild(descripcion);
      body.appendChild(hilera);

      }
}
