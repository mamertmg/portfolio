import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="bg-hero bg-fixed bg-auto bg-no-repeat bg-center">
        <img src="/images/background.jpg" ></img>
      </div>
      <div className="w-1/2 mx-auto my-2 py-4"> 
          <img src='/images/avatar.jpg' class="rounded object-cover h-fit" alt="avatar"/>
      </div>      
    </div>

  );
}