import React from 'react'

class Nutrition extends React.Component {
  constructor(props){
    super(props)
    this.addProperty = this.addProperty.bind(this)   
  }

  addProperty(property){
    const sum = this.props.ingredients.reduce((acc, ingredient) => {
      let val = ingredient[property]*ingredient.qty/100
      if (ingredient.unit === 'ml') val *= ingredient.density
      else if (ingredient.unit === 'num') val *= ingredient.avg_weight
      return acc + val
    },0)
    return Math.round(sum*10)/10
  }

  render(){    
    return (
      <div className='nutrition'>        
        <h4>Nutrition per serving</h4>
        <ul>
          <li>Calories: {Math.round(this.addProperty('cal'))} cal</li>
          <li>Fat: {this.addProperty('fat')} g</li>
          <ul><li>Saturated Fat: {this.addProperty('sat_fat')} g</li></ul>
          <li>Protien: {this.addProperty('protien')} g</li>
          <li>Carbohydrate: {this.addProperty('carb')} g</li>
          <ul><li>Sugar: {this.addProperty('sugar')} g</li></ul>
        </ul>            
      </div>
    )
  }
}

export default Nutrition