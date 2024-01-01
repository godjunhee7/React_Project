import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="headerbackground">
      <Link to="/">
        <img src="/image/title.png" alt="Image description" width="280" height="80" />
      </Link>
    </header>
  );
};

export default Header;