import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import "./index.css"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Favs from "./Pages/Favs"
import Detail from "./Pages/Detail"
import { useDentistStates } from "./Components/utils/global.context"

function App() {
  const { state } = useDentistStates()
  return (
    <div className={`App ${state.theme === 'dark' ? 'dark' : ''}`}>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<h1>Pagina no encontrada</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
