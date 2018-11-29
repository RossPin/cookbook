import React from 'react'

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

  }

  post(){

  }

  render(){
    return (
      <div>
        <form submit={this.post}>
          <label htmlFor="group">Group</label><br/>
          <select name="group" id="group">            
            {groupOptions.map((group, i) => <option value={group} selected={this.state.group === group}>{group}</option>)}
          </select>
        </form>
      </div>
    )
  }
}

export default ProductAdd