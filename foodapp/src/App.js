
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Menu from './components/Menu';
import Order from './components/order';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Switch>
     < Route exact path="/" component={Home} />
     < Route exact path="/About" component={About} />
     < Route exact path="/Contact" component={Contact} />
     < Route exact path="/menu" component={Menu} />
     < Route exact path="/Order" component={Order} />
     

     </Switch>  
     <Footer/>


    </div>
  );
}

export default App ;
