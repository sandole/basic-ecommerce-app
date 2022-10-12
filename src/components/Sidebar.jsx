import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-primary text-warning">
      <ul>
        <li>
          <Link className="text-warning" to={'/Products'}>
            get all products
          </Link>
        </li>
        <li>
          <Link className="text-warning" to="#">
            get all categories
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
