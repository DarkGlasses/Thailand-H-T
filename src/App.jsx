import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Tour from './pages/Tour';
import About from './pages/About';
import CardDetail from './pages/CardDetail';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Tour' element={<Tour/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/card_detail/:id' element={<CardDetail/>}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
