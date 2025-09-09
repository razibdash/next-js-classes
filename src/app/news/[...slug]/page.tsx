import { notFound } from 'next/navigation';
import React from 'react'

const NewsDetailsPage = async({params}:{params:Promise<{slug:string[]}>}) => {
    const {slug}=await params;
  if(slug?.length>3){
     notFound()
  }
  return (
      <div>
        <div>News Category: </div>
        <div>{ slug.length>0 &&
         slug.map((s,index)=>(
            <div key={index}>
                {s}
            </div>
         ))
        }</div>
      </div>
  )
}

export default NewsDetailsPage