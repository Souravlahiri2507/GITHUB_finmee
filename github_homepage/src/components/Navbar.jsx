import React from "react";
import "../css/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";

import { GoIssueOpened } from "react-icons/go";
import {
  AiFillCaretDown,
  AiFillGithub,
  AiOutlinePlus,
  AiOutlinePullRequest,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <a href="/">
            <div className="hamburger-icon">
              <GiHamburgerMenu />
            </div>
            <div className="github-logo">
              <AiFillGithub />
            </div>
            <div className="navbar-text">
              <span>Dashboard</span>
            </div>
          </a>
        </div>

        <div className="navbar-links">
          <div className="search-input">
            <input type="text" placeholder="Type / to search" />
            <div className="search-icon">
              <BiSearch />
            </div>
          </div>

          <div class="menu-button">
            <AiOutlinePlus />
            <AiFillCaretDown />
          </div>

          <div className="menu-popup">
            <a className="menu-item" href="/new">
              New repository
            </a>
            <a className="menu-item" href="/import">
              Import repository
            </a>
            <a className="menu-item" href="/new-organisation">
              New Organisation
            </a>
            <a className="menu-item" href="/new-project">
              New Project
            </a>
          </div>

          <a className="menu-button" href="/issues">
            <GoIssueOpened />
          </a>

          <a className="menu-button" href="/pull">
            <AiOutlinePullRequest />
          </a>

          <div className="menu-button">
            <RxAvatar />
          </div>
        </div>
      </div>

      <div class="menu-popup">
        <a class="menu-item" href="/profile">
          Your Profile
        </a>
        <a class="menu-item" href="/repo">
          Your repositories
        </a>
        <a class="menu-item" href="/projects">
          Your Projects
        </a>
        <a class="menu-item" href="/stars">
          Your stars
        </a>
      </div>
    </>
  );
};

export default Navbar;
