import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import dj from '../Images/dj.jpg'

class DemunJones extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Demun Jones</h1>
        <p>
          <img className="img" src={dj} />
        </p>
      </div>
    )
  }
}

export default DemunJones
