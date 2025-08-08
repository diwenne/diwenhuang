import { useState } from 'react';

interface WorkItemProps {
  icon: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags: string[];
}

function WorkItem({ icon, title, subtitle, date, description, tags }: WorkItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // ✅ FIX: Add logic to handle both images and emojis
  const isImagePath = icon.includes('/') || icon.includes('.');

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
            <h3>{title}</h3>
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

export default WorkItem;