import WorkItem from '../components/WorkItem';
import Breadcrumbs from '../components/Breadcrumbs';

// 👇 Add a "date" property to each item
const workData = [
  {
    icon: '🏢',
    title: 'Software Engineer',
    company: 'Tech Corp', // I removed the date from here
    date: '2022 - Present', // And put it here
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.'
  },
  {
    icon: '💼',
    title: 'Junior Developer',
    company: 'Innovate LLC',
    date: '2020 - 2022',
    description: 'Assisted in the development of mobile-first websites and contributed to the company\'s open-source component library.'
  }
];

function Work() {
  return (
    <div className="page-container">
      <Breadcrumbs pageName="work" />
      <h1>Work Experience</h1>
      <div className="list-view">
        {workData.map((item, index) => (
          <WorkItem
            key={index}
            icon={item.icon}
            title={item.title}
            company={item.company}
            date={item.date} // <-- Pass the new date prop
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;