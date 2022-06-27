import React from 'react'
import Link from 'next/link'
import { TagT } from '../lib'

const categories = [{name: 'About Us',slug:'about-us'},{name: 'Home',slug:'home'}]

function Categories() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg: p-8 pb-12 mb-8'>
      {categories.map((category)=>(
          <Link key={category.slug} href={`/category/${category.slug}`}>
              <TagT />
          </Link>
      ))}
    </div>
  )
}

export default Categories