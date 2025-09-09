import React from 'react'

const Blog = ({params}:{params:Promise<{id:string}>}) => {
  const {id}=params;
  return (
    <div>Blog {id}</div>
  )
}

export default Blog