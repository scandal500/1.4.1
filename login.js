$(document).ready(function(){
    
    //Captura click del botón
    var boton = $("#boton");
    boton.click(function(){
        //Guardar los datos del input en variables
        var email = $("#usuario").val();
        var password = $("#clave").val();
        
        //Comparar datos con los de administrador
        if(email == "usuario1" && password == "12345"){
            alert("Inicio de sesion exitoso!");

            location.href = 'index.html';
            
            return false;
        }
        else{
            alert("la contraseña o el usurio no coincide");
        }
    });
});