import React from "react";
export default function Footer() {
  return (
      <div className=" bg-gray-200 text-gray-500 w-full mx-auto px-4">
        <div className="flex flex-col space-y-4 text-center md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p>&copy; All Rights Reserved.</p>
          </div>
          <div>
            {/* Support me by keeping this in the footer, please. :) */}
            <p>
              Developed by
              <div className="inline-block">
                <a
                  className="hover:bg-red-500 hover:text-gray-50 rounded-md px-2 py-1"
                  href="https://marqueza.me"
                >
                Alberto Márquez
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
  );
}