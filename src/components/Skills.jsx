import React from "react";
import { DiJavascript, DiHtml5, DiCss3, DiReact, DiGithub, DiMongodb, DiGit, DiMysql, DiJqueryLogo, } from "react-icons/di";
import { FaInstagram } from "react-icons/fa";
import { SiBootstrap, SiTailwindcss } from "react-icons/si";


const Skills = () => {
  

  return (
    <div className="">
          <h1 className="text-3xl text-center uppercase p-4">Skills</h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 w-[90%] max-w-[1080px] mx-auto p-4">

        <div className="grid grid-cols-2 gap-2 [&>div]:flx-center ">
          <div className="w-full h-48 backdrop-blur-sm bg-white/10 rounded-xl "><DiHtml5 />HTML5 </div>
          <div className="w-full h-48 backdrop-blur-sm bg-white/10 rounded-xl"><DiCss3 />CSS3</div>
          <div className="w-full h-48 backdrop-blur-sm bg-white/10 rounded-xl"><DiMongodb/>MongoDB</div>
          <div className="w-full h-48 backdrop-blur-sm bg-white/10 rounded-xl"><DiMysql />SQL</div>
          <div className="w-full h-24 backdrop-blur-sm bg-white/10 rounded-xl col-span-2">
            <DiJqueryLogo />Jquery
          </div>
        </div>

        <div className="grid gap-4 [&>div]:flx-center">
          <div className="w-full h-96 backdrop-blur-sm bg-white/10 rounded-xl">
          
          <DiJavascript className="text-9xl"/>JavaScript</div>
          <div className="w-full h-24 backdrop-blur-sm bg-white/10 rounded-xl">
            <SiTailwindcss />Tailwind
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 [&>div]:flx-center">
          <div className="w-full h-48 backdrop-blur-sm bg-white/10 rounded-xl col-span-2"><DiReact />React</div>
          <div className="w-full h-48 backdrop-blur-sm bg-white/10 rounded-xl"><DiGithub />Github</div>
          <div className="w-full h-48 backdrop-blur-sm bg-white/10 rounded-xl"><DiGit />Git</div>
          <div className="w-full h-24 backdrop-blur-sm bg-white/10 rounded-xl col-span-2"><SiBootstrap />Bootstrap</div>
          
        </div>

        
      </div>
    </div>
  );
};

export default Skills;
