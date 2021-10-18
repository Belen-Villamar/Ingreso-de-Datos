function Enviar(){
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("surname").value;
  var fecha = document.getElementById("fecha_de_nacimiento").value;
  var edad = document.getElementById("edad").value;
  var telefono = document.getElementById("mobile").value;
  var correo = document.getElementById("email").value;
  var entrar=false;
  
  if (nombre==""){
      alert("Ingresar nombre");
      entrar = true
      document.getElementById("name").focus();    
  }
  if (apellido ==""){
    alert("Ingresar Apellidos");
    entrar = true
    document.getElementById("surname").focus();

}
if (fecha==""){
  alert("La fecha es obligatorio");
  entrar = true
  document.getElementById("fecha_de_nacimiento").focus();    
}

if (edad==""){
  alert("Ingresar Edad");
  entrar = true
  document.getElementById("edad").focus();    
}

if (telefono.length <8){
  alert("Ingresar tu Número");
  entrar = true
  document.getElementById("telefono").focus();
}

if (correo==""){
  alert("El correo no es valida");
  entrar = true
  document.getElementById("email").focus();
}

if (!entrar){
  alert("Datos enviados");

}


}
























