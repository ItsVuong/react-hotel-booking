// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import List from './list/List';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/list" element={<List/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
