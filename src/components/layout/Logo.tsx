import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { siteConfig } from '../../config/site';

export function Logo() {
  return (
    <Link
      to="/"
      className="flex min-h-11 items-center"
      aria-label={`${siteConfig.businessName} home`}
    >
      <img
        src={logo}
        alt={siteConfig.businessName}
        className="h-12 w-auto"
        width="180"
        height="64"
      />
    </Link>
  );
}
