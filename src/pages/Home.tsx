import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../assets/headshot.jpg';
import { SiGithub, SiLinkedin, SiInstagram, SiX } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import Ballpit from '../components/Ballpit';
import ResumePDF from '../assets/resume.pdf'; 

function Home() {
  const [showBalls, setShowBalls] = useState(false);

  return (
    <>
      {/* --- MOVED THE TOGGLE HERE --- */}
      <div
        className="toggle-animation-link"
        onClick={() => setShowBalls(!showBalls)}
        aria-label="Toggle background animation"
      >
        {showBalls ? (
          <>
            <span>🙏</span>
            <span>that's enough</span>
          </>
        ) : (
          <>
            <span>💸</span>
            <span>make it rain</span>
          </>
        )}
      </div>

      {showBalls && (
        <div className="bg-canvas">
          <Ballpit
            count={60}
            gravity={0.05}
            friction={0.9999}
            wallBounce={1}
            followCursor={false}
          />
        </div>
      )}

      <main className="home-container">
        <img src={ProfilePic} alt="Diwen Huang" className="profile-pic" />
        <h1>Diwen Huang</h1>
        <p className="subheader">ib @ port moody secondary</p>
        <p className="description">
          i am an aspiring cs + ai major based in vancouver
        </p>
        <div className="nav-buttons">
          <Link to="/work" className="btn">
            work
          </Link>
          <Link to="/projects" className="btn">
            projects
          </Link>
          <a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            resume
          </a>
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
          <a
            href="https://x.com/diwennee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <SiX />
          </a>
          <a href="mailto:diwenh5@icloud.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </main>

      {/* The button is no longer here */}
    </>
  );
}

export default Home;