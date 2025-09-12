
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom" // Corrected line
import Footer from "./sections/FooterSection/FooterSection.jsx"
import Header from "./components/layout/Header.jsx"
import Hero from './sections/Hero/Hero.jsx'
import HireNow from './sections/HireNowSection/HireNow.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/footer" element={<Footer />} />
            <Route path='/header' element={<Header />} />
            <Route path='/hero' element={<Hero />} />
            <Route path='/hirenow' element={<HireNow />} />
        </Routes>
    </BrowserRouter>
)