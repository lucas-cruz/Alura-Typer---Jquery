$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);
function fraseAleatoria(){
  $("#spinner").toggle();
  $.get("http://localhost:3000/frases", trocaFraseAleatoria)
  .fail(function(){
    $("#erro").toggle();
    setTimeout(function(){
      $("#erro").toggle();
    },2000);
  })
  .always(function(){
    $("#spinner").toggle();
  });
}

function trocaFraseAleatoria(data){
  var frase = $(".frase");
  var numeroAleatorio = Math.floor(Math.random() * data.length);
  frase.text(data[numeroAleatorio].texto);

  atualizaTamanhoFrase();
  atualizaTempoDigitacao(data[numeroAleatorio].tempo);
}

function buscaFrase(){
$("#spinner").toggle();

  var fraseId = $("#frase-id").val();
  var dados = { id: fraseId};

  $.get("http://localhost:3000/frases",dados,trocaFrase)
  .fail(function(){
    $("#erro").toggle();
    setTimeout(function(){
      $("#erro").toggle();
    },2000);
  })
  .always(function(){
    $("#spinner").toggle();
  });

  function trocaFrase(dados){

      $(".frase").text(dados.texto);
      atualizaTamanhoFrase();
      atualizaTempoDigitacao(dados.tempo);
  }

}
