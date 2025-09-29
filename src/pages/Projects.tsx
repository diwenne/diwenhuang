import SmashSpeedLogo from '../assets/smashspeed.png';
import ArxivLogo from '../assets/arxiv.png';
import steve from '../assets/steve.png';

import ProjectItem from '../components/ProjectItem';
import Breadcrumbs from '../components/Breadcrumbs';

// --- Main Page Data & Component ---

const projectData = [
  {
    icon: steve,
    title: 'Steve the Freakysaur',
    subtitle: 'Daydream Game Jam 2025 — 1st Place Winner',
    link: 'https://haocuii.itch.io/steve-the-freakysaur',
    date: 'September 2025',
    description: 'Co-created “Steve the Freakysaur,” a Chrome Dino–style game controlled entirely hands-free using tongue detection through real-time facial landmark segmentation. Built during BC’s biggest youth hackathon (Daydream Game Jam), which was also the largest Daydream event in North America, the project won 1st place out of 124 participants and 50+ projects. The game features single-player, two-player, and Flappy Bird–style modes, and was prototyped in Pygame before being ported to Next.js with TypeScript for web play.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Pygame', 'Computer Vision', 'Hackathon', 'Game Development', 'Segmentation Model']
  },
  {
    icon: ArxivLogo,
    title: 'Shuttlecock Trajectory & Speed Estimation',
    subtitle: 'Published original research in computer vision and multimedia.',
    link: 'https://www.arxiv.org/abs/2509.05334',
    date: 'September 2025',
    description: 'Authored and published original research detailing a novel pipeline for accurately tracking badminton shuttlecock trajectories. This work, which forms the scientific foundation for the Smashspeed app, was conducted under the guidance of mentors including a University of Pennsylvania M.Eng and a Stanford PhD. The paper contributes to the fields of multimedia (cs.MM) and computer vision (cs.CV) by introducing a robust methodology for object detection and state estimation of small, high-velocity objects.',
    tags: ['Original Research', 'arXiv', 'Computer Vision', 'Multimedia', 'Deep Learning', 'PyTorch', 'Academic Publishing']
  },
  {
    icon: '📖',
    title: 'Programming Faststart Series',
    subtitle: 'Textbooks teaching coding in the age of AI.',
    link: '/projects/faststart-series',
    date: 'August 2025',
    description: 'Authored and self-published a series of textbooks designed to modernize the way beginners learn to code. The books, starting with Python and Swift, emphasize a hands-on, project-based approach, teaching fundamental concepts with the assumption that AI tools are available to supplement learning. The series focuses on developing problem-solving skills and preparing new programmers for the modern development landscape. Swift Faststart achieved Amazon #1 Best Seller status in September 2025 (Mobile App Development & Programming).',
    tags: ['Python', 'Swift', 'Authoring', 'Design', 'Publishing', 'AI in Education', 'Amazon Best Seller']
  },
  {
    icon: '🌐',
    title: 'Personal Website',
    subtitle: 'My personal portfolio built with React and TypeScript.',
    link: 'https://diwenhuang.ca',
    date: 'August 2025',
    description: 'The website you\'re currently on! I developed this portfolio from scratch with a focus on a simple, aesthetic, and intuitive user experience. It was built using React with Vite for a fast and modern development experience, TypeScript for type safety, and plain CSS for precise control over the design and animations.',
    tags: ['React', 'TypeScript', 'CSS', 'Vite']
  },
  {
    icon: SmashSpeedLogo,
    title: 'Smashspeed',
    subtitle: 'Viral iOS app & ML engine to calculate badminton smash speed.',
    link: '/projects/smashspeed-engine', // MODIFIED: Link now points to the case study
    date: 'July 2025',
    description: 'As the Founder and Lead Developer of a 6-person team, I developed and launched Smashspeed, an iOS app that has been downloaded by over 10,000 users, achieved a peak ranking of #2 in the App Store (Sports), and gained over 1 million views online through viral content. The app allows badminton players to measure their smash speed by simply importing a video. The front-end was built natively with SwiftUI, and its core is a custom machine learning pipeline I engineered based on my published research.',
    tags: ['Founder', 'Leadership', 'SwiftUI', 'CoreML', 'iOS', 'Product Development', 'Python', 'PyTorch', 'YOLOv5', 'Kalman Filters', 'Machine Learning']
  },
  {
    icon: '🏛️',
    title: 'Chinese Canadian Immigration Museum',
    subtitle: 'Designing a website for a virtual museum using UX frameworks.',
    link: '/projects/ccim',
    date: 'March 2025',
    description: 'A case study in UX design for a virtual museum, focusing on user-centered design principles, information architecture, and prototyping.',
    tags: ['UX Design', 'Figma', 'Product Design', 'Prototyping']
  },
  {
    icon: '🍲',
    title: 'Regen',
    subtitle: 'AI-powered website that generates recipes from food photos.',
    link: 'https://github.com/seanhuangcode/ReGen',
    date: 'Jan 2025',
    description: 'A website that takes in photos of food items and uses the Gemini API to generate a custom-tailored recipe. It won 2nd place in a Vancouver hackathon.',
    tags: ['HTML', 'CSS', 'Gemini API']
  },
  
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
            date={item.date}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;