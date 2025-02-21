import { Link } from 'react-router-dom';
import { researchCenters } from './researchData';

export default function Researchcenterhome() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-blue-900">Research Centers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchCenters.map((center, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold mb-4">
                <Link 
                  to={`/research-center/${center.slug}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  {center.name}
                </Link>
                <span className={`ml-3 text-sm font-medium px-3 py-1 rounded-full ${
                  center.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {center.isOpen ? 'Open' : 'Closed'}
                </span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{center.description}</p>
              <Link
                to={`/research-center/${center.slug}`}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
