import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiAccountCircleFill } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";
import { MdAddPhotoAlternate } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const ProfileSidebar = () => {
    return (
        <aside className="basis-[17%] bg-gray-800 h-[calc(100vh-70px)] text-white">
            <nav className='w-full'>
                <ul className='w-full p-5 flex flex-col'>
                    <li >
                        <NavLink to={"/user/profile"}
                            className={({isActive}) => `${isActive ? "bg-[#2aa9c3] hover:bg-[#2396ad] " : ""}flex items-center gap-2  py-2 px-4 rounded-md cursor-pointer mb-4 font-semibold`} end>
                            <span className='text-xl'><RiAccountCircleFill /></span>
                            <span>My Account</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user/profile/add-profile"}
                            className={({isActive}) => `${isActive ? "bg-[#2aa9c3] hover:bg-[#2396ad] " : ""}flex items-center gap-2  py-2 px-4 rounded-md cursor-pointer mb-4 font-semibold`} end>
                            <span className='text-xl'><IoPersonAdd /></span>
                            <span>Add Account</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user/profile/upload-photo"}
                           className={({isActive}) => `${isActive ? "bg-[#2aa9c3] hover:bg-[#2396ad] " : ""}flex items-center gap-2  py-2 px-4 rounded-md cursor-pointer mb-4 font-semibold`} end>
                            <span className='text-xl'><MdAddPhotoAlternate /></span>
                            <span>Upload profile photo</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user/profile/change-password"}
                            className={({isActive}) => `${isActive ? "bg-[#2aa9c3] hover:bg-[#2396ad] " : ""}flex items-center gap-2  py-2 px-4 rounded-md cursor-pointer mb-4 font-semibold`} end>
                            <span className='text-xl'><RiLockPasswordFill /></span>
                            <span>Change Password</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user/profile/delete-account"}
                           className={({isActive}) => `${isActive ? "bg-[#2aa9c3] hover:bg-[#2396ad] " : ""}flex items-center gap-2  py-2 px-4 rounded-md cursor-pointer mb-4 font-semibold`} end>
                            <span className='text-xl'><MdDelete /></span>
                            <span>Delete Account</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default ProfileSidebar