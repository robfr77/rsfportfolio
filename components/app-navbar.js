import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppIcon from './app-icon';
import { colors } from '../utils/helpers';

const IconButton = React.forwardRef(({ name, color, size, href }, ref) => (
  <a href={href} ref={ref}>
    <AppIcon name={['fas', 'home']} color={colors.black} size="2x" />
  </a>
));

const AppNavbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">RSF</div>
        <button
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          type="button"
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div className="logo">
        <Image
          className="img"
          src="/images/hero.jpeg"
          height={80}
          width={78}
          priority
          alt="Robert Friedman with family, by a tree"
        />
      </div>
      <div
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
        id="navbarMenu"
      >
        <div className="navbar-start" />
        <div className="navbar-end">
          <Link href="/" passHref>
            <IconButton name={['fas', 'home']} color={colors.black} size="2x" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
