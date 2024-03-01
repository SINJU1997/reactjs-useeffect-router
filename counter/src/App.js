import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Header from './Header';
import Contact from './Contact';
import About from './About';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
