import React from 'react'

const Twodiv = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      {/* left  */}
      <div className='bg-blue-gray-100 p-5'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam, odit quos, laboriosam provident possimus perspiciatis tenetur voluptate aliquid error alias! Officiis ut ad iure quisquam rerum dolorum recusandae aperiam?</p>
      </div>
      {/* right  */}
      <div className='bg-blue-gray-200 p-5'>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea maiores sed quibusdam voluptates provident vel consequuntur velit perspiciatis, tenetur impedit saepe numquam asperiores voluptatibus? Cumque et quae esse facilis necessitatibus.</p>
      </div>
    </div>
  )
}

export default Twodiv
