import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-g.png';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','G','e','e','t','h']
    const jobArray =['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r']

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])


    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span>    
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={10}
                />
                <br />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={18}
                />
                </h1>
                <h2>Java Development / Web development </h2>
                <Link to ="/contact" className='flat-button'>CONTACT ME</Link>


            </div>
        <Logo/>
        </div>
        <Loader type="pacman"/>
        </>
    );
    


}

export default Home