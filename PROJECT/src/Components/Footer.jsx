import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='bg-black text-white py-2 px-20'>
             <h1 className='font-bold'> Designed by <span className='text-blue-500'>Vignan</span></h1>
            <div>
                <p>
                   &copy; {new Date().getFullYear()} {  }
                   All rights reserved
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
