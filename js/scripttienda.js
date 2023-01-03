let Productos = [
    {
        "codigo":1,
        "descripcion":"manzana",
        "precio":100
    },
    {
        "codigo":2,
        "descripcion":"pera",
        "precio":100
    },
    {
        "codigo":3,
        "descripcion":"platano",
        "precio":100
    },
    {
        "codigo":5,
        "descripcion":"zanahoria",
        "precio":100
    }

]

genera_tabla()

function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementById("tabla");
    body.innerHTML=""
    // Crea las celdas
    for (var i = 0; i < Productos.length; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
      hilera.innerHTML = "<td><img src='img/producto.png' width='70'  height='50'></td>"+
      "<td>"+Productos[i].descripcion+"</td>"+
      "<td>"+Productos[i].precio+"</td>"

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
