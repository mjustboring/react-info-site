import './App.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {useState, useEffect} from 'react'
import logo from '../images/bg-logo.svg'

function App() {

  return (
    <div className='app'>
      <img src={logo} />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
