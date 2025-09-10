import Link from 'next/link'
import React from 'react'

const Blogs = () => {
  const blogData=[
    {id:1,title:"Lern Next.js",slug:"next.js-course",from:'homepage'},
    {id:2,title:"typescript A to Z",slug:"typescript-a-to-z",from:'w3school'},
    {id:3,title:"tailwind css",slug:"tailwind-guide",from:'tailwind'},
 
  ]
  return (
    <div>
       <div><h1 className='text-2xl font-bold max-w-7xl mx-auto'>Blogs Dashboard:</h1></div>
       <div>
         
         
       </div>
    </div>
  )
}

export default Blogs