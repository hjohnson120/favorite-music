import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import ohwonder from '../Images/ohwonder.jpg'

class OhWonder extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Oh Wonder</h1>
        <img className="img" src={ohwonder} />
        <p className="band-info">
          On March 30, 2017, the duo announced that they finished their second
          studio album which was to be titled Ultralife. The album's lead and
          title track "Ultralife", was released the day after. As with their
          previous album, the band has been steadily releasing new singles every
          two weeks. After "Ultralife" the band released the songs "Lifetimes",
          "My Friends", "Heavy", and "High On Humans" along with acoustic and
          piano versions of "Ultralife" and "High On Humans" recorded at Abbey
          Road Studios. The band embarked on an Ultralife World Tour in 2017
          that saw them play a long run of headline shows in 34 countries across
          Asia, Australia, Europe, North and South America. They also played
          three shows with Beck on his 2018 North America Tour.
        </p>
      </div>
    )
  }
}

export default OhWonder
