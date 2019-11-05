// This is a JavaScript file
$(document).on("click", "#register", function(){
  var parametros = {
    "cliente":$("#cliente").val(),
    "celular":$("#celular").val(),
    "cpf":$("#cpf").val()
  };

  $.ajax({
    type:"post", // Como vai enviar os dados
    url:"https://appestacionamento.000webhostapp.com/cadastro.php", // pra onde vai enviar
    data:parametros, // o que eu vou enviar
    // caso sucesso
    success: function(data){ 
      navigator.notification.alert(data);
      $("#cliente").val("")
      $("#celular").val("")
      $("#cpf").val("")
    },
    // caso erro
    error: function(data){
      navigator.notification.alert("Erro ao cadastrar!");
    }
  });
});
