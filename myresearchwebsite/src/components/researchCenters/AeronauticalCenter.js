import React, { useState } from 'react';
import { researchCenters } from '../../researchData';

const AeronauticalCenter = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const centerData = researchCenters.find(center => center.slug === 'aeronautical-engineering');
  const images = centerData.images;

  const handleHover = (direction) => {
    setCurrentImage(prev => {
      if (direction === 'next') {
        return (prev + 1) % images.length;
      } else {
        return (prev - 1 + images.length) % images.length;
      }
    });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-8">
      <div className="lg:w-2/3 pr-8">
        <h1 className="text-4xl font-bold mb-8">{centerData.name} Research Center</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <div className="flex gap-8">
            <div className="w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                {centerData.description}
                <br /><br />
                The Department of Aeronautical Engineering established a Research Centre under VTU in the year 2013 for carrying out research activities and enabled us to offer Doctor of Philosophy (Ph.D) program both full time and part-time. R & D centre involves in identifying new research areas, developing projects leading to publications in National/International Journals and guides in identifying results of research for filing patents. There has been wide spectrum of research activity in the last few years leading to more than 06 research publications in reputed journals annually. Currently, two candidates are pursuing Ph.D in the research centre.
                <br /><br />
                The Research Centre holds periodical review meetings on the progress of research being carried out for Ph.D. To create necessary environment and facilities for research of students, R & D Centre attached with aeronautical laboratories. Each Lab is headed by a faculty and supported by competent technical staffs who volunteer to act as mentors for the students and ensure that students conduct the research. Student groups work on various engineering projects in these labs - concept to designing the prototype. These research labs help the students to build prototypes which enable them to participate in competitions both in India & Abroad. Several student projects have received funds from KSCST. Major Research Areas include: Aero structural Design, optimization of wind rotor blades, propeller system, crash-worthiness of high wing configuration.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Details of Research Guides</h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border">Sl.no</th>
                      <th className="p-2 border">Name of the Research Supervisor/Co-Supervisor</th>
                      <th className="p-2 border">Field of Research</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">1</td>
                      <td className="p-2 border">Dr. Hareesha N G</td>
                      <td className="p-2 border">Kinematics, Optimization and Unmanned Aerial Vehicles</td>
                    
                    </tr>
                    <tr>
                      <td className="p-2 border">1</td>
                      <td className="p-2 border">Dr.Rudresh M</td>
                      <td className="p-2 border">Composite Materials, Structural Analysis, Coating</td>
                     
                    </tr>
                    <tr>
                      <td className="p-2 border">3</td>
                      <td className="p-2 border">Dr. Prathik Jain S</td>
                      <td className="p-2 border">Unmanned Aerial Vehicles, Structural Analysis,Conditional monitoring, Composite Materials</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">4</td>
                      <td className="p-2 border">Dr. Srikanth Salyan</td>
                      <td className="p-2 border">Battery Management, Micro Device Cooling</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">5</td>
                      <td className="p-2 border">Dr. Sudhagara Ranjan S</td>
                      <td className="p-2 border">Aerospace Materials, Fatigue and Fracture, Material Processing, Surface Engineering, Additive Manufacturing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Details of Research Scholars</h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border">Sl.no</th>
                      <th className="p-2 border">Name of the Research Scholar</th>
                      <th className="p-2 border">Year of Registration/ University</th>
                      <th className="p-2 border">Topics</th>
                      <th className="p-2 border">Status/Course work Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">1</td>
                      <td className="p-2 border">Afreen Nizami</td>
                      <td className="p-2 border">2023/VTU</td>
                      <td className="p-2 border">Numerical and Experimental Analysis of Aircraft Fire Fighting by using Fire Fighting Drone	</td>
                      <td className="p-2 border">Course-work under progress </td>
                    </tr>
                    <tr>
                      <td className="p-2 border">2</td>
                      <td className="p-2 border">Mukesh M</td>
                      <td className="p-2 border">2023/VTU</td>
                     <td className="p-2 border">Aerodynamic Studies on Hybrid Drone Wing Configuration</td>
                      <td className="p-2 border">Course-work under progress</td>
                    </tr>
                  </tbody>
                </table>
              </div>



            </div>
            {/* <div className="w-1/3">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Key Facts</th>
                    <th className="p-2 border">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Established</td>
                    <td className="p-2 border">{centerData.keyFacts.established}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Faculty</td>
                    <td className="p-2 border">{centerData.keyFacts.faculty}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Status</td>
                    <td className="p-2 border">
                      <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                        centerData.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {centerData.isOpen ? 'Open' : 'Closed'}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Research Areas</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            {centerData.researchAreas.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="lg:w-1/3 relative">
        <div 
          className="sticky top-8"
          onMouseEnter={() => handleHover('next')}
        >
          <img 
            src={images[currentImage]} 
            alt="Aeronautical Engineering" 
            className="w-full h-auto rounded-lg shadow-lg transition-all duration-500"
          />
          <div className="absolute inset-0 flex justify-between items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => handleHover('prev')}
              className="p-2 bg-black/50 text-white rounded-full ml-2"
            >
              {'<'}
            </button>
            <button 
              onClick={() => handleHover('next')}
              className="p-2 bg-black/50 text-white rounded-full mr-2"
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AeronauticalCenter;
