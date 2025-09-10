import Link from 'next/link'
import React from 'react'

const BlogLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
   const blogData=[
    {id:1,title:"Lern Next.js",slug:"next.js-course",from:'homepage'},
    {id:2,title:"typescript A to Z",slug:"typescript-a-to-z",from:'w3school'},
    {id:3,title:"tailwind css",slug:"tailwind-guide",from:'tailwind'},
 
  ]
  return (
    <div className='flex max-w-7xl mx-auto'>
        <div className='w-64'>
          <div className=''>
            Blog items
          </div>
          <div>
          <ul className='space-y-2 '>
           {
            blogData.map((blog)=>(
              <li key={blog.id}><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></li>
            ))
           }
         </ul>
          </div>
        </div>
        <div className='border p-6 h-screen w-full'>{children}</div>
    </div>
  )
}

export default BlogLayout