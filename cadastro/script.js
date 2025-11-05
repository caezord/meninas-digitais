// Seleciona os elementos
const inputs = document.querySelectorAll(".user");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const nome = inputs[0].value.trim();
  const senha = inputs[1].value.trim();
  const repetirSenha = inputs[2].value.trim();

  // Validação simples
  if (!nome || !senha || !repetirSenha) {
    alert("Preencha todos os campos!");
    return;
  }

  if (senha !== repetirSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  // Cria o objeto usuário
  const usuario = { nome, senha };

  // Salva no localStorage
  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert("Conta criada com sucesso!");
  window.location.href = "/login/login.html"; // redireciona para o login
});
