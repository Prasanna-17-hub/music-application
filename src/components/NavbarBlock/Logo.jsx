import React from 'react'
import MusicLogo from "../../assets/MusicLogo.png"

const Logo = () => {
  return (
    <aside className="basis-[15%]">
        {/* semantic tag */}
        <figure className='w-full h-full flex justify-center items-center'>
            <img src={MusicLogo} alt="Logo"className='w-[120px] h-[60px] cursor-pointer' />
        </figure>
    </aside>
  )
}

export default Logo