import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const userFound = users.find(
      user => user.email === email && user.senha === senha
    );
  
    if (!userFound) {
      alert("Email ou senha inválidos");
      return;
    }
  
    // 🔥 SALVA USUÁRIO LOGADO
    localStorage.setItem("user", JSON.stringify(userFound));
  
    alert("Login realizado!");
  
    window.location.href = "/"; // volta pra home
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-2xl shadow-md w-80 space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full border p-2 rounded"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />

        <button className="w-full bg-emerald-600 text-white py-2 rounded-xl">
          Entrar
        </button>

        <p className="text-sm text-center">
          Não tem conta?{" "}
          <span
            className="text-emerald-600 cursor-pointer"
            onClick={() => navigate("/cadastro")}
          >
            Cadastre-se
          </span>
        </p>
      </form>
    </div>
  );
}