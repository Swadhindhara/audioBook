import React from 'react'

const Error = () => {
  return (
    <>
      <div className="main">
        <div className="container mx-auto">
          <div className="error flex items-center justify-center h-[90dvh]">
            <div className="box flex items-center gap-2">
              <h3 className='text-4xl font-bold'>404</h3>
              <div className="line h-10 w-0.5 bg-black"></div>
              <p>Page Not Found</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error