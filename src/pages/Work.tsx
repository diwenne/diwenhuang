import WorkItem from '../components/WorkItem';
import Breadcrumbs from '../components/Breadcrumbs';

import enhanced from '../assets/enhanced.png';
import StemsphereLogo from '../assets/stemsphere.png';
import SolaceLogo from '../assets/solace.png';

// --- Main Page Data & Component ---

const workData = [
  {
    icon: SolaceLogo,
    title: 'Product Manager & Software Developer',
    subtitle: 'Solace • UC Berkeley Web3 Startup',
    link: 'https://solacelaunch.com',
    date: '2025 - Present',
    description:
      'Building an AI wellness agent for a Web3 startup based at UC Berkeley, backed by Virtuals Protocol. Leading product development and engineering iOS and Android applications using React Native and TypeScript.',
    tags: ['Product Management', 'React Native', 'TypeScript', 'iOS', 'Android', 'Web3', 'AI', 'Mobile Development'],
  },
  {
    icon: StemsphereLogo,
    title: 'President',
    subtitle: 'Stemsphere Foundation',
    link: 'https://stemsf.org',
    date: '2025 - Present',
    description:
      'Founded a non-profit with the mission to provide STEM education and mentorship for young people. I lead a team of 8 executive directors to develop and execute programs that empower the next generation of innovators and problem-solvers.',
    tags: ['Founder', 'Leadership', 'Management', 'Non-Profit', 'STEM Education'],
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