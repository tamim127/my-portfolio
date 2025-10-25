import React from "react";
import aboutImg from "../assets/img.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="pt-40 px-6 sm:px-10 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Image Section */}
      <div className="flex-1">
        <img
          src={aboutImg}
          alt="About Tamim"
          className="rounded-lg w-full max-w-md mx-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-2">ABOUT ME</p>
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
          Building Meaningful Digital Experiences
        </h1>
        <hr className="w-24 border-gray-400 mb-4" />
        <p className="text-gray-700 mb-4 text-justify">
          I'm a creative front-end developer passionate about building modern
          and responsive web experiences. My journey began with a love for
          design and evolved into a deep curiosity for how the web works —
          combining logic with creativity to bring ideas to life.
        </p>
        <p className="text-gray-700 mb-4 text-justify">
          When I'm not coding, I enjoy learning new technologies, improving my
          projects, and exploring better ways to make the web faster and more
          engaging. I believe in continuous learning, attention to detail, and
          the power of clean, meaningful design.
        </p>
        <h2 className="text-2xl font-semibold mb-4">What Drives Me</h2>

        {/* Skills/Education/Projects */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="border-2 border-black p-4 rounded-lg text-center hover:bg-gray-50 hover:shadow-md transition flex-1">
            <h3 className="font-semibold mb-2">
              <i className="fa-solid fa-code mr-2"></i>Languages
            </h3>
            <p>HTML, CSS, Tailwind, JavaScript, React, Firebase</p>
          </div>

          <div className="border-2 border-black p-4 rounded-lg text-center hover:bg-gray-50 hover:shadow-md transition flex-1">
            <h3 className="font-semibold mb-2">
              <i className="fa-solid fa-graduation-cap mr-2"></i>Education
            </h3>
            <p>Diploma in Computer Science & Technology</p>
          </div>

          <div className="border-2 border-black p-4 rounded-lg text-center hover:bg-gray-50 hover:shadow-md transition flex-1">
            <h3 className="font-semibold mb-2">
              <i className="fa-solid fa-folder-open mr-2"></i>Projects
            </h3>
            <p>Built more than 5 projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
