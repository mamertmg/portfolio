import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="bg-hero bg-fixed bg-auto bg-no-repeat bg-center">
        <img src="/images/background.jpg" ></img>
      </div>
      <div className="w-1/2 mx-auto my-2 py-4"> 
          <h1 className="text-2xl text-center">This is me!</h1>
          <img src='/images/avatar.jpg' className="rounded object-cover " alt="avatar"/>
      </div>      
    </div>

  );
}