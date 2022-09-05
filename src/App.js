import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import ActionReminder from './Projects/ActionReminder/ActionReminder';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/actionreminder" element={<ActionReminder />} />
      </Routes>
    </Router>

  );
}

export default App;
