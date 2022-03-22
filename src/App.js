import logo from '../src/image/favicon.gif'
import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

const App = () => {

  const headerRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: 'ease',
      delay: 1
    })

    gsap.from(selector, { duration: 1, fromVars })
    console.log(headerRef)
  }, [headerRef])

  return (
    <div className="App">
      <header ref={headerRef} className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad pariatur velit consequatur illum. Placeat accusantium qui deleniti sapiente sequi necessitatibus, voluptatem excepturi iste dicta, illo quam in corporis magni.
        </p>
      </header>
      <main className="App-main">
        <section className="App-section">
          <h2>Title</h2>
          <p>Subtitle</p>
        </section>
      </main>
    </div>
  )
}

export default App