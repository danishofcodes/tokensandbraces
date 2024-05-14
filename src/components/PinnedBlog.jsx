import React from 'react'
import BlogCard from './BlogCard'

export default function PinnedBlog({blogs}) {
  return (
    <div>
        <h4 className='font-bold text-3xl mb-3'>Pinned Blogs And Videos</h4>
        <div className='flex gap-5 flex-wrap justify-between'>
        {blogs.map((item, index) => (
        <BlogCard key={index} title={item.title} desc={item.description} img={item.imgKey} link={item.bloglink}/> // Pass an index as a key for each iteration
    ))}
    </div>
    </div>
  )
}
