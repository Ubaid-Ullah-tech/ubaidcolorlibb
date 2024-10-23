import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 py-10 px-10'>
      {/* suport and project link  */}
      <div className='flex flex-col lg:flex-row  gap-20'>
        {/* support  */}
        <div>
            <h1>Support</h1>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Github</li>
            </ul>
        </div>
        {/* projects  */}
        <div>
            <h1>My_Projects_Links</h1>
            <ul>
                <li>Blogs</li>
                <li>BookStore</li>
                <li>textUtils</li>
                <li>TodoApp</li>
            </ul>
        </div>
        <hr />
      </div>

         {/* contact  */}
         <div>
         <h1 className="text-3xl font-semibold opacity-80">Contact Info</h1>
          <p className="text-xl font-medium">Address:</p>
          <p className="text-lg text-gray-300">District Buner, Village & Post Office Totalai</p>
          <p className="text-xl font-medium">Phone:</p>
          <p className="text-lg text-gray-300">(+92) 3493673578</p>
          <p className="text-xl font-medium">Email:</p>
          <p className="text-lg text-gray-300">ubaidullah.uoh@gmail.com</p>
          <hr />
         </div>
         
         {/* footer  */}
         <div>
            <p>ubaidcolorlibs</p>
         </div>
    </div>
  )
}

export default Footer
