import Home  from './pages/Home'
import Report  from './pages/Report'
import Stock  from './pages/Stock'
import Sidebar from './components/Sidebar'
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
   <Router>
     <div className="App">
     <Sidebar />
     <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Home" component={Home}/>
      <Route path="/Stock" component={Stock}/>
      <Route path="/Report" component={Report}/>
      </Switch>
      </div>
   </Router>
  );
}

export default App;
