import './App.css';
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import NotFoundModern from './Components/NotFoundModern/NotFound'
import Pages from './Components/Pages/1_Page';

import {Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
<Routes>
<Route path="/" element={<Home />} />

<Route path='/pages/*' element={<Pages />} />


<Route path="*" element={<NotFoundModern />} />
</Routes>
<Footer title="Basic Footer"/>
    </>
  )
}

export default App
