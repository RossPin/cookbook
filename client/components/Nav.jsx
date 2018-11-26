import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/logout'

function Nav(props) {
  
  return (
    <div className="nav">
    {props.auth.isAuthenticated
      ? //display if logged in
      <div className="navbar-start">
        <h1>React App</h1>
        <div className="navbar-end">
          {/* <span>{props.auth.user.username} </span>
          <Link className='button' to="/">Home</Link>
          <button className='button' onClick={() => props.dispatch(logoutUser())}>Logout</button> */}
          <Link className='button' to="/recipes">Recipes</Link>
        </div>
      </div>
      : //display if not logged in
      <div className="navbar-start">
        <h1>React App</h1>
        <div className="navbar-end">
          {/* <Link className='button' to="/login">Login</Link>
          <Link className='button' to="/">Home</Link>
          <Link className='button' to="/register">Register</Link> */}
          <Link className='button' to="/recipes">Recipes</Link>
        </div>
      </div>     
    }
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Nav)