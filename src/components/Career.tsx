import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer & QA</h4>
                <h5>5Data Inc.</h5>
              </div>
              <h3>Jan 2026 - Current</h3>
            </div>
            <p>
              Working as a Full Stack Developer and QA on Agentic QA. Building features and ensuring quality leveraging a tech stack that includes Node.js, Express.js, PostgreSQL, React.js, Drizzle, and Replit.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>5Data Inc.</h5>
              </div>
              <h3>Oct 2025 - Dec 2025</h3>
            </div>
            <p>
              Worked on CISO Assistant (GRC Tool). Developed core features, implemented task and user import functionalites, built AWS integration for cloud asset visibility, and collaborated with stakeholders to align features with automation workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>iQ Tree Tech Soft.</h5>
              </div>
              <h3>Oct 2023 - Apr 2024</h3>
            </div>
            <p>
              Developed and implemented a ChatBot using Django, integrated with the company website. Designed and developed an HRMS (Human Resource Management System) using Django to streamline internal operations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master's Coursework</h4>
                <h5>University of North Texas</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Information Science. Coursework focused on: Data Visualization, Computational Methods, Information Security, Metadata & Knowledge Organization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology</h4>
                <h5>Vasireddy Venkatadri Institute of Technology</h5>
              </div>
              <h3>2020 - 2024</h3>
            </div>
            <p>
              Majors: Computer Science. Also hold certifications in Smart India Hackathon 2022 (Finalist), Microsoft Azure AI Fundamentals, and Process Mining / Salesforce Developer virtual internships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
