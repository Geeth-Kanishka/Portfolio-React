import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c ', 't', 's']}
              idx={15}
            />
          </h1>
          <div className="projects-div">
            <p>
              <a
                href="https://github.com/Geeth-Kanishka/Student-Management-System_Spring-Boot"
                target="_blank"
              >
                Student-Management-System_Spring-Boot
              </a>
            </p>
            <br />
            <p align="LEFT">
              <a
                href="https://github.com/Geeth-Kanishka/Skin-Disease-Detection"
                target="_blank"
              >
                Skin-Disease-Detection
              </a>
            </p>
            <br />
            <p>
              <a
                href="https://github.com/Geeth-Kanishka/Portfolio-React"
                target="_blank"
              >
                Portfolio-React
                </a>
            </p>
            <br />
            <p>
              <a
                href="https://github.com/Geeth-Kanishka/Employee-Management-System_Spring-Boot"
                target="_blank"
              >
                Employee-Management-System_Spring-Boot
                </a>
            </p>
            <br />
            <p>
              <a
                href="https://github.com/Geeth-Kanishka/University-Management-System---ASP.NET"
                target="_blank"
              >
                University-Management-System
                </a>
            </p>
            <br />
            <p>
              <a
                href="https://github.com/Geeth-Kanishka/Sporting-Goods-Store-Web-Design"
                target="_blank"
              >
                Sporting-Goods-Store-Web-Design
                </a>
            </p>
            <br />
            <p>
              <a
                href="https://github.com/Geeth-Kanishka/Reverse-Ajax"
                target="_blank"
              >
                Reverse-Ajax
              </a>
            </p>
            
          </div>
        </div>
        <div></div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Project
