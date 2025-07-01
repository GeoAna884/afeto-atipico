function entrar() {
  document.querySelector('.inicio').style.display = 'none';
  document.querySelector('.menu').style.display = 'block';
}

function mostrarAba(aba) {
  const abas = document.querySelectorAll('.aba');
  abas.forEach(el => el.style.display = 'none');

  document.getElementById(aba).style.display = 'block';
}

// Função simples de chat local
function enviarMensagem() {
  const mensagem = document.getElementById('mensagem').value;
  if (mensagem.trim() === "") return;

  const chat = document.getElementById('chat');
  const novaMensagem = document.createElement('p');
  novaMensagem.textContent = "Você: " + mensagem;
  chat.appendChild(novaMensagem);

  document.getElementById('mensagem').value = "";
  chat.scrollTop = chat.scrollHeight;
}
