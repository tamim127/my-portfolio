import React from "react";
import About from "../../Componenets/About";
import Projects from "../../Componenets/Projects";
import Services from "../../Componenets/Services";
import Contact from "../../Componenets/Contacts";
import profileImg from "../../assets//img2.jpg";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
    <div>
     <section id="home" class="mt-40 md:mt-40 px-5 md:px-20 flex flex-col md:flex-row gap-24 items-center">
    <div class="flex-1">
      <p class="inline-block rounded-full bg-gray-200/50 px-3 py-1 mb-8 text-black">
        <span class="font-bold text-green-600">.</span> Available for Remote work
      </p>
      <h1 class="text-5xl md:text-7xl font-['Raleway'] mb-5">Hi, I'm Tamim*</h1>
      <h3 class="text-2xl md:text-4xl font-['Playfair Display'] mb-5 info-home-typing"></h3>
      <div class="text-gray-800 mb-5 space-y-1">
        <p className="text-lg">I create beautiful, functional, and user-centered digital experiences.
        With 2+ years of experience in web development, I bring ideas to life
        through clean code and thoughtful design.</p>
      </div>
      <div class="flex gap-4 text-gray-700 mb-5">
        <p class="flex items-center gap-2"><i class="fa-solid fa-location-dot"></i> Based in BD</p>
        <p class="flex items-center gap-2"><i class="fa-solid fa-briefcase"></i> Available Now</p>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 mb-8">
        <button class="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-2">
          <i class="fa-solid fa-arrow-right"></i> Hire Me
        </button>
        <button class="border-2 border-black rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-black hover:text-white transition">
          <i class="fa-solid fa-download"></i> Download CV
        </button>
      </div>
      <hr className="w-11/12 mb-8" />
      <div className="flex items-center gap-4">
        <p className="font-semibold">Follow me:</p>
        <ul class="flex gap-6 text-xl">
          <li><a href="#"><FaGithub/> </a></li>
          <li><a href="#"><FaDiscord/></a></li>
          <li><a href="#"><FaLinkedin/></a></li>
          <li><a href="#"><FaInstagram/></a></li>
        </ul>
      </div>
    </div>
    <div class="flex-1">
      <img src={profileImg} alt="Tamim" class="rounded-lg w-full max-w-md"/>
    </div>
  </section>

      <About />
      <Projects />
      <Services />
      <Contact />
      </div>
      </>
  );
};

export default HomePage;
