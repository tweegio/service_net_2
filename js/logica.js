function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var email = document.getElementById("telefono").value;
    var emailValido = /\S+@\S+\.\S+/;

    if (nombre === "") {
      alert("Por favor, ingrese su nombre.");
      return false;
    }

    if (!email.match(emailValido)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
    }

    alert("Formulario enviado con éxito");
    return true;
  }
  if (telefono ==="") {
      alert("Falta ingresar número");
      return false;
  }