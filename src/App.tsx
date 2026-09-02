import { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites.tsx";
import "./style/index.css";

function App() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  function toggleFavorite(id: string) {
    console.log("toggleFavorite called with id:", id);
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }

  return (
    <HashRouter>
      <div className="app">
        <header className="header">
          <h1>Go Ghibli</h1>
          <nav>
            <Link className="movie" to="/">Alla filmer</Link>
            <Link className="favorite-movie"to="/favoriter">Favoriter</Link>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={<Home favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/favoriter"
            element={<Favorites favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;