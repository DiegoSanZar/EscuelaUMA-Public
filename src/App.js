import react from 'react'
import {Switch, BrowserRouter as Router} from "react-router-dom"
import NavTop from './components/NavTop'
import Routes from './Routes'
import ListarAlumnos from './views/ListarAlumnos'

function App() {
  return (
    <Router>
      <Switch>
        <Routes/>
      </Switch>
    </Router>
  );
}

export default App;
