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
      group: '',
      cal: '',
      fat: '',
      sat_fat: '',
      protien: '',
      carb: '',
      sugar: '',
      avg_weight: '',
      density: '',
    }
  }

  update(e){
    e.preventDefault
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  post(e){
    e.preventDefault
    const state = this.state
    state.keys.forEach(key => {
      if (key !== 'name' && key !== 'group') state[key] = Number(state[key])
    })
    request('post', 'recipes/product', state).then(res => {
      console.log(res.body)      
    })
  }

  render(){
    return (
      <div>
        <form submit={this.post}>
          <label htmlFor="group">Group</label><br/>
          <select onchange={this.update} name="group" id="group">            
            {groupOptions.map((group, i) => <option value={group} selected={this.state.group === group}>{group}</option>)}
          </select><br/>
          <label htmlFor="name"></label><br/>
          <input type="text" name="name" id="name" onchange={this.update}/><br/>
          <label htmlFor="cal"></label><br/>
          <input type="text" name="cal" id="cal" onchange={this.update}/><br/>
          <label htmlFor="fat"></label><br/>
          <input type="text" name="fat" id="fat" onchange={this.update}/><br/>
          <label htmlFor="sat_fat"></label><br/>
          <input type="text" name="sat_fat" id="sat_fat" onchange={this.update}/><br/>
          <label htmlFor="protien"></label><br/>
          <input type="text" name="protien" id="protien" onchange={this.update}/><br/>
          <label htmlFor="carb"></label><br/>
          <input type="text" name="carb" id="carb" onchange={this.update}/><br/>
          <label htmlFor="sugar"></label><br/>
          <input type="text" name="sugar" id="sugar" onchange={this.update}/><br/>
          <label htmlFor="avg_weight"></label><br/>
          <input type="text" name="avg-weight" id="avg-weight" onchange={this.update}/><br/>
          <label htmlFor="density"></label><br/>
          <input type="text" name="density" id="density" onchange={this.update}/><br/>
          <input type="submit" value="Add Product"/>
        </form>
      </div>
    )
  }
}

export default ProductAdd