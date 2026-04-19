import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleCadastro() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const alreadyExists = users.find(u => u.email === email);
  
    if (alreadyExists) {
      alert("Usuário já existe");
      return;
    }
  
    const newUser = {
      nome,
      email,
      password
    };
  
    users.push(newUser);
  
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Cadastro realizado!");
  
    window.location.href = "/login";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form onSubmit={handleCadastro} className="bg-white p-6 rounded-2xl shadow-md w-80 space-y-4" >
        <h2 className="text-xl font-semibold text-center">Cadastro</h2>
        <input type="text" placeholder="Nome" className="w-full border p-2 rounded" value={nome} onChange={e => setNome(e.target.value)}/>
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" className="w-full border p-2 rounded" value={senha} onChange={e => setSenha(e.target.value)} />

        <button className="w-full bg-emerald-600 text-white py-2 rounded-xl">
          Cadastrar
        </button>

        <p className="text-sm text-center">
          Já tem conta?{" "} <span className="text-emerald-600 cursor-pointer" onClick={() => navigate("/login")}> Entrar </span>
        </p>
      </form>
    </div>
  );
}