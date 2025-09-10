import { Metadata } from 'next'
import React from 'react'

type Props={
  params:Promise<{id:string}>
}

export async function generateMetadata(
  { params }: Props,
 
): Promise<Metadata> {
  const slug = (await params).id
  return {
    title:`blog post ${slug}`,
  }
}

const Blog = async({params}:{params:Props}) => {
  const {id}= await params;
  return (
    <div>Blog {id}</div>
  )
}

export default Blog