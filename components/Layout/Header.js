import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { useUser, UserButton } from "@clerk/nextjs"; // Import UserButton
import ButtonOutline from "../misc/ButtonOutline.";
import Masakin from "../../public/assets/LOGOOSR.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const { isLoaded, user } = useUser(); // Fetch the authenticated user's info

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white-500 transition-all " +
          (scrollActive ? "shadow-md pt-0" : "pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Masakin className="h-12 w-auto" />
            <span className="ml-2 text-xl font-semibold">Sapta Rasa</span>
          </div>

          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
            <LinkScroll
              activeClass="active"
              to="acara"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("acara");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "acara"
                  ? "text-yellow-500 animation-active"
                  : " text-black-500 hover:text-yellow-500")
              }
            >
              Acara
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="acara"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("acara");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "acara"
                  ? " text-yellow-500 animation-active "
                  : " text-black-500 hover:text-yellow-500")
              }
            >
              Resep
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="acara"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("acara");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "acara"
                  ? " text-yellow-500 animation-active "
                  : " text-black-500 hover:text-yellow-500")
              }
            >
              Kompetisi
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="acara"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("acara");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "acara"
                  ? " text-yellow-500 animation-active "
                  : " text-black-500 hover:text-yellow-500")
              }
            >
              Kontak
            </LinkScroll>
            {/* Add other navigation links here */}
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            {isLoaded && user ? (
              <div className="flex items-center space-x-4">
                <span className="text-black-500 font-semibold">
                  {user.fullName || "User"}
                </span>
                <UserButton /> {/* Replace with UserButton */}
              </div>
            ) : (
              <>
                <Link href="/signin">
                  <ButtonOutline className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 hover:text-white hover:shadow-lg transition-all">
                    Daftar Peserta
                  </ButtonOutline>
                </Link>
                <Link href="/info">
                  <ButtonOutline className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 hover:text-white hover:shadow-lg transition-all">
                    Info Lebih Lanjut
                  </ButtonOutline>
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="acara"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("acara");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "acara"
                  ? "  border-yellow-500 text-yellow-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Acara
            </LinkScroll>
            {/* Add other mobile navigation links here */}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
