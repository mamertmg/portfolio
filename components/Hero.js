import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

export default function Hero() {
  const colors = ["#36C5F0", "#2EB67D", "#ECB22E", "#F24130"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Account manager.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Polymers expert.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Start up investor.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Web developer.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-20 lg:py-10">
        <div className="w-3/4 ">
          <img src='/avatar.jpg' alt="avatar" className=" shadow" />
        </div>
      </div>
    </div>
  );
}