import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { BiSolidAlbum } from "react-icons/bi";

const AlbumLandingSidebar = () => {
  return (
    <aside className='basis-[15%] bg-[#1E2939] h-min-[calc(100vh-70px)] '>
        <nav className='w-full px-5 py-3'>
            <ul className='w-full flex flex-col'>
                <li className='py-2 px-6 bg-rose-600 rounded flex items-center gap-3 mb-3'>
                    <span className='text-xl'><FiMenu/></span>
                    <span className='text-lg tracking-wider'>Explore</span>
                </li>
                <li>
                    <NavLink end className={(isActive)=>`${isActive?"bg-rose-800 hover:bg-rose-500":""} py-2 px-6 hover:bg-blue-600 cursor-pointer rounded flex items-center gap-3`} to={"/"}>
                        <BiSolidAlbum/>
                        <span>Popular Albums</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default AlbumLandingSidebar