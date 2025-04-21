import React from 'react';
import './LabLocations.css';

const LocationsPage = () => {
  const labs = [
    { id: 1, name: "Redcliffe Labs Agra", address: "Shop no DC 6, Third Floor, Near Doctor Shivani Chaturvedi Clinic, Shanti Madhuban Plaza, Delhi Gate, Agra-282002, Uttar Pradesh.", city: "Agra", bgColor: "#fdecef" },
    { id: 2, name: "Redcliffe Labs Pune", address: "Office No. 1, Aswani Chambers, Viman Nagar Pune - 411014", city: "Pune", bgColor: "#eafbf1" },
    { id: 3, name: "Redcliffe Labs Kolkata", address: "No CG 223, beside RBL Bank, Sector II, Bidhannagar, Kolkata", city: "North Kolkata", bgColor: "#fff4e6" },
    { id: 4, name: "Redcliffe Labs Agartala", address: "6, IGM Hospital Lane, Rabindra Palli, Agartala - 799001", city: "Agartala", bgColor: "#ebf3ff" },
    { id: 5, name: "Redcliffe Labs Chennai", address: "Plot No. 402, Paneer Nagar, Mogappair Village, Chennai - 600037", city: "Central Chennai", bgColor: "#f3e8ff" },
    { id: 6, name: "Redcliffe Labs Gwalior", address: "City Center, Tulsi Vihar Colony, Gwalior, Madhya Pradesh 474002", city: "Gwalior", bgColor: "#fff6ec" },
    { id: 7, name: "Redcliffe Labs Rewa", address: "Bus Stand Saman, Tiraha, Rewa, Madhya Pradesh 486001", city: "Rewa", bgColor: "#eaf9ff" },
    { id: 8, name: "Redcliffe Labs Tilak Nagar - Delhi", address: "House No.- 4-B-2, Tilak Nagar, Delhi - 110018", city: "West Delhi", bgColor: "#fef0f0" },
    { id: 9, name: "Redcliffe Labs Moradabad", address: "Kanth Road, Moradabad - 244001", city: "Moradabad", bgColor: "#f5f5dc" },
  ];

  return (
    <div className="locations-page">
      <h1 className="main-title">Our Lab Locations</h1>
      <div className="lab-grid">
        {labs.map(lab => (
          <div key={lab.id} className="lab-card" style={{ backgroundColor: lab.bgColor }}>
            <h3>{lab.name}</h3>
            <p>{lab.address}</p>
            <p className="city">City: <strong>{lab.city}</strong></p>
            <div className="lab-buttons">
              <button>📞 Call</button>
              <button>📍 Directions</button>
              <button>🩺 Book</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsPage;
