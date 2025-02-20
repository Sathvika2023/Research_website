import Header from "../components/Header";

export default function FundedProjects2 () {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
        <Header />
        <div className="relative top-10 pb-10">
        <header className=" top-10 bg-blue-600 text-white text-center py-6 text-3xl font-semibold shadow-md">
          Various Funded Projects
        </header>
  
        <p className="text-center text-lg text-gray-700 my-6 mx-auto max-w-4xl leading-relaxed font-medium animate-fadeIn">
          DSCE has 20 Research Centers in different branches of Engineering catering to research scholars for obtaining PhD under VTU.
          The faculties and students are involved in various research projects sponsored by various Government agencies as well as private organizations.
        </p>
        </div>
  
        <div className="overflow-x-auto mx-auto px-4">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden animate-fadeIn">
            <thead>
              <tr className="bg-blue-600 text-white uppercase">
                <th className="p-4 text-left">Sl No.</th>
                <th className="p-4 text-left">Programme</th>
                <th className="p-4 text-left">Project Title</th>
                <th className="p-4 text-left">Funding Agency</th>
                <th className="p-4 text-left">Coordinator / PI / Co-PI</th>
                <th className="p-4 text-left">Total Grant</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-blue-100 transition`}> 
                  <td className="p-4">{project.sl}</td>
                  <td className="p-4">{project.programme}</td>
                  <td className="p-4 min-w-[250px] max-w-[400px]">{project.title}</td>
                  <td className="p-4">{project.agency}</td>
                  <td className="p-4">{project.coordinator}</td>
                  <td className="p-4">{project.grant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  const projects = [
    { sl: 1, programme: "Biotechnology", title: "Synergistic drug interactions for combating antibiotic resistance using AI and molecular dynamics.", agency: "DST-SERB", coordinator: "Dr. Blessy Baby Mathew", grant: "15000 USD" },
    { sl: 2, programme: "Biotechnology", title: "Development of a low-cost stack for microbial fuel cell applications in wastewater treatment.", agency: "KSCST- FPP", coordinator: "Dr. Blessy Baby Mathew, Ms. Bhanu Revathi K.", grant: "90,000" },
    { sl: 3, programme: "Biotechnology", title: "Novel design and development of biosensors for early detection of cancer biomarkers.", agency: "VGST-RGF", coordinator: "Dr. Blessy Baby Mathew, Dr. K.S. Anantharaju", grant: "3,00,000" },
    { sl: 4, programme: "Biotechnology", title: "Biotechnology Skill Enhancement Program for industry-ready professionals.", agency: "Government of Karnataka", coordinator: "Dr. S. Kiran", grant: "50 lakhs" },
    { sl: 5, programme: "Chemical Engg", title: "Anaerobic fermentation studies for bioethanol production from agricultural waste.", agency: "VGST", coordinator: "Prof. Priya S", grant: "05 Lakhs" },
    { sl: 6, programme: "Chemistry", title: "Development of Waste Paper Recycling Methods to produce sustainable biofuels.", agency: "VGST, Govt. of Karnataka", coordinator: "Dr. K.S. Anantha Raju", grant: "60 Lakhs" },
    { sl: 7, programme: "Civil", title: "Synthesis of Kudremukh Iron Ore Tailings as a replacement for river sand in construction.", agency: "Ministry of Steel & KIOCL", coordinator: "Dr. H.K. Ramaraju", grant: "19.96 Lakhs" },
    { sl: 8, programme: "CSE", title: "Medical Imaging And HPC Lab for deep learning applications in healthcare.", agency: "VGST K-FIST", coordinator: "Dr. Arbind Kumar Gupta", grant: "20.0 Lakhs" },
    { sl: 9, programme: "ECE", title: "Physics Based Modeling and simulation of next-generation semiconductor devices.", agency: "DRDO", coordinator: "Dr. P. Vimala, Dr. Dinesha P.", grant: "17 Lakhs" },
  ];
  
  
  
