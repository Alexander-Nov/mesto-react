import React from 'react';
import logoPath from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Логотип с надписью Место Россия" />
    </header>
  );
}

export default Header;