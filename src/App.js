import './App.css';

import Login from './component/Login';
import { Route, Routes } from 'react-router-dom'; 
import Navbar from './component/Navbar';
import Home from './component/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"element={<Login/>}/>
        <Route path="/Home"element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
