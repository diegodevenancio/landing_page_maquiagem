// Selecionar elementos do DOM
const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

// Adicionar evento ao formulário
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const email = emailInput.value;

  if (validateEmail(email)) {
    // E-mail válido
    message.textContent = "Obrigado por se cadastrar! Confira seu e-mail para ofertas!";
    message.style.color = "green";
    message.classList.remove("hidden");
    emailInput.value = ""; // Limpar campo
  } else {
    // E-mail inválido
    message.textContent = "Por favor, insira um e-mail válido.";
    message.style.color = "red";
    message.classList.remove("hidden");
  }
});

// Função para validar e-mails
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


// Selecionar o formulário
const contactForm = document.getElementById("contactForm");

// Adicionar evento de envio
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  // Exibir mensagem de sucesso
  alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
  
  // Limpar os campos
  contactForm.reset();
});
