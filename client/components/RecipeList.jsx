import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import request from '../utils/api'

class RecipeList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: []
    }
  }

  componentDidMount(){
    request('get', 'recipes').then(res => {
      const recipes = res.body
      this.setState({recipes})
    })
  }

  render(){
    return (
      <div className='recipeList'>
        {this.state.recipes.map(recipe => (
          <Link key={recipe.id} to={`recipes/${recipe.id}`}>
          <div className='recipeTile'>
            <h2>{recipe.title}</h2>
            <img src={`Images/${recipe.img}`} />
          </div>
          </Link>
        ))}
      </div>
    )
  }
}

export default connect()(RecipeList)