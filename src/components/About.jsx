import React from "react";
import aboutPic from "../assets/s_off.png";

const About = () => {
  const data = [
    { name: "Name", address: "Salman" },
    { name: "DOB", address: "10/12/1992" },
    { address: "Address", add: "Delhi-INDIA" },
  ];

  return (
    <div className="parent marker:w-full min-h-screen">
      <h1 className="text-5xl text-center uppercase m-2">
        About <span className="text-[var(--theme)]">Me</span>
      </h1>
      <p className="uppercase text-center">
        i design and code your imagination, and i love what i do
      </p>

      <div className="info grid md:grid-cols-2 p-3">
        <div className="left">
          <div class="relative h-64 w-64  mx-auto border-8 p-2 mt-20">
            <img
              class="absolute -top-7 -left-7 h-full w-full object-cover "
              src={aboutPic}
              alt=""
            />
          </div>
          <div className="p-10">
            <p>
              Hello! I'm a passionate web developer with a love for creating
              dynamic and responsive web applications.
            </p>
            <p>
              With a background in computer science and a keen interest in
              front-end technologies, I specialize in building user-friendly
              interfaces using React, JavaScript, and CSS.
            </p>
            <p>
              In my spare time, I enjoy exploring new technologies, contributing
              to open-source projects, and sharing my knowledge through
              blogging.
            </p>
          </div>
        </div>

        <div className="right p-3">
          <div className="grid md:grid-cols-2 [&>span]:gap-4">
            <div className="subLeft p-3">
              <table>
                <tbody className="[&>tr>td]:p-3">
                <tr>
                     <td>Name</td>
                     <td>Salman</td>
                    </tr>
                    <tr>
                     <td>Name</td>
                     <td>Salman</td>
                    </tr>
                    <tr>
                     <td>Name</td>
                     <td>Salman</td>
                    </tr>
                    <tr>
                     <td>Name</td>
                     <td>Salman</td>
                    </tr>
                </tbody>
              </table>
            </div>

            <div className="subRight p-3">
            <table>
                <tbody className="[&>tr>td]:p-3">
                  
                    <tr>
                     <td>Name</td>
                     <td>Salman</td>
                    </tr>
                    <tr>
                     <td>Name</td>
                     <td>Salman</td>
                    </tr>
                    <tr>
                     <td>Name</td>
                     <td>Salman</td>
                    </tr>
                    <tr>
                     <td>Name</td>
                     <td>Salman</td>
                    </tr>
                  
                </tbody>
              </table>

              <button className="theme-btn">DOWNLOAD MY CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
