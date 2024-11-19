import React from 'react'
import proj1 from '../assets/project (1).png';
import proj2 from '../assets/project (2).png';
import proj3 from '../assets/project (3).png';

const Projects = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-3xl my-4'>MY <span className='theme-text'>WORK</span></h1>
      
      <div className="projects">
        
        <div className="paren grid md:grid-cols-2 ">
          <img src={proj1} alt="project1" className='m-3' />
          <div className="info p-5">
            <h2 className='text-3xl'>Emart: An Ecommerce Website</h2><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam quibusdam laborum quasi impedit animi totam rem numquam ratione repellendus.</p><br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, adipisci asperiores voluptas odio earum iusto!
            </p>
          </div>
        </div>

        <div className="parent grid md:grid-cols-2 ">
          <div className="info p-5">
            <h2 className='text-3xl'>Portfolio</h2><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam quibusdam laborum quasi impedit animi totam rem numquam ratione repellendus.</p><br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, adipisci asperiores voluptas odio earum iusto!
            </p>
          </div>
          <img src={proj3} alt="project1" className='m-3' />

        </div>
      </div>
    </div>
  )
}

export default Projects
