import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Builder from "./pages/Builder";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Gallery/> } />
        <Route path='/builder' element={ <Builder/> } />
      </Routes>
    </BrowserRouter>
  )
}