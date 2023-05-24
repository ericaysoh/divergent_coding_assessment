import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AddShelf from './Components/AddShelf';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addshelf' element={<AddShelf />} />
    </Routes>
  );
}

export default App;
