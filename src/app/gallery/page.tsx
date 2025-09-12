import Link from 'next/link'
import React from 'react'

const GalleryPage = () => {
  return (
    <div className='h-screen'>
        <h1 className='mb-4'>
            Gellary Page
        </h1>
        <Link className='border p-4 m-2' href={'gallery/photos'}>goto photos</Link>
        <Link className='border p-4 m-2' href={'image/123'}>goto image</Link>
    </div>
  )
}

export default GalleryPage