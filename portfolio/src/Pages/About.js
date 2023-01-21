import React from 'react'
import '../App.css'
import pic_1 from '../imgs/Group_19.png'
import pic_2 from '../imgs/undraw_environment_iaus_1.png'
import pic_3 from '../imgs/E_SDG_Poster_2019_without_UN_emblem_PRINT_1.png'

const About = () => {

  return (
    <div style={{height: '150vh', width: '100%', backgroundColor: '#FFFFFF'}} id='about'>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '15rem'}}>
                <h1 className='mont'>What I’m All About</h1>
                <h1 className='mont' style={{color: '#FA7F82'}}>Designing for the greater good<br/>in accordance with the United Nation’s<br/>Sustainable Development Goals</h1>
                <div style={{marginLeft: '13rem'}}>
                  <img src={pic_1} alt='pink arrow' style={{height: '100px', width: '100px'}}/>
                </div>
            </div>
            <div>
              <img src={pic_2} alt='holding soil'/>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <img src={pic_3} alt='sustainability poster'/>
        </div>
    </div>
  )
}

export default About