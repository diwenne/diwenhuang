import { Link } from 'react-router-dom';
import ProfilePic from '../assets/me.jpg';
// import ResumePDF from '../assets/resume.pdf';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

function Home() {
  return (
    <main className="home-container">
      <img src={ProfilePic} alt="Diwen Huang" className="profile-pic" />
      <h1>Diwen Huang</h1>
      <p className="subheader">ib @ port moody secondary</p>
      <p className="description">
        athlete, full-stack developer and an author now i guess ✨🏸
      </p>
      <div className="nav-buttons">
        <Link to="/work" className="btn">
          work
        </Link>
        <Link to="/projects" className="btn">
          projects
        </Link>
        {/* <a href={ResumePDF} target="_blank" rel="noopener noreferrer" className="btn">
          resume
        </a> */}
      </div>

      <div className="social-icons">
        <a
          href="https://github.com/diwenne"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <SiGithub />
        </a>
        <a
          href="https://linkedin.com/in/diwenh5"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <SiLinkedin />
        </a>
        <a 
          href="https://instagram.com/devdiwen" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
        >
          <SiInstagram />
        </a>
        <a href="mailto:diwenh5@icloud.com" aria-label="Email">
          <FiMail />
        </a>
      </div>
    </main>
  );
}

export default Home;
