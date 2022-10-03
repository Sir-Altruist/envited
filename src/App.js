import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing, Event, Create } from './pages';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/event' element={<Event />} />
        <Route exact path='/create' element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
