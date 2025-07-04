import './App.css'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {

  return (
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter basename="/spectral-complexity">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
