import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-[99999] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25);]">
      <section className="header p-[20px]">
        <div className="flex items-center justify-between page-container">
          <a href="/" className="inline-block w-[200px] md:w-[277px]">
            <h1>
              <img
                className="w-[100%] h-[100%] object-cover"
                src="/images/logo.png"
                alt=""
              />
            </h1>
          </a>
          <ul className="header-menu hidden md:flex items-center gap-[50px]">
            <li>
              <a
                href="#discovery"
                className="font-bold text-[14px] opacity-75 hover:opacity-100 transition duration-500"
              >
                DISCOVERY DAY LÀ GÌ?
              </a>
            </li>
            <li>
              <a
                href="#benefit"
                className="font-bold text-[14px] opacity-75 hover:opacity-100 transition duration-500"
              >
                LỢI ÍCH
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="font-bold text-[14px] opacity-75 hover:opacity-100 transition duration-500"
              >
                BLOG
              </a>
            </li>
            <li>
              <a
                href="#register"
                className="font-bold text-[14px] opacity-75 hover:opacity-100 transition duration-500"
              >
                ĐĂNG KÝ NGAY
              </a>
            </li>
          </ul>
          <div className="flex items-center">
            <a
              href="tel:(+84) 287 107 7979"
              className="pulse-button w-[200px] text-[12px] hidden md:inline-flex flex-col items-center rounded-[33px] bg-red px-[20px] py-[8px] text-white"
            >
              HOTLINE:
              <span className="text-[16px] font-semibold">
                (+84) 287 107 7979
              </span>
            </a>
            <div
              onClick={() => setShowMenu(!showMenu)}
              className="w-[42px] h-[42px] cursor-pointer block md:hidden"
            >
              <img src="/icons/menu.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div
        className={`${
          showMenu
            ? "translate-x-0 opacity-100"
            : "-translate-x-[100%] opacity-0"
        } transition duration-500 absolute top-[82px] left-0 right-0 menu-mobile bg-blue py-[40px] block md:hidden`}
      >
        <ul className="flex flex-col items-center gap-[50px] text-white">
          <li>
            <a
              onClick={() => setShowMenu(false)}
              href="#discovery"
              className="font-bold text-[14px]"
            >
              DISCOVERY DAY LÀ GÌ?
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowMenu(false)}
              href="#benefit"
              className="font-bold text-[14px]"
            >
              LỢI ÍCH
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowMenu(false)}
              href="#blog"
              className="font-bold text-[14px]"
            >
              BLOG
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowMenu(false)}
              href="#register"
              className="font-bold text-[14px]"
            >
              ĐĂNG KÝ NGAY
            </a>
          </li>
          <a
            href="tel:(+84) 287 107 7979"
            className="w-[200px] text-[12px] inline-flex flex-col items-center rounded-[33px] bg-red px-[20px] py-[8px] text-white"
          >
            HOTLINE:
            <span className="text-[16px] font-semibold">
              (+84) 287 107 7979
            </span>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
