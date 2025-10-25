import React from "react";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: "Web Development",
      desc: "Responsive websites using React & Tailwind CSS",
    },
    {
      id: 2,
      title: "UI/UX Design",
      desc: "Clean & interactive user-friendly designs",
    },
    { id: 3, title: "Consultancy", desc: "Tech guidance and project planning" },
  ];

  return (
    <section id="services" class="pt-40 px-8 md:px-20 text-center">
      <p class="text-sm text-gray-500 mb-2">SERVICES</p>
      <h1 class="text-4xl font-semibold mb-6">What I Do</h1>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="p-6 border-2 rounded-lg hover:shadow-lg transition">
          <i class="fa-solid fa-code text-4xl text-indigo-700 mb-4"></i>
          <h3 class="font-semibold mb-2">Web Development</h3>
          <p class="text-gray-600">
            Building responsive, fast, and scalable websites using modern tech
            stack.
          </p>
        </div>
        <div class="p-6 border-2 rounded-lg hover:shadow-lg transition">
          <i class="fa-solid fa-paint-brush text-4xl text-indigo-700 mb-4"></i>
          <h3 class="font-semibold mb-2">UI/UX Design</h3>
          <p class="text-gray-600">
            Creating engaging interfaces that focus on user experience and
            design clarity.
          </p>
        </div>
        <div class="p-6 border-2 rounded-lg hover:shadow-lg transition">
          <i class="fa-solid fa-mobile-screen text-4xl text-indigo-700 mb-4"></i>
          <h3 class="font-semibold mb-2">Mobile Development</h3>
          <p class="text-gray-600">
            Developing mobile-first web apps and responsive interfaces for all
            devices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
