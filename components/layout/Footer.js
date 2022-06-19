import React from "react";
export default function Footer() {
  return (
      <footer className=" bg-gray-200 text-gray-500 w-full mx-auto px-4">
        <div className="flex flex-col space-y-4 text-center md:space-y-0 md:flex-row justify-between md:items-center">
          <div>
            <p>&copy; All Rights Reserved.</p>
          </div>
          <div>
            <p>
              Developed by
              <div className="inline-block">
                <a
                  className="rounded-md px-2 py-1"
                  href="https://marqueza.me"
                >
                Alberto Márquez
                </a>
              </div>
            </p>
          </div>
        </div>
      </footer>
  );
}