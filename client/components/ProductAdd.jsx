import React from 'react'
import request from '../utils/api'

const groupOptions = [
  'Meat and Eggs',
  'Dairy',
  'Fruit and Vegtables',
  'Oils and Sauces',
  'Herbs and Spices'
]

class ProductAdd extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      group: groupOptions[0],
      cal: '',
      fat: '',
      sat_fat: '',
      protien: '',
      carb: '',
      sugar: '',
      avg_weight: '',
      density: '',
    }
    this.update = this.update.bind(this)
    this.post = this.post.bind(this)
  }

  update(e){
    e.preventDefault()
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  post(e){
    e.preventDefault()
    const state = this.state
    Object.keys(state).forEach(key => {
      if (key !== 'name' && key !== 'group') state[key] = Number(state[key])
    })
    console.log(state)
    request('post', 'recipes/product', state).then(res => {
      console.log(res.body)      
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.post}>
          <label htmlFor="group">Group</label><br/>
          <select onChange={this.update} name="group" id="group">            
            {groupOptions.map((group, i) => <option key={i} value={group}>{group}</option>)}
          </select><br/>
          <label htmlFor="name">Product name</label><br/>
          <input type="text" name="name" id="name" onChange={this.update}/><br/>
          <label htmlFor="cal">Calories per 100g</label><br/>
          <input type="text" name="cal" id="cal" onChange={this.update}/><br/>
          <label htmlFor="fat">Fat per 100g</label><br/>
          <input type="text" name="fat" id="fat" onChange={this.update}/><br/>
          <label htmlFor="sat_fat">Saturated fat per 100g</label><br/>
          <input type="text" name="sat_fat" id="sat_fat" onChange={this.update}/><br/>
          <label htmlFor="protien">Protien per 100g</label><br/>
          <input type="text" name="protien" id="protien" onChange={this.update}/><br/>
          <label htmlFor="carb">Carbohydrates per 100g</label><br/>
          <input type="text" name="carb" id="carb" onChange={this.update}/><br/>
          <label htmlFor="sugar">Sugar per 100g</label><br/>
          <input type="text" name="sugar" id="sugar" onChange={this.update}/><br/>
          <label htmlFor="avg_weight">Average Weight if itemised</label><br/>
          <input type="text" name="avg-weight" id="avg-weight" onChange={this.update}/><br/>
          <label htmlFor="density">Density</label><br/>
          <input type="text" name="density" id="density" onChange={this.update}/><br/>
          <input type="submit" value="Add Product"/>
        </form>
      </div>
    )
  }
}

export default ProductAdd