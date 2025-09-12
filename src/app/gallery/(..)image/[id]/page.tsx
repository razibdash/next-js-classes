import Modal from '@/app/components/Modal'
import React from 'react'

const InterceptedImage = async({params}:{params:Promise<{id:string}>}) => {
    const {id}=await params
  return (
    <div>
         <Modal  id={id} />
    </div>
  )
}

export default InterceptedImage