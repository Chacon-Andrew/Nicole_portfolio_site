import React from 'react'
import pic from '../imgs/LI_In_Bug_1.png'
import pic_2 from '../imgs/Group_8.png'
import '../App.css'
import pic_3 from '../imgs/bottom.png'
import pic_4 from '../imgs/Group_5.png'
import pic_5 from '../imgs/Group_11.png'

const Contact = () => {
  return (
    <div style={{height: '50vh', width: '100%', backgroundColor: '#FFFFFF'}} id='contact'>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginLeft: '10rem'}}>
          <h1 className='mont' style={{color: '#FA7F82', fontSize: '50px'}}>Contact</h1>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '2rem', marginTop: '2rem'}}>
            <img src={pic} alt='linkedIn icon'/>
            <p className='mont' style={{marginLeft: '2rem'}}>www.linkedin.com/in/nicole-turkalj/</p>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '2rem', marginTop: '2rem'}}>
            <img src={pic_2} alt='email icon'/>
            <p className='mont' style={{marginLeft: '2rem'}}>nicoleturkalj@outlook.com</p>
          </div>
        </div>
        <div style={{height: '25vh', width: '100%'}}>
          <div style={{display: 'flex', flexDirection: 'row', marginLeft: '10rem', marginTop: '2rem'}}>
              <h1 className='mont' style={{color: '#FA7F82'}}>Download resume</h1>
              <img src={pic_4} alt='right arrow' style={{height: '40px', width: '40px', marginLeft: '2rem', marginTop: '1.3rem'}}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginRight: '15rem'}}>
            <img src={pic_5} alt='flower' style={{height: '375px'}}/>
          </div>
        </div>
        <div style={{height: '28vh', width: '100%', backgroundColor: '#FFFFFF', backgroundImage: `url(${pic_3})`, backgroundSize: '2000px', backgroundRepeat: 'no-repeat'}}>
          
        </div>
    </div>
  )
}

export default Contact