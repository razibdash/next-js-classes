import React from 'react'

const ProductDetailsPage = async({params}:{params:Promise<{id:string,category:string}>}) => {
    const {id,category}=await params;
  return (
    <div>
        <div>Product Details </div>
        <div>Product Name: {category}</div>
        <h1>Product {id}</h1>
    </div>
  )
}

export default ProductDetailsPage