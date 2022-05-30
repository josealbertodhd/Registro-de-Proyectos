var arrayProyectos = [];

function validar() {
  var codigo_proyecto = document.querySelector("#codigo_proyecto").value;
  var nombre_proyecto = document.querySelector("#nombre_proyecto").value;
  var descripcion_proyecto = document.querySelector(
    "#descripcion_proyecto"
  ).value;
  var fecha_inicio_proyecto = document.querySelector(
    "#fecha_inicio_proyecto"
  ).value;
  var tipo_proyecto = document.querySelector("#tipo_proyecto").value;

  if (
    codigo_proyecto == "" ||
    nombre_proyecto == "" ||
    descripcion_proyecto == "" ||
    fecha_inicio_proyecto == "" ||
    tipo_proyecto == ""
  ) {
    return true;
  } else {
    return false;
  }
}

function mostrar() {
  if (validar() == true) {
    alert("Digite valores en todos los campos");
  } else {
    let proyecto = {
      codigoProyecto: codigo_proyecto.value,
      nombreProyecto: nombre_proyecto.value,
      descripcionProyecto: descripcion_proyecto.value,
      fechaInicio: fecha_inicio_proyecto.value,
      tipoProyecto: tipo_proyecto.value,
    };

    arrayProyectos.push(proyecto);
    const div = document.querySelector("#tabla_body");
    div.innerHTML = "";

    for (let i = 0; i < arrayProyectos.length; i++) {
      let contenido = `
                             <tr id="${arrayProyectos[i].codigoProyecto}">
                               <td> ${arrayProyectos[i].codigoProyecto} </td>
                               <td> ${arrayProyectos[i].nombreProyecto}</td>
                               <td> ${arrayProyectos[i].descripcionProyecto} </td>
                               <td> ${arrayProyectos[i].fechaInicio} </td>
                               <td> ${arrayProyectos[i].tipoProyecto} </td>
                               <td><a href="#" onclick="eliminar(${arrayProyectos[i].codigoProyecto})"><i class="fas fa-trash"></i> </a> 
                               <a href="#" onclick="modificar(${arrayProyectos[i].codigoProyecto})">
                               <i class="fas fa-edit"></i></a></td>
                            </tr>
                               `;

      div.innerHTML = div.innerHTML + contenido;

      document.querySelector("#codigo_proyecto").value = "";
      document.querySelector("#nombre_proyecto").value = "";
      document.querySelector("#descripcion_proyecto").value = "";
      document.querySelector("#fecha_inicio_proyecto").value = "";
      document.querySelector("#tipo_proyecto").value = "";
    }
  }
}

function validarBusqueda() {
  var r_codigo = document.querySelector("#r_codigo").checked;
  var r_nombre = document.querySelector("#r_nombre").checked;
  var search_main = document.querySelector("#search_main").value;
  var seEncuentra = -1;

  if (r_codigo == true) {
    if (arrayProyectos.length == 0) {
      alert("No se han agregado proyectos");
    } else {
      const objeto = arrayProyectos.find((elemento) => {
        return elemento.codigoProyecto == search_main;
      });

      if (objeto == undefined) {
        alert("Este proyecto no se encuentra");
      } else {
        const div = document.querySelector("#tabla_body");
        div.innerHTML = "";
        let contenido = `
                                 <tr id="${objeto.codigoProyecto}">
                                   <td> ${objeto.codigoProyecto} </td>
                                   <td> ${objeto.nombreProyecto}</td>
                                   <td> ${objeto.descripcionProyecto} </td>
                                   <td> ${objeto.fechaInicio} </td>
                                   <td> ${objeto.tipoProyecto} </td>
                                   <td><a href="#" onclick="eliminar(${objeto.codigoProyecto})"><i class="fas fa-trash"></i></a> 
                                   <a href="#" onclick="modificar(${objeto.codigoProyecto})"><i class="fas fa-edit"></i></a></td>
                                </tr>
                                   `;

        div.innerHTML = div.innerHTML + contenido;
      }
    }
  } else {
    if (arrayProyectos.length == 0) {
      alert("No se han agregado proyectos");
    } else {
      const objeto = arrayProyectos.find((elemento) => {
        return elemento.nombreProyecto == search_main;
      });

      if (objeto == undefined) {
        alert("Este proyecto no se encuentra");
      } else {
        const div = document.querySelector("#tabla_body");
        div.innerHTML = "";
        let contenido = `
                                 <tr>
                                   <td> ${objeto.codigoProyecto} </td>
                                   <td> ${objeto.nombreProyecto}</td>
                                   <td> ${objeto.descripcionProyecto} </td>
                                   <td> ${objeto.fechaInicio} </td>
                                   <td> ${objeto.tipoProyecto} </td>
                                   <td><a href="#" onclick="eliminar(${objeto.codigoProyecto})"><i class="fas fa-trash"></i></i> </a> 
                                   <a href="#" onclick="modificar(${objeto.codigoProyecto})"><i class="fas fa-edit"></i></a></td>
                                </tr>
                                   `;

        div.innerHTML = div.innerHTML + contenido;
      }
    }
  }
}

function eliminar(valor) {

  let confirmar = confirm("Desea eliminar este proyecto?");
  if (confirmar == true) {

    const posicion = arrayProyectos.findIndex((elemento) => {
      return elemento.codigoProyecto == valor;
    });

    arrayProyectos.splice(posicion,1)
    
    const div = document.querySelector("#tabla_body");
    div.innerHTML = "";

    for (let i = 0; i < arrayProyectos.length; i++) {
      let contenido = `
                             <tr id="${arrayProyectos[i].codigoProyecto}">
                               <td> ${arrayProyectos[i].codigoProyecto} </td>
                               <td> ${arrayProyectos[i].nombreProyecto}</td>
                               <td> ${arrayProyectos[i].descripcionProyecto} </td>
                               <td> ${arrayProyectos[i].fechaInicio} </td>
                               <td> ${arrayProyectos[i].tipoProyecto} </td>
                               <td><a href="#" onclick="eliminar(${arrayProyectos[i].codigoProyecto})"><i class="fas fa-trash"></i> </a> 
                               <a href="#" onclick="modificar(${arrayProyectos[i].codigoProyecto})">
                               <i class="fas fa-edit"></i></a></td>
                            </tr>
                               `;

      div.innerHTML = div.innerHTML + contenido;
    }
    
  }
}

function modificar(valor){

  const posicion = arrayProyectos.findIndex((elemento) => {
    return elemento.codigoProyecto == valor;
  });

  let codigo = prompt("Digite Codigo de Proyecto", "Codigo");
  arrayProyectos[posicion].codigoProyecto = codigo;
  let nombre = prompt("Digite Nombre de Proyecto", "Nombre");
  arrayProyectos[posicion].nombreProyecto = nombre;
  let descripcion = prompt("Digite Descripcion de Proyecto", "Descripcion");
  arrayProyectos[posicion].descripcionProyecto = descripcion;
  let fecha = prompt("Digite Fecha de Inicio de Proyecto", "Fecha");
  arrayProyectos[posicion].fechaInicio = fecha;
  let tipo = prompt("Digite Tipo de Proyecto", "Tipo de Proyecto");
  arrayProyectos[posicion].tipoProyecto =  tipo;

  const div = document.querySelector("#tabla_body");
    div.innerHTML = "";

    for (let i = 0; i < arrayProyectos.length; i++) {
      let contenido = `
                             <tr id="${arrayProyectos[i].codigoProyecto}">
                               <td> ${arrayProyectos[i].codigoProyecto} </td>
                               <td> ${arrayProyectos[i].nombreProyecto}</td>
                               <td> ${arrayProyectos[i].descripcionProyecto} </td>
                               <td> ${arrayProyectos[i].fechaInicio} </td>
                               <td> ${arrayProyectos[i].tipoProyecto} </td>
                               <td><a href="#" onclick="eliminar(${arrayProyectos[i].codigoProyecto})"><i class="fas fa-trash"></i> </a> 
                               <a href="#" onclick="modificar(${arrayProyectos[i].codigoProyecto})">
                               <i class="fas fa-edit"></i></a></td>
                            </tr>
                               `;

      div.innerHTML = div.innerHTML + contenido;
    }
}