// Ter certeza que o formulário está sendo preenchido

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    const obraField = document.getElementById("obra");
    const tipoField = document.getElementById("tipo");
    const valorInputField = document.getElementById("valorInput");

    if (
      !obraField.value ||
      !tipoField.value ||
      !valorInputField.value
    ) {
      event.preventDefault(); // Impede o envio do formulário
      alert("Por favor, preencha todos os campos do formulário.");
    }
  });
});

//logica para confirmar o excluir serviço de obra
document.addEventListener("DOMContentLoaded", function() {
    var deleteButtons = document.querySelectorAll(".deleteBtn");

    deleteButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
        event.preventDefault();
        var confirmDelete = confirm("Você tem certeza que deseja excluir este serviço de obra?");
        
        if (confirmDelete) {
          // Se o usuário confirmar, continuar com a exclusão
          var form = event.target.parentElement;
          form.submit();
        } else {
          // Se o usuário cancelar, não fazer nada
          return false;
        }
      });
    });
  });

  //logica para que o preco do serviço de obra não seja string
  document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form");
    var valorInput = document.getElementById("valorInput");
  
    form.addEventListener("submit", function(event) {
      // Converte o valor do campo de preço para um número de ponto flutuante
      var valor = parseFloat(valorInput.value.replace(",", "."));
  
      // Atualiza o valor do campo de preço com o número de ponto flutuante
      valorInput.value = valor;
    });
  });

  
  //lógica para mostrar o card de detalhes
// Aguarde o carregamento completo do documento
document.addEventListener("DOMContentLoaded", function() {
  // Selecione todos os botões de detalhes
  var detalhesButtons = document.querySelectorAll(".detalhes-btn");

  // Adicione um ouvinte de evento de clique a cada botão de detalhes
  detalhesButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Obtenha o ID do servico associado ao botão clicado (usando o atributo de dados)
      var servicoId = button.getAttribute("data-servico-id");

      // Construa o ID do card de detalhes usando o ID do serviço
      var detalhesCardId = "detalhes-card-" + servicoId;

      // Encontre o card de detalhes com o ID correspondente
      var detalhesCard = document.getElementById(detalhesCardId);

      // Exiba o card de detalhes
      detalhesCard.style.display = "flex";

      // Selecione o botão de fechar dentro do card de detalhes
      var fecharDetalhesButton = detalhesCard.querySelector(".fechar-detalhes-btn");

      // Adicione um ouvinte de evento de clique ao botão de fechar
      fecharDetalhesButton.addEventListener("click", function() {
        // Oculte o card de detalhes ao clicar no botão de fechar
        detalhesCard.style.display = "none";
      });
    });
  });
});


//redirecionar para central do cliente
const centralButton = document.getElementById("centralButton");

// Adiciona um evento de clique ao botão
centralButton.addEventListener("click", function () {
  window.location.href = "/paginaAdm";
});