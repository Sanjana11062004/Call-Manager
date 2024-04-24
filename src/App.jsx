import { Route, Routes } from "react-router-dom"
import "./assets/style.css"
import Home from './components/Home'
import EditContact from "./components/EditContact"

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/edit" element={<EditContact/>}></Route>
      </Routes>
    </div>
  )
}

export default App
