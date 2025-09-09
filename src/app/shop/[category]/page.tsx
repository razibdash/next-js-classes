import React from 'react'

const CategoryPage = async({params}:{params:Promise<{category:string}>}) => {
  const {category}=await params;
  return (
    <div>
      <div>Category page for: {category}</div>
       
    </div>
  )
}

export default CategoryPage