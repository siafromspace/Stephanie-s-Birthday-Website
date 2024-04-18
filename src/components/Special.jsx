import React from 'react'
import envelope from "../assets/envelope.svg"

export default function Special() {
  return (
    <div className='special'>
        <p className='title'>Special message from sister and soulmate. Click the image below to open !!!</p>
        <img src={envelope} alt="envelope" />
        <p className="message"></p>
        <p className='credit'>Made with love: Big sister aka best friend aka soul mate aka second mommy</p>
    </div>
  )
}
