import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

export default function Hero() {
  const colors = ["#36C5F0", "#2EB67D", "#ECB22E", "#F24130"];
  return (
    <div className="max-w-4xl justify-center items-start overflow-hidden mx-auto my-12">

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 my-2">
              Account manager.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 my-2">
              Polymers expert.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 my-2">
              Start up investor.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 my-2">
              Web developer.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>

      <div className="w-full mx-auto md:w-1/2">
        <div className="w-3/4 mx-auto">
          <img src='/avatar.jpg' alt="avatar" className="shadow" />
        </div>
      </div>
    </div>
  );
}