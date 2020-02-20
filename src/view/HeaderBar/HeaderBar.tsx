import * as React from 'react';
import { Link } from 'react-router-dom';
import { ConnectedSearchBar as SearchBar } from 'src/components/SearchBar/index';
import logo from 'src/styles/images/logo.png';

export const HeaderBar = () => (
  <div className="banner sections">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo"></img>
      </Link>
    </div>
    <SearchBar />
  </div>
);
