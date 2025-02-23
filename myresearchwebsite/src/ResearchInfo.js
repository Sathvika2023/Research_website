import { useState } from "react";
import axios from "axios";
import "./ResearchInfo.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const engineeringDepartments = [
    {
        name: "CSE",
        faculties: [
            { name: "Dr. Ramesh Babu", gsId: "CV8uSkkAAAAJ" },
            { name: "Dr. Amutha", gsId: "1NDC0oUAAAAJ" },
            { name: "Dr. Arbind Kumar", gsId: "vKfX3ogAAAAJ" },
            { name: "Dr. Krishnan R", gsId: "XPCSXqQAAAAJ" },
            { name: "Dr. Kavitha K S", gsId: "GLn5wAkAAAAJ" },
            { name: "Dr. Nagaraj J", gsId: "mfHgvFAAAAAJ" },
            { name: "Dr. Rahini T V", gsId: "SlRYMqcAAAAJ" },
            { name: "Dr. Vimala Devi", gsId: "4K9xZQQAAAAJ" }
        ]
    },
    { name: "ECE", faculties: [] },
    { name: "ME", faculties: [] },
    { name: "CE", faculties: [] }
];

const commonScopusId = "123456789"; // Placeholder Scopus ID

const ResearchInfo = () => {
    const [selectedDepartment, setSelectedDepartment] = useState("CSE");
    const [selectedFaculty, setSelectedFaculty] = useState(null);
    const [researchData, setResearchData] = useState(null);
    const [loading, setLoading] = useState(false);

    const currentFacultyList =
        engineeringDepartments.find((dep) => dep.name === selectedDepartment)?.faculties || [];

    const fetchPublications = async (googleScholarId) => {
        if (!googleScholarId) return;
        setLoading(true);
        setResearchData(null);

        try {
            const response = await axios.post("http://127.0.0.1:5000/fetch-publications", {
                google_scholar_id: googleScholarId,
                scopus_id: commonScopusId
            });

            const data = response.data;
            const totalCitations =
                data.google_scholar?.Publications?.reduce((sum, pub) => sum + (pub.Citations || 0), 0) || 0;

            setResearchData({
                ...data,
                google_scholar: {
                    ...data.google_scholar,
                    totalCitations: totalCitations
                }
            });
        } catch (error) {
            console.error("Error fetching publications:", error);
            setResearchData(null);
        } finally {
            setLoading(false);
        }
    };

    const handleFacultyClick = (faculty) => {
        setSelectedFaculty(faculty);
        fetchPublications(faculty.gsId);
    };

    return (
        <div><Header/>
        <div className="research-container">
            <h2>Engineering Faculty Research Portal</h2>

            {/* Department Dropdown */}
            <div className="dropdown-container">
                <label htmlFor="department">Select Department: </label>
                <select
                    id="department"
                    value={selectedDepartment}
                    onChange={(e) => {
                        setSelectedDepartment(e.target.value);
                        setSelectedFaculty(null);
                        setResearchData(null);
                    }}
                >
                    {engineeringDepartments.map((dept, index) => (
                        <option key={index} value={dept.name}>
                            {dept.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Faculty List */}
            {currentFacultyList.length > 0 ? (
                <div className="faculty-grid">
                    {currentFacultyList.map((faculty, index) => (
                        <button key={index} className="faculty-card" onClick={() => handleFacultyClick(faculty)}>
                            {faculty.name}
                        </button>
                    ))}
                </div>
            ) : (
                <p className="no-faculty">No faculty members available for this department.</p>
            )}

            {/* Loading Indicator */}
            {loading && (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Fetching Research Data...</p>
                </div>
            )}

            {/* Research Data Display */}
            {selectedFaculty && researchData && !loading && (
                <div className="research-card">
                    <h3>📖 {selectedFaculty.name}'s Research Information</h3>
                    <p>
                        <strong>Scholar Name:</strong> {researchData.google_scholar?.Researcher || "N/A"}
                    </p>
                    <p>
                        <strong>Affiliations:</strong> {researchData.google_scholar?.Affiliations || "N/A"}
                    </p>

                    {/* Citation Stats */}
                    <div className="research-stats">
                        <div className="stat-box">
                            <i className="fas fa-chart-line"></i> H-Index:{" "}
                            {researchData.google_scholar?.["H-Index"] || "N/A"}
                        </div>
                        <div className="stat-box">
                            <i className="fas fa-star"></i> Total Citations:{" "}
                            {researchData.google_scholar?.totalCitations || 0}
                        </div>
                    </div>

                    {/* Google Scholar Publications */}
                    <h4 className="section-title">📚 Google Scholar Publications</h4>
                    {researchData.google_scholar?.Publications?.length > 0 ? (
                        <ul className="publication-list">
                            {researchData.google_scholar.Publications.map((pub, idx) => (
                                <li key={idx}>
                                    <strong>{pub.Title}</strong> ({pub.Year}) - Citations: {pub.Citations || 0}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="no-publications">No publications available.</p>
                    )}

                    {/* Scopus Publications */}
                    <h4 className="section-title">📖 Scopus Publications</h4>
                    {researchData.scopus?.Publications?.length > 0 ? (
                        <ul className="publication-list">
                            {researchData.scopus.Publications.map((pub, idx) => (
                                <li key={idx}>
                                    <strong>{pub.Title}</strong> - {pub.Authors} ({pub["Publication Year"]})
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="no-publications">No Scopus publications found.</p>
                    )}
                </div>
            )}
        </div>
        <Footer/>
        </div>
    );
};

export default ResearchInfo;
