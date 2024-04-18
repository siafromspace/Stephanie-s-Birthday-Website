import React from 'react'
import one from '../assets/images/one.jpg'
import two from '../assets/images/two.jpg'
import three from '../assets/images/three.jpg'
import four from '../assets/images/four.jpg'
import five from '../assets/images/five.jpg'
import six from '../assets/images/six.jpg'
import seven from '../assets/images/seven.png'
import eight from '../assets/images/eight.jpg'
import nine from '../assets/images/nine.jpg'
import ten from '../assets/images/ten.jpg'
import eleven from '../assets/images/eleven.jpg'
import twelve from '../assets/images/twelve.png'
import thirteen from '../assets/images/thirteen.jpg'
import fourteen from '../assets/images/fourteen.jpg'
import fifteen from '../assets/images/fifteen.jpg'

export default function Gallery() {
  return (
    <div className='gallery'>
        <h1>Stephanie's Photo Gallery</h1>
        <div className="photo-booth">
            <div className='booth-field'>
                <p>baby stephanie</p>
                <div className="photo">
                    <img src={one} alt="" />
                    <img src={two} alt="" />
                    <img src={three} alt="" />
                </div>
            </div>
            <div className='booth-field'>
                <p>pre-teen stephanie</p>
                <div className="photo">
                    <img src={four} alt="" />
                    <img src={five} alt="" />
                    <img src={six} alt="" />
                </div>
            </div>
            <div className='booth-field'>
                <p>teenage stephanie: real hot girl szn</p>
                <div className="photo">
                    <img src={seven} alt="" />
                    <img src={eight} alt="" />
                    <img src={nine} alt="" />
                </div>
            </div>
            <div className='booth-field'>
                <p>stephanie and the fam bam</p>
                <div className="photo">
                    <img src={thirteen} alt="" />
                    <img src={fourteen} alt="" />
                    <img src={fifteen} alt="" />
                </div>
            </div>
            <div className='booth-field'>
                <p>stephanie as a bolo</p>
                <div className="photo">
                    <img src={ten} alt="" />
                    <img src={eleven} alt="" />
                    <img src={twelve} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
