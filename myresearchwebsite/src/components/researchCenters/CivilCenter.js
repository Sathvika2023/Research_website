import React, { useState } from 'react';
import { researchCenters } from '../../researchData';


const CivilCenter = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const centerData = researchCenters.find(center => center.slug === 'civil-engineering');
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
      {/* Content Section */}
      <div className="lg:w-2/3 pr-8">
        <h1 className="text-4xl font-bold mb-8">Civil Engineering Research Center</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <div className="flex gap-8">
            <div className="w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                Content about the Civil Engineering Research Center
              </p>
            </div>
            <div className="w-1/3">
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
                    <td className="p-2 border">2005</td>
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
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Research Areas</h2>
          <div className="flex gap-8">
            <div className="w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                Content about research areas
              </p>
            </div>
            <div className="w-1/3">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Area</th>
                    <th className="p-2 border">Focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Structural</td>
                    <td className="p-2 border">Analysis</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Geotechnical</td>
                    <td className="p-2 border">Soil Mechanics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
          <div className="flex gap-8">
            <div className="w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                Content about facilities
              </p>
            </div>
            <div className="w-1/3">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Facility</th>
                    <th className="p-2 border">Capacity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Lab 1</td>
                    <td className="p-2 border">20 students</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Lab 2</td>
                    <td className="p-2 border">15 students</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Publications</h2>
          <div className="flex gap-8">
            <div className="w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                Content about publications
              </p>
            </div>
            <div className="w-1/3">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Year</th>
                    <th className="p-2 border">Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">2022</td>
                    <td className="p-2 border">15</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">2023</td>
                    <td className="p-2 border">20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* Image Carousel Section */}
      <div className="lg:w-1/3 relative">
        <div 
          className="sticky top-8"
          onMouseEnter={() => handleHover('next')}
        >
          <img 
            src={images[currentImage]} 
            alt="Civil Engineering" 
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

export default CivilCenter;
