import React from 'react'
import AdminContent from './AdminContent'
import AdminSidebar from './AdminSidebar'

const AdminContainer = () => {
  return (
    <section className='w-[100vw] flex'>
      <AdminSidebar/>
      <AdminContent/>
    </section>
  )
}

export default AdminContainer