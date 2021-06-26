

import {Switch, BrowserRouter as Router} from "react-router-dom"
import Routes from './Routes'
import SideBarContextProvider from "./context/sideBarContext";
import SideBarAdminContextProvider from "./context/sideBarAdminContext";
import AuthContextProvider from './context/AuthContext'

function App() {



  return (
    <Router>
      <SideBarAdminContextProvider>
      <SideBarContextProvider>
      <AuthContextProvider>
      <Switch>
        <Routes/>
      </Switch>
      </AuthContextProvider>
      </SideBarContextProvider>
      </SideBarAdminContextProvider>
    </Router>
  );
}

export default App;
