import React from 'react'

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex h-screen flex-col md:flex-row'>
        <div className='md:w-64'>Side bar</div>
        <div className='flex-grow p-6 border'>{children}</div>
    </div>
  )
}

export default DashboardLayout