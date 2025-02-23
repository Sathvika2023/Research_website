import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import LandingPage from './pages/LandingPage';
import FundedProjects2 from './pages/FundedProjects2';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


// Add scrollbar-hide class to root element


import Researchcenterhome from './Researchcenterhome';
import ResearchCenter from './ResearchCenter';
import ResearchInfo from './ResearchInfo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage /> } />
        <Route path="/fundedprojects" element={<FundedProjects2 />} />
        <Route path="/research" element={<Researchcenterhome />} />
          <Route path="/research-center/:centerName" element={<ResearchCenter />} />
          <Route path="/faculty" element={<ResearchInfo />} />
          <Route path="/faculty/:facultyName" element={<ResearchInfo />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
