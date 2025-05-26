import React from 'react';
import './Careers.css';
import img1 from '../../assets/hospitalreport.jpg';
import img2 from '../../assets/hero2.jpg';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Oncology Wet Lab Scientist – NGS & RT-PCR",
      location: "Noida",
      experience: "- Years Experience",
      postedDate: "22nd Apr 2025",
      vacancies: 1,
      employmentType: "Full Time,Permanent",
      description: "Seeking a highly motivated and detail-oriented wet lab scientist to join our oncology Genomics team. The ideal candidate will have hands-on experience in molecular biology techniques, particularly Next-Generation Sequencing (NGS) and Real-Time PCR (RT-PCR), with a focus on cancer genomics and biomarker discovery.",
      responsibilities: [
        "Perform sample preparation, DNA/RNA extraction, and quantification from various clinical specimens (e.g., FFPE, blood, tissue).",
        "Execute NGS library preparation protocols (DNA/RNA), including QC, fragmentation, ligation, enrichment, and barcoding.",
        "Run and optimize RT-PCR assays for gene expression, mutation analysis, or copy number variation studies.",
        "Operate and maintain sequencing platforms (e.g., Illumina, Thermo Fisher) and RT-PCR instruments.",
        "Ensure data quality by following standardized protocols, documentation, and quality control procedures.",
        "Collaborate with bioinformatics and clinical teams to interpret and validate results.",
        "Maintain accurate lab notebooks, reagent inventories, and equipment logs.",
        "Adhere to lab safety, biosafety, and regulatory compliance requirements."
      ],
      skills: [
        "3+ years of hands-on lab experience in a molecular oncology setting including NGS and RT-PCR techniques.",
        "Experience with lab automation, LIMS, or digital documentation is a plus.",
        "Knowledge of NGS workflows such as targeted panels, whole-exome, or RNA-Seq.",
        "Exposure to clinical diagnostic standards.",
        "Familiarity with data QC tools (e.g., TapeStation, Bioanalyzer) and quantification (Qubit, NanoDrop).",
        "Experience in assay development or validation.",
        "Ability to work independently and as part of a multidisciplinary team."
      ]
    },
    {
      id: 2,
      title: "NGS Wet Lab Specialist",
      location: "Noida",
      experience: "- Years Experience",
      postedDate: "22nd Apr 2025",
      vacancies: 1,
      employmentType: "Full Time,Permanent",
      description: "Perform NGS library preparation, sequencing runs, and sample QC. Troubleshoot and optimize NGS workflows. Ensure adherence to laboratory protocols and quality standards.",
      skills: [
        "Familiarity with laboratory equipment and quality control processes.",
        "Knowledge of NGS, Whole Exome Sequencing (WES), NIPT."
      ]
    },
    {
      id: 3,
      title: "B2B Sales - Doctors Connect",
      location: "Gurugram",
      experience: "2 - 5 Years Experience",
      postedDate: "5th Mar 2025",
      vacancies: 2,
      employmentType: "Full Time,Permanent",
      description: "Redcliffe Labs is seeking a dynamic and results-driven Sales person who has experience and ready to drive business growth. The role involves engaging with clinics, partners and doctors to promote our services and ensure seamless execution of lab services.",
      responsibilities: [
        "Identify and engage with clinics, partners and doctors.",
        "Onboard doctors and partners.",
        "Provide end-to-end customer and partner support.",
        "Drive business growth and manage partner relationships in the diagnostic industry.",
        "Achieve sales targets and contribute to revenue growth."
      ],
      skills: [
        "Experience Required: Minimum 2 years of experience in handling and managing Doctors/Partners relationships.",
        "Background in the diagnostic industry, excellent communication and negotiation skills."
      ]
    },
    {
      id: 4,
      title: "Territory Manager",
      location: "Indore",
      experience: "1 - Years Experience",
      postedDate: "4th Feb 2025",
      vacancies: 1,
      employmentType: "Full Time,Permanent",
      description: "Achieve sales targets for genomic testing services. Promote genomic testing solutions to doctors, clinics, hospitals, and diagnostic centers.",
      responsibilities: [
        "Conduct market research to analyze competitors and identify new opportunities.",
        "Coordinate with internal teams to ensure smooth service delivery and customer satisfaction.",
        "Maintain accurate records of sales activities, client interactions, and market feedback.",
        "Prepare and submit periodic sales reports to the Regional Sales Manager.",
        "Stay updated on the latest developments in genomic testing and related technologies."
      ],
      skills: [
        "Proven sales experience in diagnostics, genomics, or healthcare services",
        "Excellent communication and presentation skills",
        "Strong negotiation and relationship-building abilities",
        "Ability to analyze market trends and identify business opportunities",
        "Ability to work independently and meet targets in a competitive environment",
        "Willingness to travel within the assigned territory for client meetings",
        "Problem-solving and decision-making capabilities",
        "Eagerness to stay updated on advancements in genomic testing and industry trends"
      ]
    },
    {
      id: 5,
      title: "Customer Support - Technical",
      location: "Gurugram",
      experience: "1 - Years Experience",
      postedDate: "5th Dec 2024",
      vacancies: 1,
      employmentType: "Full Time,Permanent",
      description: "Majorly handling CXs on their Report Related Issues/Concerns",
      responsibilities: [
        "Excellent communication and problem-solving skills",
        "Maintaining a positive, empathetic, and professional attitude toward customers at all times",
        "Special instructions to collect the samples, wherever needed",
        "Clinical correlation for the abnormal results",
        "Correlation of results with each other",
        "Respond to and resolve customer queries in a timely and accurate way, via phone, email or chat",
        "Identify customer needs, acknowledging and resolving customer complaints",
        "Ensure customer satisfaction and provide professional customer support",
        "Follow up with customers to ensure their issues are resolved",
        "Collect and analyze feedback after completing customer queries",
        "Keeping records of customer interactions and complaints",
        "Assist in training junior customer support representatives",
        "Work collaboratively with teammates to solve customer issues quickly and efficiently",
        "Ensure regular training of the technicians",
        "Supporting seniors"
      ],
      skills: [
        "Good communication and soft skills",
        "Cx handling skills",
        "Problem solving skills",
        "ability to be a team player",
        "Flexibility of shifts",
        "Time management in terms of case closure",
        "Test knowledge",
        "able to elaborate the report and read the report."
      ]
    }
  ];

  return (
    <div className="redcliffe-careers">
      {/* Hero Section */}
      <section className="hero-section">
  <div className="hero-content">
    <h1>Join Our Mission to Transform Healthcare</h1>
    <p>Be part of India's fastest growing diagnostics service provider with 3000+ professionals across 220+ cities</p>
    <div className="hero-buttons">
      <button className="primary-btn">View Open Positions</button>
      <button className="secondary-btn">Learn About Our Culture</button>
    </div>
  </div>
  <div className="hero-image">
    <img 
      src={img1}
      alt="Healthcare Team"
      className="hero-img"
    />
  </div>
</section>


      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <h3>3000+</h3>
          <p>Professionals</p>
        </div>
        <div className="stat-item">
          <h3>220+</h3>
          <p>Cities</p>
        </div>
        <div className="stat-item">
          <h3>80+</h3>
          <p>Advanced Labs</p>
        </div>
        <div className="stat-item">
          <h3>2000+</h3>
          <p>Collection Centers</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-header">
          <h2>Build together, grow together</h2>
          <div className="divider"></div>
        </div>
        <div className="about-content">
          <p>
            Started as a flourishing start-up, Redcliffe Labs has become a team of 3000+ talented professionals with a mission to present a market space that enables you to help people get the right advice for their health. At Redcliffe Labs, we work hard to get candidates interested in our domains and work culture. We galvanize the employees to become a part of our brand to grow with us. We hire on purpose. What's yours?
          </p>
        </div>
      </section>

      {/* Life at Redcliffe */}
      <section className="life-at-redcliffe">
  <div className="section-header">
    <h2>Life @ Redcliffe</h2>
    <div className="divider"></div>
  </div>
  <div className="life-content">
    <div className="life-text">
      <p>
        Every employee is a valuable part of the Redcliffe family, and we celebrate the success of every employee and management staff with the same level of gusto. The company is home to more than 3000+ loyal and passionate team members, and the employees are endlessly working towards a common goal. The accomplishment of one project is the victory of a communal team that makes the brand prominent around the globe.
      </p>
      <p>
        At Redcliffe Labs, every team member has one thing in common: their dedication to work and offering unrivaled solutions in the field of healthcare. We're thrilled to announce exemplary job openings at Redcliffe Labs to bring more industry-driven work to leading brands. The entire team of Redcliffe Labs together is accountable for the success of the company. We are known for our dedication to work to stay one step ahead of the curve.
      </p>
    </div>
    <div className="life-image">
      <img 
        src={img2}
        alt="Life at Redcliffe"
        className="life-img"
      />
    </div>
  </div>
</section>


      {/* Opportunities Section */}
      <section className="opportunities-section">
        <div className="section-header">
          <h2>Opportunities @ Redcliffe</h2>
          <div className="divider"></div>
        </div>
        <div className="opportunities-content">
          <p>
            The journey to becoming the best is not a cakewalk, but the company sets weekly goals that the team celebrates achieving. Every day the management at Redcliffe Labs comes up with unique ways to make their employees' days more joyful and productive. When it comes to growth, Redcliffe Labs offers limitless opportunities to its employees. Whether it is about enhancing skills or getting rewarded for good work, its goal is to grow together.
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="current-openings">
        <div className="section-header">
          <h2>Current Job Openings</h2>
          <div className="divider"></div>
        </div>
        <div className="job-filters">
          <div className="filter-group">
            <label htmlFor="location">Location:</label>
            <select id="location">
              <option value="all">All Locations</option>
              <option value="noida">Noida</option>
              <option value="gurugram">Gurugram</option>
              <option value="indore">Indore</option>
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="department">Department:</label>
            <select id="department">
              <option value="all">All Departments</option>
              <option value="lab">Lab Operations</option>
              <option value="sales">Sales</option>
              <option value="support">Customer Support</option>
            </select>
          </div>
        </div>
        <div className="job-listings">
          {jobOpenings.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <div>
                  <h3>{job.title}</h3>
                  <p className="location">{job.location}</p>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>
              <div className="job-details">
                <div className="detail-item">
                  <span className="detail-label">Experience:</span>
                  <span>{job.experience}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Posted on:</span>
                  <span>{job.postedDate}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Vacancies:</span>
                  <span>{job.vacancies}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Employment Type:</span>
                  <span>{job.employmentType}</span>
                </div>
              </div>
              <div className="job-description">
                <h4>Job Description:</h4>
                <p>{job.description}</p>
              </div>
              {job.responsibilities && (
                <div className="job-responsibilities">
                  <h4>Job Responsibilities:</h4>
                  <ul>
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="job-skills">
                <h4>Skills Required:</h4>
                <ul>
                  {job.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="job-footer">
                <button className="secondary-btn">View Details</button>
                <button className="primary-btn">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Can't Find Your Perfect Role?</h2>
        <p>We're always looking for talented individuals. Send us your resume and we'll contact you when a matching position opens up.</p>
        <button className="primary-btn">Submit Your Resume</button>
      </section>
    </div>
  );
};

export default Careers;