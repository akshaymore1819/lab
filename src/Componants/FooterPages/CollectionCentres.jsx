import React, { useState } from 'react';
import './CollectionCentres.css';

const  CollectionCentres = () => {
  // Sample lab data (209 labs)
  const allLabs = [
    {
      id: 1,
      name: "Aayushman Diagnostic Collection Center",
      distance: "5.9 Km From Your Location",
      address: "No F6, Priyanka Apartment, Charwed Nagar, Near Sundry Road, Pune, Maharashtra · 411051",
      phone: "+9196979 91555",
      timing: "Open until 8:00 PM"
    },
    {
      id: 2,
      name: "Jay Shankar Pathology Lab",
      distance: "6.05 Km From Your Location",
      address: "Plot No 5, Mahesh Society Chowk, Opposite Bibewendit Petrol Pump, Pune, Maharashtra · 411027",
      phone: "+9179 6914 9019",
      timing: "Open until 8:00 PM"
    },
    {
      id: 3,
      name: "Redcliffe Labs - Collection Center",
      distance: "8.27 Km From Your Location",
      address: "Shop No 2, Ground Floor, Nirman Etalab, Kondhwa, Behind Soonji Bus Stand, Pune, Maharashtra · 411048",
      phone: "+9179 6914 4628",
      timing: "Open until 8:00 PM"
    },
    {
      id: 4,
      name: "Dag Laboratories Sangri",
      distance: "6.82 Km From Your Location",
      address: "Shop No 1, Shiode Nagar, Main Road, Old Sangri, Next to Medipius Medical, Pune, Maharashtra · 411027",
      phone: "+9179 6928 5394",
      timing: "Open until 8:00 PM"
    },
    {
      id: 5,
      name: "Health Care At Home Labs",
      distance: "8.3 Km From Your Location",
      address: "Shop No 15, Mayur Nagaril Society, Pimple Gurup, Sangri, Pune, Maharashtra · 411061",
      phone: "+9179 6912 2773",
      timing: "Open until 8:00 PM"
    },
    // Add more labs to make 209 total
    ...Array.from({ length: 204 }, (_, i) => ({
      id: i + 6,
      name: `Lab Center ${i + 6}`,
      distance: `${(Math.random() * 10).toFixed(2)} Km From Your Location`,
      address: `Address ${i + 6}, Pune, Maharashtra`,
      phone: `+9179 ${Math.floor(10000000 + Math.random() * 90000000)}`,
      timing: "Open until 8:00 PM"
    }))
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const labsPerPage = 9;

  // Calculate current labs to display
  const indexOfLastLab = currentPage * labsPerPage;
  const indexOfFirstLab = indexOfLastLab - labsPerPage;
  const currentLabs = allLabs.slice(indexOfFirstLab, indexOfLastLab);
  const totalPages = Math.ceil(allLabs.length / labsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="lab-locator">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Healthy India Ki Trusted Lab</h1>
          <div className="features">
            <div className="feature-item">
              <i className="fas fa-flask"></i>
              <span>3600+ Tests & packages</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Presence in 220+ cities</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-circle"></i>
              <span>100% accurate report guarantee</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-smile"></i>
              <span>Best customer experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <h2>LOCATE THE NEAREST LABS - COLLECTION CENTERS</h2>
          <div className="search-box">
            <div className="search-options">
              <div className="search-option">Search nearby labs by locality, city or state</div>
              <div className="or-divider">OR</div>
              <div className="dropdown-group">
                <select className="dropdown">
                  <option>Enter the state</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Karnataka</option>
                </select>
                <select className="dropdown">
                  <option>Select City</option>
                  <option>Pune</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                </select>
                <select className="dropdown">
                  <option>Select Locality</option>
                  <option>Kondhwa</option>
                  <option>Kothrud</option>
                  <option>Hinjewadi</option>
                </select>
              </div>
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="container">
          <h2>Locate The Nearest Labs - Collection Centers</h2>
          
          <div className="lab-cards">
            {currentLabs.map((lab) => (
              <div className="lab-card" key={lab.id}>
                <div className="lab-header">
                  <h3>Redcliffe Labs - Collection Center</h3>
                  <span className="distance">{lab.distance}</span>
                </div>
                <div className="lab-info">
                  <h4>{lab.name}</h4>
                  <p><i className="fas fa-map-marker-alt"></i> {lab.address}</p>
                  <p><i className="fas fa-phone"></i> {lab.phone}</p>
                  <p><i className="fas fa-clock"></i> {lab.timing}</p>
                  <div className="lab-actions">
                    <button className="action-btn"><i className="fas fa-map-marked-alt"></i> Map</button>
                    <button className="action-btn"><i className="fas fa-globe"></i> Website</button>
                    <button className="action-btn book-btn">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="pagination">
            <button 
              onClick={() => paginate(currentPage - 1)} 
              disabled={currentPage === 1}
              className="page-btn"
            >
              Previous
            </button>
            
            <span className="page-info">
              Page {currentPage} of {totalPages}
            </span>
            
            <button 
              onClick={() => paginate(currentPage + 1)} 
              disabled={currentPage === totalPages}
              className="page-btn"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="presence">
            <strong>Sales we are present in:</strong>
            <div className="locations">
              Andhra Pradesh / Assam / Bihar / Chandigarh / Chhattisgarh View More...
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CollectionCentres;