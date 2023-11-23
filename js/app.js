window.onload = function () {
  obtenerProductos();
};

function obtenerProductos() {
  fetch("/php/productos.php", {
    method: "POST",
  })
    .then((resp) => resp.json())
    .then((data_resp) => {
      // la data_resp nos llega en formato JSON
      cargarProductosLista(data_resp);
    });
}

function cargarProductosLista(datos) {
  let trtabla = document.getElementById("tbodyproductos");
  for (const dato of datos) {
    let tr = document.createElement("tr");
    string = `
        <td>${dato.descripcion}</td>
        <td>${dato.codigo}</td>
        <td>${dato.precio}€</td>
    `;
    tr.innerHTML = string;
    trtabla.appendChild(tr);
  }
}
