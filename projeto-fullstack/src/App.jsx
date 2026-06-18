import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/index.jsx'
import CadastroPage from './pages/CadastroPage/index.jsx'
import ListaUsuariosPage from './pages/ListaUsuariosPage/index.jsx'

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/usuarios" element={<ListaUsuariosPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App