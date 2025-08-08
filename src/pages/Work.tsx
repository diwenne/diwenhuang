import WorkItem from '../components/WorkItem';
import Breadcrumbs from '../components/Breadcrumbs';



const workData = [
  {
    icon: '🏸',
    title: 'Badminton Coach',
    subtitle: 'Enhanced Badminton • NCCP Level 2 Certified',
    date: '2024 - Present',
    description: 'Coaching in various competitions, group lessons, and private lessons, focusing on player development and strategic gameplay.',
    tags: ['Leadership', 'Communication', 'Mentorship', 'Strategy', 'Time Management']
  }
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