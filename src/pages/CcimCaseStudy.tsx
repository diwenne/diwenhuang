import Breadcrumbs from '../components/Breadcrumbs'; // Assumes Breadcrumbs is in src/components
import CcimLogo from '../assets/ccim-logo.png';
import DesignSystem1 from '../assets/design-system-1.png'; 
import DesignSystem2 from '../assets/design-system-2.png'; 
import LowFiPrototype from '../assets/low-fi-prototype.png';
import Sitemap from '../assets/sitemap.png';
import HighFiPrototype from '../assets/high-fi-prototype.png';
import PaperSketch1 from '../assets/paper-sketch-1.png';
import PaperSketch2 from '../assets/paper-sketch-2.png';
// 1. Import competitor logos
import CompetitorChsa from '../assets/competitor-chsa.png';
import CompetitorNmwa from '../assets/competitor-nmwa.jpg';
import CompetitorCmh from '../assets/competitor-cmh.jpg';
import CompetitorSmithsonian from '../assets/competitor-smithsonian.png';

function CcimCaseStudy() {
  return (
    <div className="page-container">
      <Breadcrumbs pageName="projects / ccim" />

      <article className="case-study">
        <header>
          <img src={CcimLogo} alt="Chinese Canadian Immigration Museum Logo" className="case-study-logo" />
          <h1>Chinese Canadian Immigration Museum (CCIM)</h1>
          <p className="subtitle">
            Designing a website for an imaginary virtual museum using UX frameworks and principles.
          </p>
        </header>

        {/* --- Project Overview --- */}
        <section>
          <h2>Project Overview</h2>
          <div className="overview-grid">
            <div className="overview-item">
              <h3>Duration</h3>
              <p>March 2025 (3 weeks)</p>
            </div>
            <div className="overview-item">
              <h3>Role</h3>
              <p>Product Designer</p>
            </div>
            <div className="overview-item full-width">
              <h3>Responsibilities</h3>
              <ul>
                <li>UX Research</li>
                <li>Information Architecture</li>
                <li>Visual Design</li>
                <li>Interaction Design</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Project Vision --- */}
        <section>
          <h2>Project Vision</h2>
          <p>
            CCIM is a virtual museum that highlights the history of Chinese immigration in Canada, aiming to preserve and honour the contributions of Chinese immigrants within the Canadian mosaic. This project followed a user-centered design framework focused on empathy and accessibility. The product was developed as a desktop website to demonstrate my skills in designing for larger screens.
          </p>
        </section>
        
        {/* --- The Challenge --- */}
        <section>
          <h2>The Challenge</h2>
          <ol>
            <li>Design a cohesive interface that’s intuitive for both familiar and unfamiliar users.</li>
            <li>Create a modern, minimalistic UI that effectively condenses and presents large volumes of historical data.</li>
            <li>Eliminate barriers to entry to ensure easy and immediate user engagement on application startup.</li>
            <li>Deliver a complete and polished product within a short timeframe.</li>
          </ol>
        </section>

        {/* --- Competitive Analysis --- */}
        <section>
          <h2>Competitive Analysis</h2>
          <p>
            <strong>Note:</strong> CCIM is a non-profit, educational project focused on raising awareness, not competing. While there are many similar virtual museums, none are direct competitors. However, from indirect competition, CCIM has the opportunity to combine the strongest elements from each to create a better user experience.
          </p>
          {/* 2. Add the competitor logos gallery */}
          <div className="competitor-logos">
            <img src={CompetitorChsa} alt="Chinese Historical Society of America Logo" />
            <img src={CompetitorNmwa} alt="National Museum of Women in the Arts Logo" />
            <img src={CompetitorCmh} alt="Canadian Museum of History Logo" />
            <img src={CompetitorSmithsonian} alt="Smithsonian Logo" />
          </div>
          <p>
            The majority of features across competitors are similar, but the key differences include:
          </p>
          <ul>
            <li>Easily accessible vs hardly accessible.</li>
            <li>Balance between sufficient info and minimalistic UI.</li>
            <li>Lack of colour vs colours that hinder accessibility.</li>
          </ul>
        </section>

        {/* --- The Process --- */}
        <section>
          <h2>My Process</h2>

          <h3>Information Architecture</h3>
          <p>I created a sitemap to visually plan the structure of the website. It made sure the flow between pages was clear and logical.</p>
          <img src={Sitemap} alt="CCIM Sitemap" className="case-study-image" />
          
          <h3>Paper Sketches</h3>
          <p>I began with paper wireframes to rapidly sketch and iterate on ideas. It was a fast, flexible way to get ideas out and start shaping the user experience.</p>
          <div className="image-gallery">
            <img src={PaperSketch1} alt="Paper wireframe sketches for various pages" className="case-study-image" />
            <img src={PaperSketch2} alt="Paper wireframe sketches for the timeline page" className="case-study-image" />
          </div>

          <h3>Wireframes</h3>
          <p>After rapidly exploring layout ideas with paper wireframes, I moved into Figma to create low-fidelity digital wireframes. This allowed me to organize the structure more cleanly while keeping the focus on layout and functionality.</p>
          {/* <img src="/path/to/wireframes.png" alt="Low-fidelity wireframes" className="case-study-image" /> */}

          <h3>Low-Fidelity Prototypes</h3>
          <p>Once the wireframes were in place, I turned them into a low-fidelity prototype by adding basic interactions and user flows in Figma. This helped simulate how users would navigate through the product.</p>
          <img src={LowFiPrototype} alt="Low-fidelity prototype showing user flow" className="case-study-image" />
          
          <h3>Design System</h3>
          <p>Before moving on to mockups, I created a design system and sticker sheet to ensure visual consistency. This included defining colors, typography, buttons, and reusable components.</p>
          <div className="image-gallery">
            <img src={DesignSystem1} alt="Design system for typography, colors, and icons" className="case-study-image" />
            <img src={DesignSystem2} alt="Design system for footer, buttons, and logos" className="case-study-image" />
          </div>
          
          <h3>High-Fidelity Prototypes</h3>
          <p>After finalizing the low-fidelity prototype, I transitioned into mockups and high-fidelity prototypes by applying colors, branding, typography, and layout details to create a polished, user-friendly interface.</p>
          <img src={HighFiPrototype} alt="High-fidelity prototype mockup" className="case-study-image" />
        </section>

        {/* --- Takeaway & Moving Forward --- */}
        <section>
          <h2>Takeaway</h2>
          <p>As a Chinese immigrant, this project holds deep personal meaning—being able to preserve and share the history of my community is something I’m proud of. It was my first time using a user-centered design framework, and I gained a deeper understanding of the thoughtful decisions needed to create a strong user experience. Along the way, I also picked up valuable skills in tools like Figma and Webflow.</p>
          
          <h2>Moving Forward</h2>
          <p>Next steps for this project include filling the timeline with rich, meaningful content that tells the true story of Chinese immigration in Canada. By adding real historical data, personal stories, and visuals, the goal is to transform this into a powerful educational resource.</p>
        </section>
      </article>
    </div>
  );
}

export default CcimCaseStudy;
