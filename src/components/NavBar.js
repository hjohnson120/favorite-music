import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="nav-bar">
          <li>
            <Link to="/">Back Home</Link>
          </li>
          <li>
            <Link to="/OhWonder">Oh Wonder</Link>
          </li>
          <li>
            <Link to="/DemunJones">Demun Jones</Link>
          </li>
          <li>
            <Link to="/Kygo">Kygo</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar
