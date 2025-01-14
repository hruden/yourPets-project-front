import React from 'react';
import { NavLink } from 'react-router-dom';

export const NoticeCategoriesNav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/notice/sell" />
            sell
          </li>
          <li>
            <NavLink to="/notice/lost-found" />
            lost/found
          </li>
          <li>
            <NavLink to="/notice/in-good-hands" />
            in good hands
          </li>
        </ul>
      </nav>
    </>
  );
};
