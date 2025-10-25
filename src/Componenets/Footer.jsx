import { Github, GithubIcon, Instagram, Linkedin, X } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer class="mt-20 bg-gray-900 text-white py-6 text-center">
      <p>&copy; 2025 Tamim Ahmed. All rights reserved.</p>
      <div class="flex justify-center gap-4 mt-4 text-xl">
        <a href="#" class="hover:text-indigo-400 transition">
          <Github/>
        </a>
        <a href="#" class="hover:text-indigo-400 transition">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#" class="hover:text-indigo-400 transition">
          <Instagram/>
        </a>
        <a href="#" class="hover:text-indigo-400 transition">
          <X/>
        </a>
        <a href="#" class="hover:text-indigo-400 transition">
          <Linkedin/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
