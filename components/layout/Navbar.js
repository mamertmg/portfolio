import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {

  const router = useRouter();

  return (
    <div className="max-w-6xl  mx-auto px-4 py-2">
      <div className="flex md:flex-row justify-between items-center">

        <div className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="font-semibold text-x">
                Alberto Márquez
              </h1>
              <p className="text-base font-light text-gray-500">
                Full Stack Chemical Engineer
              </p>
            </a>
          </Link>
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
          <Link href="/industries">
            <a
              className={`text-base  ${
                router.asPath === "/industries"
                  ? "text-gray-800 font-bold"
                  : "text-gray-600 font-normal "
              }`}
            >
              Industries{" "}
              {router.asPath === "/industries" && (
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
    </div>
  );
}