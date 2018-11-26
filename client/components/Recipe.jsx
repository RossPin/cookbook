import React from 'react'
import { connect } from 'react-redux'
import request from '../utils/api'
import Nutrition from './Nutrition'

class Recipe extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      servings: 2,
      title: '',
      img: '',
      ingredients: [],
      steps: []
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id
    request('get', `recipes/${id}`).then(res => {
      const {title, img, ingredients, steps} = res.body
      this.setState({title, img, ingredients, steps})
    })
  }

  render(){
    const {servings, title, img, ingredients, steps} = this.state
    return (
      <div className='recipe'>        
            <h2>{title}</h2>
            {img && <img src={`Images/${img}`} />}
            <h4>{`${servings} serving${servings > 1 ? 's' : ''}`}</h4>
            <div>
              <h4>Ingredients</h4>
              <ul>
                {ingredients.map(ingredient => 
                  <li key={ingredient.product_id}>
                    {`${ingredient.qty*servings}${ingredient.unit === 'num' ? '' : ingredient.unit} - ${ingredient.name}${ingredient.unit === 'num' ? 's' : ''}`}
                  </li>
                  )}
              </ul>
            </div>
            <div>
              <h4>Directions</h4>              
                {steps.map(step => <p key={step.number}>{`${step.number}. ${step.text}`}</p>)}
            </div>            
            <Nutrition ingredients={ingredients}/>          
      </div>
    )
  }
}

export default connect()(Recipe)