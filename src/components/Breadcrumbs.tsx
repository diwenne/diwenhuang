import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  pageName: string;
}

function Breadcrumbs({ pageName }: BreadcrumbsProps) {
  const pathSegments = pageName.split('/');
  let currentPath = '';

  return (
    // MODIFIED: This component now uses a wrapper to center itself.
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="breadcrumbs">
        <Link to="/">home</Link>
        
        {pathSegments.map((segment, index) => {
          const cleanSegment = segment.trim();
          currentPath += `/${cleanSegment}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <React.Fragment key={cleanSegment}>
              <span> / </span>
              {isLast ? (
                <span>{cleanSegment}</span>
              ) : (
                <Link to={currentPath}>{cleanSegment}</Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Breadcrumbs;
