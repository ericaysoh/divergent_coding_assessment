import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddShelf from './AddShelf';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addshelf' element={<AddShelf />} />
    </Routes>
  );
}

export default App;
