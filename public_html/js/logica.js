function cargar(){
    $("#boton").on("click",myFuncion);
}
    $(cargar);
    //Cargo todo el documento, digo que se oculte el mensaje de error
    $(document).ready(function(){
        $("#alertSI").hide();
        $("#FormAjax").submit(function (e){
            e.preventDefault();
        })
    })
    //Significa que al boton con id 'boton', al darle click, que me haga una funcion
    function myFuncion(){
        var nombreUsuario = document.getElementById("nombreUsuario1").value;
        var contrasenaDigitada=document.getElementById("contrasena").value;
        $.ajax({
            url:'http://localhost:8080/api/v1/usuario/'+nombreUsuario,
            //Se define el verbo que se vaya a usar, en este caso es get para obtener datos desde el WebApi
            type:'GET',
            dataType:"json",
            //Esto es importante para que sirva con Google Chrome
            async:false,
            error:function(error){
                $("#alertSI").fadeTo(2000,500).slideUp(500,function(){
                    $("#alertSI").slideUp(5000);
                })
            },
        }).then(function(data) {

            if (data.contrasena == contrasenaDigitada) {
                //Llamar otra pagina
                document.location.href = 'menu.html',true;
            }else{
                $("#alertSI").fadeTo(2000,500).slideUp(500,function(){
                    $("#alertSI").slideUp(5000);
                })
            }

            }
        )
    }