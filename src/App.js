import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import ActionReminder from './Projects/ActionReminder/ActionReminder';
import LeagueOfInfo from './Projects/LeagueOfInfo/LeagueOfInfo';


function App() {
  // Dark: #282c34
  // Light purple: #84789c
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/actionreminder" element={<ActionReminder />} />
        <Route exact path="/leagueofinfo" element={<LeagueOfInfo />} />
      </Routes>
    </Router>

  );
}

export default App;
