import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Nav from './Nav'
import Login from './Auth/Login'
import Register from './Auth/Register'
import RecipeList from './RecipeList'
import Recipe from './Recipe'
import ProductAdd from './ProductAdd';

class App extends React.Component{
  render(){
    return (      
      <HashRouter>
        <div>
          <Nav/>
          <div className="container">                
              <Route path="/login" component={Login} />
              <Route path="/Register" component={Register} />
              <Route exact path="/recipes" component={RecipeList} />
              <Route path="/recipes/:id" component={Recipe} />
              <Route path="/new/product" component={ProductAdd} />
          </div>
        </div>
      </HashRouter>   
    )
  }
}

export default App