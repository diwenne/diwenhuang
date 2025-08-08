interface ProjectItemProps {
  icon: string;
  title: string;
  subtitle: string;
  link: string;
}

function ProjectItem({ icon, title, subtitle, link }: ProjectItemProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="list-item">
      <div className="item-details">
        <span className="item-icon">{icon}</span>
        <div className="item-title-group">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <span className="item-date">↗</span>
    </a>
  );
}

export default ProjectItem;