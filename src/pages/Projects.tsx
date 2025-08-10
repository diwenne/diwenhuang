import ProjectItem from '../components/ProjectItem';
import Breadcrumbs from '../components/Breadcrumbs';
import SmashSpeedLogo from '../assets/smashspeed.png';

const projectData = [
  {
    icon: SmashSpeedLogo,
    title: 'Smashspeed iOS',
    subtitle: 'User-friendly app to calculate badminton smash speed.',
    link: 'https://smashspeed.ca',
    description: 'A user-friendly app for iOS and macOS that uses a machine learning model to accurately calculate the speed of a badminton smash.',
    tags: ['SwiftUI', 'CoreML']
  },
  {
    icon: SmashSpeedLogo,
    title: 'Smashspeed (ML Engine)',
    subtitle: 'Custom ML model to detect shuttlecocks and calculate speed.',
    link: 'https://github.com/diwenne/smashspeed_ios',
    description: 'Collected over 3000 images to train a custom YOLOv5 machine learning model. Implemented logic using Kalman Filters for detection and speed calculation.',
    tags: ['Python', 'PyTorch', 'YOLOv5', 'Kalman Filters', 'Machine Learning']
  },
  {
    icon: '📖',
    title: 'Python Faststart',
    subtitle: 'A textbook teaching how to learn coding in the age of AI.',
    link: '#', // Replace with your link
    description: 'A Python textbook and concept that teaches with AI’s presence in mind, focusing on how to learn coding effectively in the modern age of AI.',
    tags: ['Python', 'Authoring', 'Design', 'Publishing']
  },
  // {
  //   icon: '🤪',
  //   title: 'Nonotes',
  //   subtitle: 'Unconventional, comically useless note-taking software.',
  //   link: '#', // Replace with your link
  //   description: 'An unconventional note-taking software designed to be comically useless. It won 4th place in a Vancouver hackathon.',
  //   tags: ['React', 'JavaScript', 'Tailwind CSS']
  // },
  // {
  //   icon: '🤖',
  //   title: 'Profanity Police',
  //   subtitle: 'Discord bot to detect and delete profanity using a custom AI.',
  //   link: '#', // Replace with your link
  //   description: 'A Discord bot that detects and deletes profanity using custom logic and a custom-trained AI model. It won 3rd place in a Vancouver hackathon.',
  //   tags: ['Machine Learning', 'Discord API', 'Python']
  // },
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
    link: '/projects/ccim', // Internal link to the case study page
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