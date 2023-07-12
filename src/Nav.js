import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./context/DataContext";

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search"> Search Posts </label>
        <input
          type="text"
          id="search"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <Link to="/">
          <li> Home </li>
        </Link>
        <Link to="post">
          <li> Post </li>
        </Link>
        <Link to="about">
          <li> About </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
