import ProjectItem from '../components/ProjectItem';
import Breadcrumbs from '../components/Breadcrumbs';

// Add your projects here
const projectData = [
  {
    icon: '🎨',
    title: 'Portfolio Website',
    subtitle: 'The site you are on right now! Built with React & Vite.',
    link: 'https://github.com/your-username/your-repo'
  },
  {
    icon: '🤖',
    title: 'Discord Bot',
    subtitle: 'A TypeScript bot for managing server tasks.',
    link: 'https://github.com/your-username/your-repo'
  },
  {
    icon: '📈',
    title: 'Data Visualizer',
    subtitle: 'A web app for visualizing complex datasets with D3.js.',
    link: 'https://github.com/your-username/your-repo'
  }
];

function Projects() {
  return (
    <div className="page-container">
      <Breadcrumbs pageName="projects" />
      <h1>Projects</h1>
      <div className="list-view">
        {projectData.map((item, index) => (
          <ProjectItem
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;