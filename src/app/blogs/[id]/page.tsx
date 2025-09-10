import { Metadata } from 'next'
import React from 'react'

type Props={
  params:Promise<{id:string}>,
  searchParams:Promise<{[key:string]:string|string[]|undefined}>
}

export async function generateMetadata(
  { params }: Props,
 
): Promise<Metadata> {
  const slug = (await params).id
  return {
    title:`blog post ${slug}`,
  }
}

const Blog = async({params,searchParams}:Props) => {
  const {id}= await params;
  const resolveSearchParams=await searchParams;
  console.log(Object.entries(resolveSearchParams))
  return (
    <div>
       <div>
        Blog {id}
       </div>
       <div>
         <ul>
           {
            Object.entries(resolveSearchParams).map(([key,value])=>(
               <li key={key}>{key} :{Array.isArray(value)?value.join(', '):value}</li>
            ))
           }
         </ul>
       </div>
    </div>
  )
}

export default Blog