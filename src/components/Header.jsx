import { useEffect, useState } from "react";

function Header({ search, setSearch, cartCount, onOpenCart }) {
  const [user, setUser] = useState(null);

  // carregar usuário do localStorage
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedUser);
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload(); // força atualização
  }

  return (
    <header className="px-6 pt-4 pb-4">
      <div className="max-w-md mx-auto">

        {/* Linha superior */}
        <div className="flex items-center justify-between">

          <div className="leading-tight">
            <div className="text-sm text-green-700">Ateliê da</div>
            <div className="text-xl font-semibold text-green-900">
              Cabocla 🌿
            </div>
          </div>

          <div className="flex items-center gap-2">

            {/* USUÁRIO */}
            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-xs text-green-800">
                  Olá, {user.nome}
                </span>

                <button
                  onClick={handleLogout}
                  className="text-xs bg-red-500 text-white px-2 py-1 rounded-lg"
                >
                  Sair
                </button>
              </div>
            ) : (
              <a
                href="/login"
                className="text-xs bg-emerald-600 text-white px-3 py-1 rounded-lg"
              >
                Entrar
              </a>
            )}

            {/* CARRINHO */}
            <button
              onClick={onOpenCart}
              className="relative rounded-2xl bg-white/80 backdrop-blur-md border border-green-100 shadow-sm px-3 py-2 text-green-900 hover:bg-white transition"
              type="button"
            >
              <span className="text-lg">🛒</span>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-emerald-600 text-white text-xs font-bold grid place-items-center shadow">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Barra de busca */}
        <div className="mt-4">
          <div className="flex items-center gap-2 rounded-2xl bg-white/80 backdrop-blur-md border border-green-100 shadow-sm px-4 py-3">

            <span className="text-green-700 text-lg">🔎</span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar guias, brajas..."
              className="w-full bg-transparent outline-none text-sm text-green-900 placeholder:text-green-600/70"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-green-700 text-sm"
                type="button"
              >
                ✕
              </button>
            )}
          </div>

          <p className="mt-2 text-xs text-green-700/80">
            Ex: guia de boiadeiro, brajá de pombogira…
          </p>
        </div>

      </div>
    </header>
  );
}

export default Header;