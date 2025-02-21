import { useParams } from 'react-router-dom';
import {
  AeronauticalCenter,
  AutomobileCenter,
  BiotechCenter,
  ChemicalCenter,
  CivilCenter,
  ComputerScienceCenter,
  ElectricalElectronicsCenter,
  MechanicalCenter,
  ElectronicsCommunicationCenter,
  InformationScienceCenter,
  ElectronicsInstrumentationCenter,
  MedicalElectronicsCenter,
  ElectronicsTelecommunicationCenter,
  EngineeringChemistryCenter,
  EngineeringMathematicsCenter
} from './components/researchCenters';











const centerComponents = {
  'aeronautical-engineering': AeronauticalCenter,
  'automobile-engineering': AutomobileCenter,
  'biotechnology': BiotechCenter,
  'chemical-engineering': ChemicalCenter,
  'civil-engineering': CivilCenter,
  'computer-science-and-engineering': ComputerScienceCenter,
  'electrical-and-electronics-engineering': ElectricalElectronicsCenter,
  'mechanical-engineering': MechanicalCenter,
  'electronics-and-communication-engineering': ElectronicsCommunicationCenter,
  'information-science-and-engineering': InformationScienceCenter,
  'electronics-and-instrumentation-engineering': ElectronicsInstrumentationCenter,
  'medical-electronics': MedicalElectronicsCenter,
  'electronics-and-telecommunication-engineering': ElectronicsTelecommunicationCenter,
  'engineering-chemistry': EngineeringChemistryCenter,
  'engineering-mathematics': EngineeringMathematicsCenter
};












export default function ResearchCenter() {
  const { centerName } = useParams();

  const CenterComponent = centerComponents[centerName];


  if (!CenterComponent) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Research Center Not Found</h1>
        <p className="text-lg text-gray-700">
          The requested research center does not exist or is under construction.
        </p>
      </div>
    );
  }

  return <CenterComponent />;
}
