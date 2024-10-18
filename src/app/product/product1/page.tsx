import Link from 'next/link'
import React from 'react'

const Product = () => {
  return (
    <div className='items-center justify-center text-center'>
      <h1 className='text-center text-green-800 text-2xl'>Nested Product</h1>
      <br />
      <p className='items-center justify-center'>
      <Link href="/product" className="text-violet-900 text-2xl items-center justify-center">Go Product Page</Link>
      </p>
    </div>
  )
}

export default Product