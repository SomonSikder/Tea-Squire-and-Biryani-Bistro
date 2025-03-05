import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/header.css";

import { useDispatch, useSelector } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

const nav_links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show-menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll", null);
  }, []);

  return (
    <header className="header h-auto" ref={headerRef}>
      <Container>
        <div className="nav-wrapper d-flex justify-content-between align-items-center">
          <div className=" flex-col justify-items-center align-items-center">
            <img src={logo} alt="logo" className="" />
            <h5 className="">Tea Squire and Biryani Bistro</h5>
          </div>
          {/* =========Menu========= */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5 ">
              {nav_links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active-menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* =========Nav right icons========= */}
          <div className="nav-right d-flex align-items-center gap-3">
            <span className="cart-icon" onClick={toggleCart}>
              {" "}
              <i className="ri-shopping-bag-line"></i>
              <small className="cart-badge">{totalQuantity}</small>
            </span>

            <span className="user">
              <Link to="login">
                <i className="ri-user-line"></i>{" "}
              </Link>
            </span>

            <span className="mobile-menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>{" "}
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
