import React from 'react';
import PythonCover from '../assets/pythonfaststart.png';
import SwiftCover from '../assets/swiftfaststart.png';

const Breadcrumbs = ({ pageName }) => {
  return (
    <nav className="breadcrumbs">
      <a href="/">home</a>
      <span>/</span>
      <a href="/projects">projects</a>
      <span>/</span>
      {pageName}
    </nav>
  );
};

const FaststartSeriesCaseStudy = () => {
  return (
    <div className="page-container">
      <Breadcrumbs pageName="faststart-series" />
      
      <article className="case-study">
        <header>
          <h1>Programming Faststart Series</h1>
          <p className="subtitle">
            Modernizing computer science education for the age of AI.
          </p>
        </header>

        <section className="overview-grid">
          <div className="overview-item">
            <h3>Duration</h3>
            <p>July 2025 - Present</p>
          </div>
          <div className="overview-item">
            <h3>Role</h3>
            <p>Author, Designer, Publisher</p>
          </div>
          <div className="overview-item full-width">
            <h3>Responsibilities</h3>
            <ul>
              <li>Curriculum Development & Writing</li>
              <li>Cover Design & Interior Layout</li>
              <li>E-book & Paperback Publishing</li>
              <li>Marketing & Distribution</li>
            </ul>
          </div>
          <div className="overview-item full-width">
            <h3>Skills & Technologies</h3>
            <p>Python, Swift, AI in Education, Technical Writing, KDP</p>
          </div>
        </section>

        <section>
          <h2>The Books</h2>
          <div className="image-gallery">
            <img src={PythonCover} alt="Python Faststart Book Cover" className="case-study-image" />
            <img src={SwiftCover} alt="Swift Faststart Book Cover" className="case-study-image" />
          </div>
        </section>

        <section>
          <h2>Project Vision</h2>
          <p>
            The Programming Faststart Series was born from the observation that traditional coding textbooks have not kept pace with the rapid evolution of AI. New developers now have access to powerful tools like ChatGPT and GitHub Copilot, yet most educational materials still teach programming in a vacuum, focusing on rote memorization of syntax rather than on the critical thinking and problem-solving skills needed in an AI-assisted world.
          </p>
          <p>
            The vision was to create a new kind of textbook—one that embraces AI as a learning partner. The goal is to teach foundational programming concepts through practical, project-based examples while empowering students to leverage AI tools effectively and ethically. This approach shifts the focus from "how to write code" to "how to think like a programmer" in a modern development environment.
          </p>
        </section>
        
        <section>
          <h2>The Process</h2>
          
          <h3>1. Curriculum Design</h3>
          <p>
            Each book in the series is structured around a project-based learning philosophy. Instead of isolated chapters on loops, variables, and functions, readers build tangible projects from the start. This method keeps learners engaged and provides immediate context for the concepts being taught. The curriculum for each book (starting with Python and Swift) was carefully designed to introduce fundamental principles in a logical, cumulative way.
          </p>

          <h3>2. Writing & Content Creation</h3>
          <p>
            The writing style is intentionally direct, conversational, and accessible. Complex topics are broken down into simple, digestible explanations, supplemented with clear code examples and illustrations. A key differentiator is the integration of "AI Notes"—sidebars and sections that explicitly guide students on when and how to use AI tools for debugging, code explanation, and idea generation.
          </p>
          <p>
            Writing these books also sharpened my own grasp of the languages: explaining concepts forced me to revisit edge cases, idioms, and best practices in both Python and Swift—everything from type systems and standard-library patterns to testing and debugging workflows.
          </p>

          <h3>3. Design and Publishing</h3>
          <p>
            I handled the entire production process, from cover design to interior layout and typesetting. The goal was a clean, professional aesthetic that enhances readability for both digital and print editions. The books were self-published through Amazon KDP, making them accessible to a global audience.
          </p>
        </section>
        
        <section>
          <h2>Key Features</h2>
          <ul>
            <li><strong>Project-Based Learning:</strong> Readers build real applications, which reinforces concepts and provides a strong sense of accomplishment.</li>
            <li><strong>AI-Integrated Approach:</strong> The curriculum explicitly teaches students how to use AI tools as a supplement to their learning, preparing them for modern workflows.</li>
            <li><strong>Focus on Problem-Solving:</strong> The series emphasizes debugging, algorithmic thinking, and understanding code over memorizing syntax.</li>
            <li><strong>Accessible and Modern:</strong> The books are written for absolute beginners and cover the latest versions of each programming language.</li>
          </ul>
        </section>

        <section>
          <h2>Downloads & Resources</h2>
          <p>
            Below are links to purchase the books on Amazon.
          </p>
          <div className="nav-buttons" style={{ justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
            <a href="https://a.co/d/fUiIyf5" target="_blank" rel="noopener noreferrer" className="btn">Buy Python Faststart</a>
            <a href="https://a.co/d/2sMAPgY" target="_blank" rel="noopener noreferrer" className="btn">Buy Swift Faststart</a>
          </div>
        </section>

        <section>
          <h2>Takeaway</h2>
          <p>
            The Programming Faststart Series has been a rewarding journey into the world of technical writing and publishing. It reinforced my belief that education needs to adapt to new technological paradigms. The positive feedback from readers has been a powerful motivator, demonstrating a clear demand for educational resources that are in tune with the modern world of software development. 
            Writing and teaching through these books also deepened my own understanding of Python and Swift—clarifying mental models, tightening my approach to testing and debugging, and refining how I explain concepts to others.
          </p>
        </section>
      </article>
    </div>
  );
}

export default FaststartSeriesCaseStudy;