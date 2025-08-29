import SmashSpeedLogo from '../assets/smashspeed.png';

import ProjectItem from '../components/ProjectItem';  
import Breadcrumbs from '../components/Breadcrumbs'; 

  // --- Main Page Data & Component ---

  const projectData = [
    {
      icon: SmashSpeedLogo,
      title: 'Smashspeed iOS',
      subtitle: 'User-friendly app to calculate badminton smash speed.',
      link: 'https://smashspeed.ca',
      description: 'Developed and launched a native iOS application that provides badminton players with a powerful tool to measure their smash speed. Built with SwiftUI for a clean and responsive interface, the app leverages a custom CoreML model for on-device analysis. Users can import videos of their smashes, and the app automatically processes the footage to provide an accurate speed reading. Trusted by amateur and national-level players alike, Smashspeed serves as a valuable training aid for athletes looking to track their performance and improvement.',
      tags: ['SwiftUI', 'CoreML', 'iOS', 'Product Development']
    },
    {
      icon: SmashSpeedLogo,
      title: 'Smashspeed (ML Engine)',
      subtitle: 'Custom ML model to detect shuttlecocks and calculate speed.',
      link: '/projects/smashspeed-engine',
      description: 'Engineered the core machine learning pipeline for the Smashspeed app, beginning with the collection and annotation of a custom dataset of over 3,000 shuttlecock images. I trained a lightweight YOLOv5 model for real-time object detection and implemented a Kalman Filter to accurately track the shuttlecock\'s trajectory, even with high-speed motion blur. This robust tracking logic allows for precise speed calculation based on the object\'s displacement between frames, forming the powerful yet efficient engine that drives the iOS application.',
      tags: ['Python', 'PyTorch', 'YOLOv5', 'Kalman Filters', 'Machine Learning']
    },
    {
      icon: '📖',
      title: 'Programming Faststart Series',
      subtitle: 'Textbooks teaching coding in the age of AI.',
      link: '/projects/faststart-series',
      description: 'Authored and self-published a series of textbooks designed to modernize the way beginners learn to code. The books, starting with Python and Swift, emphasize a hands-on, project-based approach, teaching fundamental concepts with the assumption that AI tools are available to supplement learning. The series focuses on developing problem-solving skills and preparing new programmers for the modern development landscape.',
      tags: ['Python', 'Swift', 'Authoring', 'Design', 'Publishing', 'AI in Education']
    },
    {
      icon: '🍲',
      title: 'Regen',
      subtitle: 'AI-powered website that generates recipes from food photos.',
      link: 'https://github.com/seanhuangcode/ReGen',
      description: 'A website that takes in photos of food items and uses the Gemini API to generate a custom-tailored recipe. It won 2nd place in a Vancouver hackathon.',
      tags: ['HTML', 'CSS', 'Gemini API']
    },
    {
      icon: '🏛️',
      title: 'Chinese Canadian Immigration Museum',
      subtitle: 'Designing a website for a virtual museum using UX frameworks.',
      link: '/projects/ccim',
      description: 'A case study in UX design for a virtual museum, focusing on user-centered design principles, information architecture, and prototyping.',
      tags: ['UX Design', 'Figma', 'Product Design', 'Prototyping']
    }
  ];

  function Projects() {
    return (
      <div className="page-container">
        <Breadcrumbs pageName="projects" />
        <h1>projects</h1>
        <div className="list-view">
          {projectData.map((item, index) => (
            <ProjectItem
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
              description={item.description}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    );
  }

  export default Projects;

