import { Route, Routes } from "react-router-dom"
import "./assets/style.css"
import Home from './components/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
