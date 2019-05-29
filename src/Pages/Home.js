import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Hey Here's My Favorite Music Kinda..</h1>
          <section className="list">
            <ul>
              <h1>Oh Wonder</h1>
              <p className="band-info">
                Oh Wonder are a London-based alt-pop duo, consisting of Anthony
                West and Josephine Vander Gucht. Since releasing their debut
                album, they have seen international success with their alt-pop
                singles.
              </p>
              <p>
                <Link to="/OhWonder">Oh Wonder</Link>
              </p>
              <h1>Kygo</h1>
              <p className="band-info">
                Tipped by Billboard Magazine as the ‘the next EDM superstar’,
                Kyrre Gørvell-Dahll, a.k.a KYGO, has gone from bedroom producer
                to one of the most hyped electronic artists on the planet in
                unprecedented time. Having established himself as a household
                name thanks to his widely popular remixes, sell out shows in
                North America and Europe as well as headline performances at
                festivals including TomorrowWorld and Findings, KYGO signed a
                worldwide recording deal with Sony Music Entertainment in
                September
              </p>
              <p>
                <Link to="/Kygo"> Kygo </Link>
              </p>
              <h1>Demun Jones</h1>
              <p className="band-info">
                DEMUN JONES has always had a way of keeping it real when it
                comes to the music he has written, recorded and performed
                throughout his career, but, that said, JONES COUNTY might well
                be the most genuine collection of songs that represents who the
                Georgia native is and certainly illustrates the place where he’s
                lived his entire life.
              </p>
              <p>
                <Link to="/DemunJones"> Demun Jones</Link>
              </p>
            </ul>
          </section>
        </div>
      </>
    )
  }
}

export default Home
