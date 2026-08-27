import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.tsx"
import Favorites from "./pages/Favorites.tsx";
import "./style/index.css"

function App() {
  return (
    <HashRouter>
      <div className="app">
      <header className="header">
        <h1> Go Ghibli </h1>
        <nav>
          <Link to="/"> Filmer </Link>
          <Link to="/Favoriter"> Favoriter </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Favoriter" element={<Favorites />}/>
      </Routes>
      </div>
    </HashRouter>
  )
}

export default App 