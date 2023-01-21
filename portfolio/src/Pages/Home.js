import React from 'react'
import '../App.css'
import Project from './Project'
import About from './About'
import Contact from './Contact'
import pic from '../imgs/Vector_12.png'

const Home = () => {
  return (
    <div>
      <div style={{height: '100vh', width: '100%', backgroundImage: `url(${pic})`, backgroundColor: '#FFFFFF', backgroundSize: '100% 93vh', backgroundRepeat: 'no-repeat'}} id='home'>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{marginTop: '10rem'}}>
            <h1 className='mont' style={{position: 'relative', top: '40%', left: '25%', fontSize: '50px', color: '#000000'}}>Nicole Buchanan</h1>
            <h1 className='mont' style={{position: 'relative', top: '40%', left: '25%', fontSize: '50px', color: '#FFFFFF'}}>Portfolio 2023</h1>
          </div>
          <div style={{marginTop: '20rem', marginRight: '10rem'}}>
            <p className='mont'>please do not share</p>
            <p className='mont'>this website without</p> 
            <p className='mont'>permission etc....</p>
          </div>
        </div>
      </div>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home