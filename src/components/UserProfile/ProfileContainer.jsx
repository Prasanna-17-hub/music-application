import React from 'react'
import ProfileSidebar from './ProfileSidebar'
import ProfileContent from './ProfileContent'

const ProfileContainer = () => {
  return (
    <section className='flex w-[100vw]'>
        <ProfileSidebar/>
        <ProfileContent/>
    </section>
  )
}

export default ProfileContainer