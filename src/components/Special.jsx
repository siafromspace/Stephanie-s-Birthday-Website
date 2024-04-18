import React, { useState } from 'react'
import envelope from "../assets/envelope.svg"

export default function Special() {
  const [open, setOpen] = useState(false)
  return (
    <div className='special'>
        <p className='title'>Special message from sister and soulmate. Click the image below to open !!!</p>
        <img onClick={() => setOpen(true)} src={envelope} alt="envelope" />
        {open && <div className="message">
          <p onClick={()=> setOpen(false)} className='exit'>X</p>
          <p>happy happy birthday to one of the best things that has ever happened to me. in you i have a sister, a friend, a soulmate. you are the most wholesome, gorgeous individual with the sweetest soul and you leave an impact in everyone you come across. it has been a beautiful experience watching you grow these past few years and i’m glad i had the opportunity to share these experiences with you ! <br></br>
          i pray that in this new year you step into the beautiful vision God has for your life. in this year, you are more grounded in God’s love and you shine brighter than ever. God’s spirit is upon and in you, working in and through you to do his good works. whatever you put your hands to do prospers, and in all your endeavors you come out successful. this year, you grow deeper in intimacy with God and knowledge of God. this year, your spirit operates in unfathomable wisdom and it is evident in every area of your life. my prayer for you on this special day is that the God who has started a good work in you will carry it unto completion, holding and covering you with His all encompassing love. i pray that this year you’re more at peace than ever before, you’re continually joyful, and you receive favour wherever you go. the lord continually guides your steps and every area of your life is perfectly orchestrated by him.
          <br></br>
          i know without a doubt, that the sky is literally your starting point and there's so so much greatness in you that will shock the world. can't wait for it and i’m totally here for it.
          <br></br>
          love love love you so much ! have the best dayyy ❤️</p>
        </div>}
        <p className='credit'>Made with love: Big sister aka best friend aka soul mate aka second mommy</p>
    </div>
  )
}
