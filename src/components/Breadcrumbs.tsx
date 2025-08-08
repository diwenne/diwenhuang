import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  pageName: string;
}

function Breadcrumbs({ pageName }: BreadcrumbsProps) {
  return (
    <div className="breadcrumbs">
      <Link to="/">home</Link>
      <span> / </span>
      <span>{pageName}</span>
    </div>
  );
}

export default Breadcrumbs;