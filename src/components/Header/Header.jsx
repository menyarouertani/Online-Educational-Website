import React, { useRef, useState } from "react";
import { Container } from "reactstrap";
import "./header.css";
import logo from "../../assests/images/logo-ted.png";

const navLinks = [
  {
    display: "Ted university",
    url: "#",
    dropdownItems: [
      { display: "Qui sommes nous?", url: "#" },
      { display: "Mission & Vision", url: "#" },
      { display: "Contact", url: "#" },
    ],
  },
  {
    display: "programmes",
    url: "#",
    dropdownItems: [
      { display: "Undergraduate", url: "#" },
      { display: "Postgraduate", url: "#" },
    ],
  },
  {
    display: "admissions",
    url: "#",
    dropdownItems: [
      { display: "Application Process", url: "#" },
      { display: "Requirements", url: "#" },
    ],
  },
  {
    display: "certifications",
    url: "#",
  },
  {
    display: "références",
    url: "#",
  },
  {
    display: "login",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1"></h2>
          </div>
          <img src={logo} className="image-logo" />

          <div className={`nav d-flex align-items-center gap-5 ${isMenuActive ? 'active__menu' : ''}`} ref={menuRef}>
            <div className="nav__menu" onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url} className="nav__link">
                      {item.display}
                    </a>
                    {item.dropdownItems && item.dropdownItems.length > 0 && (
                      <ul className="dropdown__list">
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <li key={dropdownIndex} className="dropdown__item">
                            <a href={dropdownItem.url}>{dropdownItem.display}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +216 27 294 294
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

