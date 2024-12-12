
import EmojiFeedback from '@/components/Feedback'
import { Testimonials } from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div className='absolute left-0 right-0 bottom-0 top-10 m-auto '>
      <Testimonials/>
      <EmojiFeedback />
    </div>
  )
}

export default page
