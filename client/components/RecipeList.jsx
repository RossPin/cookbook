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
          <div key={recipe.id} className='recipeTile'>
            <Link  to={`recipes/${recipe.id}`}>
              <h2>{recipe.title}</h2>
              <img src={`Images/${recipe.img}`} />
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default connect()(RecipeList)