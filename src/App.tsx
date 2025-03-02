import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<div>Home Page</div>} />
        <Route path='/todo' element={<div>Todo Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
