import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProjectItemProps {
  icon: string;
  title: string;
  subtitle: string;
  link: string;
  date: string;
  description: string;
  tags: string[];
}

function ProjectItem({
  icon,
  title,
  subtitle,
  link,
  date,
  description,
  tags,
}: ProjectItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isImagePath = icon.includes('/') || icon.includes('.');

  const isInternalLink = link.startsWith('/');

  // Stop propagation on link clicks to prevent expansion when navigating
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="list-item-wrapper">
      <div className="list-item" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="item-details">
          <div className="item-icon">
            {isImagePath ? (
              <img src={icon} alt={`${title} logo`} />
            ) : (
              <span>{icon}</span>
            )}
          </div>
          <div className="item-title-group">
            <h3 onClick={handleLinkClick}>
              {isInternalLink ? (
                <Link to={link}>{title}</Link>
              ) : (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              )}
            </h3>
            <p>{subtitle}</p>
          </div>
        </div>

        <span className="item-date">{date}</span>
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