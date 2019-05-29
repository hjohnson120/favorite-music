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
        <p>
          The Oven is Demun's most recent album which came out in late 2018. It
          features Upchurch who is also a well know country/rap artist.
        </p>
      </div>
    )
  }
}

export default DemunJones
