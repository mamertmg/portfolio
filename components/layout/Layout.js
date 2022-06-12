import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children}) {

    return(
        <React.Fragment>
            <main className="dark:bg-gray-800 w-full">
                <Navbar/>
                <div>
                    {children}
                </div>
                <Footer/>                 
            </main>
        </React.Fragment>
      
    )
}