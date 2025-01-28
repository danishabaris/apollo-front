"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, MegaMenu, Navbar } from "flowbite-react";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="header shadow-md sticky top-0">
        <div className="xs:px-6 lg:px-16">
          <MegaMenu className="p-0">
            <div className="mx-auto w-full flex max-w-screen-xl flex-wrap items-center justify-between py-3 px-0 ">
              <Navbar.Brand href="/">
                <Image
                  src={"/images/logo.jpg"}
                  width={120}
                  height={40}
                  alt="Apollo"
                />
              </Navbar.Brand>
              <div className="order-2 hidden items-center xs:hidden lg:flex">
                <Link
                  href="/demo"
                  className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 border dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
                >
                  Get a Demo
                </Link>
                <Link href="/login" className="bg-black p-2 text-white rounded-md me-2">
                  Login
                </Link>
                <Link href="/sign-up" className="bg-black p-2 text-white rounded-md">Sign up</Link>
              </div>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <MegaMenu.Dropdown toggle={<>Our Services</>}>
                  <ul className="grid grid-cols-3 max-w-screen-xl">
                    <div className="space-y-4 p-4">
                      <li>
                        <Link
                          href="/lead-generation"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Lead Generation
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Library
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Pro Version
                        </a>
                      </li>
                    </div>
                    <div className="space-y-4 p-4">
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Terms
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Blog
                        </a>
                      </li>
                    </div>
                    <div className="space-y-4 p-4">
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Playground
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          License
                        </a>
                      </li>
                    </div>
                  </ul>
                </MegaMenu.Dropdown>
                

                <Link href="/privacy">Privacy</Link>
                <Link href="/blogs">Blogs</Link>
                <Link href="/contact">Contact</Link>
              </Navbar.Collapse>
            </div>
          </MegaMenu>
        </div>
      </header>
    </>
  );
};

export default Header;
