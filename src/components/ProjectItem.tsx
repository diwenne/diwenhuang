import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProjectItemProps {
  icon: string;
  title: string;
  subtitle: string;
  link: string;
  description: string;
  tags: string[];
}

function ProjectItem({ icon, title, subtitle, link, description, tags }: ProjectItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isImagePath = icon.includes('/') || icon.includes('.');
  
  const isInternalLink = link.startsWith('/');

  return (
    <div className="list-item-wrapper">
      <div className="list-item">
        <div className="item-details">
          <div className="item-icon">
            {isImagePath ? (
              <img src={icon} alt={`${title} logo`} />
            ) : (
              <span>{icon}</span>
            )}
          </div>
          <div className="item-title-group">
            <h3>
              {isInternalLink ? (
                <Link to={link}>{title}</Link>
              ) : (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              )}
            </h3>
            <p className="expandable-subtitle" onClick={() => setIsExpanded(!isExpanded)}>
              {subtitle}
            </p>
          </div>
        </div>
        
        <span
          className={`item-toggle ${isExpanded ? 'expanded' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          ›
        </span>

      </div>

      {isExpanded && (
        <>
          <p className="item-content">{description}</p>
          <div className="item-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectItem;
