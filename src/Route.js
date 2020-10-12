import React from "react";
import {

  Switch,
  Route,
} from "react-router-dom";

// Components
import Home from './Components/Home'
import About from './Components/About'
import Product from './Components/Products'
import Cart from './Components/Cart'


export default function App() {
  return (
    
      <div>
        {/* <nav>
          
            <button>
              <Link to="/">Home</Link>
            </button>
            <button>
              <Link to="/about">About</Link>
            </button>
            <button>
              <Link to="/Product">Product</Link>
            </button>
          
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Product">
            <Product />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

          <Route  path="/">  
          <Cart />
          </Route>
        </Switch>

      </div>
    
  );
}