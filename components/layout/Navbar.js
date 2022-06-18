import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="max-w-6xl  mx-auto px-4 py-2">
      <div className="flex md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="text-gray-800 font-bold">
                Alberto Márquez
              </h1>
              <p className="font-normal text-gray-600">
                Full Stack Chemical Engineer
              </p>
            </a>
          </Link>
        </div>
        <div className="block md:hidden">
            <div className="space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hidden "}>
              <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between">
                <li className="border-b border-gray-600 font-normal mt-8 uppercase">
                  <a href="/aboutme">About me</a>
                </li>
                <li className="border-b border-gray-600 font-normal mt-8 uppercase">
                  <a href="/business">Business</a>
                </li>
                <li className="border-b border-gray-600 font-normal mt-8 uppercase">
                  <a href="/polymers">Polymers</a>
                </li>
                <li className="border-b border-gray-600 font-normal mt-8 uppercase">
                  <a href="/projects">Portfolio</a>
                </li>
                <li className="border-b border-gray-600 font-normal mt-8 uppercase">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
        </div>
        <div className="space-x-8 hidden md:block">
          <Link href="/aboutme">
              <a className={`text-base  ${ router.asPath === "/aboutme" ? "text-gray-800 font-bold" : "text-gray-600 font-normal "}`}>
                About me
                {router.asPath === "/aboutme" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-down inline-block h-3 w-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                )}
              </a>
          </Link>
          <Link href="/business">
            <a
              className={`text-base  ${
                router.asPath === "/business"
                  ? "text-gray-800 font-bold"
                  : "text-gray-600 font-normal "
              }`}
            >
              Business{" "}
              {router.asPath === "/business" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
          <Link href="/polymers">
            <a
              className={`text-base  ${
                router.asPath === "/polymers"
                  ? "text-gray-800 font-bold"
                  : "text-gray-600 font-normal "
              }`}
            >
              Polymers{" "}
              {router.asPath === "/polymers" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
          <Link href="/projects">
            <a className={`text-base  ${ router.asPath === "/projects" ? "text-gray-800 font-bold" : "text-gray-600 font-normal "}`}>
              Portfolio
              {router.asPath === "/projects" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>


          <Link href="/contact">
            <a
              className={`text-base  ${
                router.asPath === "/contact"
                  ? "text-gray-800 font-bold"
                  : "text-gray-600 font-normal "
              }`}
            >
              Contact{" "}
              {router.asPath === "/contact" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
        </div>
        
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        color: rgb(75 85 99)
      }
    `}</style>
    </nav>
  );
}