import "./App.css";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Topbar from './components/Topbar';
import About from "./components/About";
import Contact from "./components/Contact";
import NavTop from "./components/NavTop";
import HomeScreen from "./screens/HomeScreen";
import CartScreeen from "./components/CartScreeen";
import Login from "./components/Login";
import Register from "./components/Register";
import Orders from "./components/Orders";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <NavTop/>
      <Switch>
      <Route exact path="/about"> <About/></Route>
      <Route exact path="/contact"> <Contact/></Route>
      <Route exact path="/cart"><CartScreeen/> </Route>
      <Route exact path="/login"><Login/> </Route>
      <Route exact path="/orders"><Orders/> </Route>
      <Route exact path="/register"><Register/> </Route>
      <Route exact path="/"> <HomeScreen/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
