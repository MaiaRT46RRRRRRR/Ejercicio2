var datos =
  [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
    { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
    { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
    { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
    { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];

    var coment= document.getElementById("valor");
    valor.innerHTML = "";

    datos.forEach(function(elem){
      valor.innerHTML += "<div><ul><li>"+ "Nombre: "+ elem.nombre + "</li>"+
      "<li>"+ "Apellido: "+ elem.apellido + "</li>"+
      "<li>"+ "Rol: "+ elem.rol + "</li>"+
      "<li>"+ "Cumpleaños: "+ elem.cumpleanios + "</li></ul></div>" ;
    } );
