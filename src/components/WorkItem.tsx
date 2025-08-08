import { useState } from 'react';

interface WorkItemProps {
  icon: string;
  title: string;
  company: string;
  date: string; // <-- Add date to the interface
  description: string;
}

function WorkItem({ icon, title, company, date, description }: WorkItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // This wrapper holds the item and its expandable description
    <div className="list-item-wrapper">
      <div className="list-item" onClick={() => setIsExpanded(!isExpanded)}>
        {/* This group contains the icon, title, and company */}
        <div className="item-details">
          <span className="item-icon">{icon}</span>
          <div className="item-title-group">
            <h3>{title}</h3>
            <p>{company}</p>
          </div>
        </div>
        {/* The date is now a separate element for easy positioning */}
        <span className="item-date">{date}</span>
      </div>
      {isExpanded && <p className="item-content">{description}</p>}
    </div>
  );
}

export default WorkItem;