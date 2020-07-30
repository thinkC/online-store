import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Profile from './components/Profile';
import Cart from './components/Cart';
import Product from './components/Product';
import Default from './components/Default';
import Modal from './components/Modal';
import Auth from './Auth/Auth';
import Callback from './components/Callback';
//import { detailProduct } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history)
  }
  render() {
    return (
      <React.Fragment>
        <Navbar auth={this.auth} />
        <Switch>
          {/* <Route exact path="/" component={ProductList} /> */}
          <Route exact path="/" render={props => <ProductList auth={this.auth} {...props} />} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          {/* <Route path="/login" render={props => <Login auth={this.auth} {...props} />} /> */}

          <Route path="/callback" render={props => <Callback auth={this.auth} {...props} />} />

          <Route path="/profile" render={props => this.auth.isAuthenticated() ? <Profile auth={this.auth} {...props} /> : <Redirect to="/" />} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    )

  }
}

export default App;
