import React, { useRef } from "react";
import SearchIcon from '../../assets/icons/search-icon.svg';
import SortIcon from '../../assets/icons/sort-icon-two.svg';
import styles from './Navbar.module.css';
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setSortText } from "../../feature/articleSlice";
import { RootState } from "../../app/store";
import { SortByType } from "../../types/articleType";

const Navbar = () => {
  const dispatch = useDispatch();
  const {sortBy, seachText} = useSelector((state: RootState) => state.article)
  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = inputRef.current?.value;
    if(value !== seachText){
      dispatch(setSearchText(value ? value : ''));
    }
  }

  const sortHandler = (sortType: SortByType) => {
    const sortValue = sortBy === sortType ? '' : sortType;
    dispatch(setSortText(sortValue));
  } 

  return (
    <nav id="uv-navbar" className={"navbar px-3 py-3 px-md-3 px-lg-4 " + styles.purpleNav}>
      <div className="container-fluid">
        <a className={"navbar-brand paytone-one-regular d-none d-md-block d-lg-block " + styles.logoColor} href="#">
          Upvote
        </a>
        <a className={"navbar-brand paytone-one-regular d-block d-md-none d-lg-none " + styles.logoColor} href="#">
          UV
        </a>
        <div className={"d-flex " + styles.menuItem}>
          <form onSubmit={searchHandler} className="d-flex" role="search" style={{ width: "100%" }}>
            <input
              ref={inputRef}
              name="search"
              autoComplete="off"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ flex: 1 }} // Makes input field flexible
            />
            <button className={"btn tn btn-light me-2 d-none d-md-none d-lg-block " + (seachText !== '' ? styles.buttonWithDot: '')} type="submit">
              Search
            </button>
            <button className={"btn tn btn-light me-2 d-block d-md-block d-lg-none searchButton" + (seachText !== '' ? styles.buttonWithDot: '')} type="submit">
              <img className="iconImage" src={SearchIcon} alt="search icon"/>
            </button>
          </form>
          <div className="dropdown">
            <button
              className={"btn tn btn-light d-none d-md-none d-lg-block " + (sortBy !== '' ? styles.buttonWithDot: '')}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort
            </button>
            <button
              className={"btn tn btn-light d-block d-md-block d-lg-none sortButton " + (sortBy !== '' ? styles.buttonWithDot: '')}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img className="iconImage" src={SortIcon} alt="sort icon"/>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
              <li onClick={() => sortHandler('DATE')} className={sortBy === 'DATE' ? styles.active : ''}>
                <p className="dropdown-item my-0" >
                  Sort By Date
                </p>
              </li>
              <li onClick={() => sortHandler('VOTE')} className={sortBy === 'VOTE' ? styles.active : ''}>
                <p className="dropdown-item my-0" >
                  Sort By Upvotes
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
