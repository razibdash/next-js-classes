import React from 'react'

const BlogLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='flex '>
        <div className='w-64'>Side bar</div>
        <div className='border p-6 h-screen w-full'>{children}</div>
    </div>
  )
}

export default BlogLayout