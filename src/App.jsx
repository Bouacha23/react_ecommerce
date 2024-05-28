import Home from "./pages/Partes/Home"
import Contact from "./pages/Partes/Contact"
import Shop from "./pages/Partes/Shop"
import About from "./pages/Partes/About"
import Product from "./pages/Partes/Product"
import Footer from "./pages/component/Footer"
import Navbar from "./pages/component/Navbar"
import {DataProv} from "./context/usecontext"
import Bashket from "./pages/Partes/Bashket"

import {Routes ,Route}  from "react-router-dom"
import Notification from "./pages/component/Notification"
export default function App() {
  return (
  <>
    <DataProv>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Contact" element={<Contact/>} />
        <Route exact path="/Shop" element={<Shop/>} />
        <Route exact path="/Shop/:id" element={<Product/>} />
        <Route exact path="Basket" element ={<Bashket/>}/>
      </Routes>
      <Notification/>
      <Footer/>
    </DataProv>
    
  </>
  )
}