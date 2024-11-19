import React from 'react'

const Education = () => {
  return (
    <div className=''>
      <h1 className="text-center uppercase text-3xl p-3">Education</h1>
      <div className="container mx-auto grid md:grid-cols-2">
        <div className="left p-3">
          <h3 className='text-2xl pb-4 '>Experience</h3>
          <div className="info border-l-2 border-red-600 pl-5">
          <div className="exp">
            <p>2020 - 2023</p>
            <h4 className='relative before:before-elem'>Ecommerce</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas repellat porro enim nihil tempora!</p> <br/>
          </div>
          <div className="exp">
            <p>2020 - 2022</p>
            <h4 className='relative before:before-elem'>Sales</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas repellat porro enim nihil tempora!</p> <br/>
          </div>
          <div className="exp">
            <p>2012 - 2024</p>
            <h4 className='relative before:before-elem'>Tuter</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas repellat porro enim nihil tempora!</p> <br/>
          </div>
          </div>
        </div>
        <div className="right p-3">
          <h3 className='text-2xl pb-4'>Education</h3>
          <div className="info border-l-2 border-red-600 pl-5">
          <div className="edu">
            <p>2010 - 2016</p>
            <h4 className='relative before:before-elem'>BCA IGNOU</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas repellat porro enim nihil tempora!</p> <br/>
          </div>
          <div className="edu">
            <p>2008 - 2010</p>
            <h4 className='relative before:before-elem'>12th UP BOARD</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas repellat porro enim nihil tempora!</p> <br/>
          </div>
          <div className="edu">
            <p>2006 - 2008</p>
            <h4 className='relative before:before-elem'>10th UP BOARD</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas repellat porro enim nihil tempora!</p> <br/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education

