import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-blue-500  font-poppins">
      <header className="fixed top-14 left-0 w-full px-12 py-5 flex justify-between items-center bg-transparent z-50">
        <div className="flex items-center text-5xl font-bold text-yellow-400">
          DSCE Research
        </div>
        <nav>
          <ul className="flex space-x-8 list-none">
            <li>
              <a
                href="#research"
                className="text-white text-2xl font-normal hover:text-yellow-400 hover:underline underline-offset-8 transition-colors duration-300"
              >
                Research
              </a>
            </li>
            <li>
              <a
                href="#faculty"
                className="text-white text-2xl font-normal hover:text-yellow-400 hover:underline underline-offset-8 transition-colors duration-300"
              >
                Faculty
              </a>
            </li>
            <li>
              <a
                href="#students"
                className="text-white text-2xl font-normal hover:text-yellow-400 hover:underline underline-offset-8 transition-colors duration-300"
              >
                Students
              </a>
            </li>
            <li>
              <a
                href="#researchCenters"
                className="text-white text-2xl font-normal hover:text-yellow-400 hover:underline underline-offset-8 transition-colors duration-300"
              >
                Research Centers
              </a>
            </li>
            <li>
              <a
                href="#join"
                className="text-white text-2xl font-normal hover:text-yellow-400 hover:underline underline-offset-8 transition-colors duration-300"
              >
                Join the Lab
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
