import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "../features/UseSlice";
import { auth } from "../Request/firebase";
import { signOut } from "firebase/auth";

const NavItem = ({ navigate, path, children }) => (
  <li
    onClick={() => {
      navigate(path);
    }}
    className="hover:text-yellow-500 cursor-pointer"
  >
    {children}
  </li>
);

const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    signOut(auth)
      .then(() => {
        alert("Signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);

  return (
    <header className="padding-x py-6 w-full z-50 bg-black text-white sticky top-0">
      <nav className=" flex justify-between items-center max-container">
        <a
          href="#"
          className="font-bold text-xl cursor-pointer hover:text-yellow-500"
          onClick={() => {
            navigate("/");
          }}
        >
          CellPhones Store
        </a>
        <ul className=" flex gap-16 flex-1 justify-end items-center max-sm:hidden text-base leading-normal">
          <NavItem navigate={navigate} path="/">
            Home
          </NavItem>
          <NavItem navigate={navigate} path="/shop">
            Shop
          </NavItem>
          <NavItem navigate={navigate} path="/cart">
            Cart
          </NavItem>
          {user && <li>{user.email}</li>}
          {!user && (
            <NavItem navigate={navigate} path="/login">
              Login
            </NavItem>
          )}
          {user && (
            <li
              className=" hover:text-yellow-500 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </li>
          )}
        </ul>
        <div>
          <IoIosMenu className="sm:hidden" onClick={toggleMenu} />
        </div>
        <div
          className={`fixed bg-black text-white w-full h-full top-0 left-0 ${
            isOpen ? "block" : "hidden"
          } sm:hidden`}
        >
          <div className="p-5">
            <div className="flex justify-between items-center">
              <div>CellPhones Store</div>
              <div onClick={toggleMenu}>X</div>
            </div>
            <ul className="mt-8 text-center">
              <NavItem navigate={navigate} path="/">
                Home
              </NavItem>
              <NavItem navigate={navigate} path="/shop">
                Shop
              </NavItem>
              <NavItem navigate={navigate} path="/cart">
                Cart
              </NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
