import React from 'react'
type Props={
    children:React.ReactNode,
    invoice:React.ReactNode,
    revenue:React.ReactNode
}

const AdminLayout = ({children,invoice,revenue}:Props) => {
  return (
    <div>
        <div>
            <h1>Admin</h1>
        </div>
        <div className='flex'>
            <div className='w-56 p-4'>Side Bar</div>
            <div className='border-b p-4'>
                {invoice}
            </div>
            <div className='border-b p-4'>
                {revenue}
            </div>
        </div>

        <div>
            {/* {children} */}
        </div>
    </div>
  )
}

export default AdminLayout