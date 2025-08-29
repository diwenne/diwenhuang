import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  pageName: string;
}

function Breadcrumbs({ pageName }: BreadcrumbsProps) {
  const pathSegments = pageName.split('/');
  let currentPath = '';

  return (
    <div className="breadcrumbs">
      <Link to="/">home</Link>
      
      {pathSegments.map((segment, index) => {
        const cleanSegment = segment.trim();
        // Return null if segment is empty to avoid extra slashes
        if (!cleanSegment) return null;
        currentPath += `/${cleanSegment}`;
        const isLast = index === pathSegments.length - 1;

        return (
          <React.Fragment key={cleanSegment}>
            {/* Added a 'separator' class to this span */}
            <span className="separator"> / </span>
            {isLast ? (
              <span>{cleanSegment}</span>
            ) : (
              <Link to={currentPath}>{cleanSegment}</Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;

