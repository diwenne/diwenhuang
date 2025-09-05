import { useState } from "react";
import type { MouseEvent } from "react";

interface WorkItemProps {
  icon: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function WorkItem({
  icon,
  title,
  subtitle,
  date,
  description,
  tags,
  link,
}: WorkItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isImagePath = icon.includes("/") || icon.includes(".");

  const handleToggle = () => setIsExpanded((v) => !v);
  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <div className="list-item-wrapper">
      <div className="list-item" onClick={handleToggle}>
        <div className="item-details">
          <div className="item-icon">
            {isImagePath ? <img src={icon} alt={`${title} logo`} /> : <span>{icon}</span>}
          </div>

          <div className="item-title-group">
            <h3>
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={stop} // don't toggle when clicking the title link
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>
            <p className="expandable-subtitle">{subtitle}</p>
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