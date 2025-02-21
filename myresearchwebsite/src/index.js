import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FundedProjects2 from './pages/FundedProjects2';
import Researchcenterhome from './Researchcenterhome';
import ResearchCenter from './ResearchCenter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage /> } />
        <Route path="/fundedprojects" element={<FundedProjects2 />} />
        <Route path="/research" element={<Researchcenterhome />} />
          <Route path="/research-center/:centerName" element={<ResearchCenter />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
