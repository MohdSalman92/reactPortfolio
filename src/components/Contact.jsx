import React from 'react'
import { FaWhatsapp, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaMailBulk, FaBriefcase} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div>
      <h1 className='text-4xl text-center uppercase m-5'>get in <span className='text-[var(--theme)]'>touch</span></h1>
      <p className='text-md uppercase text-center'>i'm always open to discuss product design work or partnership</p>

      <div className="grid md:grid-cols-3">
        <div className='left flex flex-col justify-center gap-5 p-10 md:pl-[100px]'>
          <div>
          <p>Phone</p>
          <p><FaWhatsapp className='inline mr-2 theme-text' />99 580 98 225</p>
          </div>
          <div>
          <p>Email</p>
          <p><FaMailBulk className='inline mr-2 theme-text' />salmanansaari92@gmail.com</p>
          </div>
          <div>
          <p>Github</p>
          <p><FaGithub className='inline mr-2 theme-text' />Salman.1992</p>
          </div><div>
          <p>LinkedIn</p>
          <p><FaLinkedin className='inline mr-2 theme-text' />salman92</p>
          </div><div>
          <p>Business</p>
          <p><FaBriefcase className='inline mr-2 theme-text' />www.codiWeb.com</p>
          </div><div>
          <p>Social Profiles</p>
          <p className='text-3xl'><FaFacebook className='inline mr-2 theme-text cursor-pointer hover:scale-125' />
          <FaInstagram className='inline mr-2 theme-text cursor-pointer hover:scale-125' />
          <FaXTwitter className='inline mr-2 theme-text cursor-pointer hover:scale-125' />
          </p>
          </div>
        </div>

        <div className='p-5 col-span-2'>
          <p className='px-5'>If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly</p>
        <form className='flex flex-col gap-4 p-5'>
          <input type="text" placeholder='Your Name' className='p-3 bg-slate-200 text-slate-700 outline-none border-none rounded-xl' />
          <input type="email" placeholder='Your Email' className='p-3 bg-slate-200 text-slate-700 outline-none border-none rounded-xl' />
          <textarea name="message" id="message" placeholder='Your Message' className='p-3 bg-slate-200 text-slate-700 outline-none border-none rounded-xl' rows={5}></textarea>
          <button className='bg-[var(--theme)] p-3 rounded-xl w-[300px]'>Send Message</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
