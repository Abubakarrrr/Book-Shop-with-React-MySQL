import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
import './style.css'
import { Books, Update,Add } from "./pages";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
