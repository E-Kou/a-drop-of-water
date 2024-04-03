import './App.css';
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import NotFoundModern from './Components/NotFoundModern/NotFound'
import ChartsPage from './Components/Pages/chartsPage';
import Pages from './Components/Pages/1_Page';

import {Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
<Routes>
<Route path="/" element={<Home />} />

<Route element={<Pages />}>
<Route path='/pages' />
<Route path='/parts-of-study' />


<Route path='/pages/charts' element={<ChartsPage />}/>


</Route>

<Route path="*" element={<NotFoundModern />} />
</Routes>
<Footer title="Basic Footer"/>
    </>
  )
}

export default App
