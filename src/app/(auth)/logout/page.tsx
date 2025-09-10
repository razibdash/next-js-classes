"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Logout = () => {
    const router=useRouter()
    const handleLogout=()=>{
        router.push('/')
    }
  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout