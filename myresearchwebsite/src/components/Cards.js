import React from "react";

const proj = [
  {
    no: 1,
    user: "Research",
    description: "The Research Department of DSCE supports innovation through 20 dedicated research centers across various engineering disciplines. Faculty and students work on funded projects, driving advancements in science and technology.",
  },
  {
    no: 2,
    user: "Publications",
    description:
      "The Publications Department of DSCE showcases impactful research through journals, conferences, and patents. Faculty and students actively contribute to scholarly work, advancing knowledge across disciplines.",
  },
  {
    no: 3,
    user: "Department",
    description:
      "The Research Department of DSCE fosters innovation and interdisciplinary studies, supporting faculty and students in cutting-edge projects. It collaborates with industries and government agencies to drive impactful research.",
  },
];

function Cards() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex flex-col items-center justify-center p-6">
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {proj.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md shadow-lg pt-8 pb-12 p-6 rounded-2xl border border-white/20 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-4xl text-center font-semibold mb-10">{project.user}</h2>
            <p className="text-gray-200 text-lg">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
