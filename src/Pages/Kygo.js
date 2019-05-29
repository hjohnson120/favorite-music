import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import kygo from '../Images/kygo.jpg'

class Kygo extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Kygo</h1>
        <img src={kygo} />
        <p>
          In June 2018, Kygo announced a collaboration with American rock band
          Imagine Dragons titled "Born to Be Yours".[44] The single was released
          on 11 June.[45] On 21 September, Kygo debuted his upcoming single,
          "Happy Now", during his set at the iHeartRadio Music Festival held at
          the T-Mobile Arena. The single is a collaboration with Sandro Cavazza.
          On 24 October, Kygo posted a clip from the single's music video on his
          social media account. The single was released on 26 October.
        </p>
      </div>
    )
  }
}

export default Kygo
