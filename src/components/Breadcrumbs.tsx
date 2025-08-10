import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  pageName: string;
}

function Breadcrumbs({ pageName }: BreadcrumbsProps) {
  // Split the pageName string by '/' to handle nested paths
  const pathSegments = pageName.split('/');

  let currentPath = ''; // To build the link URL incrementally

  return (
    <div className="breadcrumbs">
      <Link to="/">home</Link>
      
      {/* Map over each part of the path */}
      {pathSegments.map((segment, index) => {
        // Add the current segment to the path for the link's URL
        currentPath += `/${segment}`;
        
        // Check if this is the last item in the breadcrumb trail
        const isLast = index === pathSegments.length - 1;

        return (
          <React.Fragment key={segment}>
            <span> / </span>
            {isLast ? (
              // If it's the last one, render it as plain text
              <span>{segment}</span>
            ) : (
              // Otherwise, render it as a link
              <Link to={currentPath}>{segment}</Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
