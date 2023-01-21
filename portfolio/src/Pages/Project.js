import React from 'react'
import pic from '../imgs/DSC_0751_1.png'
import '../App.css'
import {Link} from 'react-router-dom'
import pic_2 from '../imgs/middle.png'
import pic_3 from '../imgs/grayed_out_1_3.png'
import pic_4 from '../imgs/grayed_out_1_2.png'
import pic_5 from '../imgs/Group_1.png'
import pic_6 from '../imgs/colors_1_1.png'
import pic_7 from '../imgs/colors_1_2.png'
import pic_8 from '../imgs/colors_1_3.png'
import pic_9 from '../imgs/colors_1_4.png'
import pic_10 from '../imgs/colors_1_5.png'
import pic_11 from '../imgs/colors_1_6.png'
import pic_12 from '../imgs/colors_1_7.png'

const Project = () => {
  return (
    <div style={{height: '260vh', width: '100%', backgroundColor: '#FFFFFF', backgroundImage: `url(${pic_2})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}} id='project'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <h1 className='mont' style={{color: '#FFFFFF', fontSize: '50px'}}>Projects</h1>
        </div>
        <div style={{height: '100px'}}></div>
        <div style={{display: 'flex', gap: '10rem', flexDirection: 'column'}}>
          <div className='project_1'>
            <div style={{display: 'flex', gap: '10rem'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <h1 className='projecttext' style={{marginBottom: '-1.5rem'}}>FREO brand creation</h1>
              <p className='projecttext'>2022<br/>focus: sustainability,<br/>plastic-free packaging</p>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <img src={pic_3} alt='sustainability icon' style={{marginRight: '-2.25rem'}}/>
                <img src={pic_4} alt='sustainability icon'/>
              </div>
              <Link to='/FREO' className='link'>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <p className='mont'>see the brand</p>
                  <img src={pic_5} alt='right arrow' style={{height: '10px', width: '10px', marginLeft: '2rem', marginTop: '1.3rem'}}/>
                </div>
              </Link>
            </div>
              <Link to='/FREO'><img src={pic} alt='example' className='projectpics'/></Link>
            </div>
          </div>

          <div className='project_2'>
            <div style={{display: 'flex', gap: '10rem'}}>
              <Link to='/FREO'><img src={pic} alt='example' className='projectpics_2'/></Link>
              <div style={{display: 'flex', flexDirection: 'column'}}>
              <h1 className='projecttext' style={{marginBottom: '-1.5rem'}}>Ataxia Transition Walker</h1>
              <p className='projecttext'>2022<br/>focus: Walker to keep people from having to use a wheelchair for as<br/>long as possible, maintain mobility for as long as possible</p>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <img src={pic_6} alt='sustainability logo'/>
                <img src={pic_7} alt='sustainability logo'/>
              </div>
              <Link to='/FREO' className='link'>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <p className='mont'>about the project / the impact</p>
                  <img src={pic_5} alt='right arrow' style={{height: '10px', width: '10px', marginLeft: '2rem', marginTop: '1.3rem'}}/>
                </div>
              </Link>
            </div>
            </div>
          </div>

          <div className='project_1'>
            <div style={{display: 'flex', gap: '10rem'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <h1 className='projecttext' style={{marginBottom: '-1.5rem'}}>Pwani Teknowgalz smth smth</h1>
              <p className='projecttext'>2022<br/>focus: progressing an established<br/>nonprofit</p>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <img src={pic_8} alt='sustainability logo'/>
                <img src={pic_9} alt='sustainability logo'/>
                <img src={pic_10} alt='sustainability logo'/>
                <img src={pic_11} alt='sustainability logo'/>
                <img src={pic_12} alt='sustainability logo'/>
              </div>
              <Link to='/FREO' className='link'>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <p className='mont'>learn about our work</p>
                  <img src={pic_5} alt='right arrow' style={{height: '10px', width: '10px', marginLeft: '2rem', marginTop: '1.3rem'}}/>
                </div>
              </Link>
            </div>
              <img src={pic} alt='example' className='projectpics'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Project