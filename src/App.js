import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render(){
  return (

    //react.fragment allows us to simulate html tags. i.e. no need to rewrite the tags over and over again.
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/Details" component={Details} />
        <Route path="/Cart" component={Cart}/>
        <Route component={Default}/>        
      </Switch>      
    </React.Fragment>
  );
}
}
export default App;
