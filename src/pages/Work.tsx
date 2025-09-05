import WorkItem from '../components/WorkItem';
import Breadcrumbs from '../components/Breadcrumbs';

import enhanced from '../assets/enhanced.png';

// --- Main Page Data & Component ---

const workData = [
  {
    icon: '💻',
    title: 'Freelance Software Developer & Designer',
    subtitle: 'Self-Employed',
    link: 'https://diwen.dev',
    date: '2025 - Present',
    description:
      'Designing and developing responsive websites for clients, focusing on modern UI/UX practices, performance optimization, and maintainable codebases.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'UI/UX', 'Web Development'],
  },
  {
    icon: enhanced,
    title: 'Badminton Coach',
    subtitle: 'Enhanced Badminton • NCCP Level 2 Certified',
    date: '2024 - Present',
    description:
      'Coaching in various competitions, group lessons, and private lessons, focusing on player development and strategic gameplay.',
    tags: [
      'Leadership',
      'Communication',
      'Mentorship',
      'Strategy',
      'Time Management',
    ],
  },
];

function Work() {
  return (
    <div className="page-container">
      <Breadcrumbs pageName="work" />
      <h1>work experience</h1>
      <div className="list-view">
        {workData.map((item, index) => (
          <WorkItem
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

export default Work;