"use client"
import React, { useEffect } from 'react'

const ABC = () => {
    useEffect(()=>{
     throw new Error("error in abc")
    },[])
  return (
    <div>ABC</div>
  )
}

export default ABC