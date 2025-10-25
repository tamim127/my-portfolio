import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(window.scrollY > 300);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      className={`fixed bottom-5 right-5 px-4 py-2 bg-indigo-500 text-white rounded-full transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default BackToTop;
