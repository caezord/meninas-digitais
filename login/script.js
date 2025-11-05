document.getElementById("entrar").addEventListener("click", () => {
    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const msg = document.getElementById("msg");
  
    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
  
    if (!usuarioSalvo) {
      msg.textContent = "Nenhuma conta encontrada! Crie uma conta primeiro.";
      msg.style.color = "#e63946";
      return;
    }
  
    if (nome === usuarioSalvo.nome && senha === usuarioSalvo.senha) {
      msg.style.color = "green";
      msg.textContent = "Login realizado com sucesso!";
      setTimeout(() => {
        window.location.href = "/inicio/home.html";  
      }, 1000);
    } else {
      msg.style.color = "#e63946";
      msg.textContent = "Nome de usuário ou senha incorretos!";
    }
  });
  