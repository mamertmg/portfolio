import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';

function TechStack() {
  return (
    <div id="techstack" className='min-h-screen bg-white antialiased text-center'>
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">My Tech Stack</h2>
        <div className="flex flex-row flex-wrap bg mt-4">
            <img
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
            className="h-20 w-20 mx-4 my-4"
            alt="HTML"
            />            
            <img
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
            className="h-20 w-20 mx-4 my-4"
            alt="CSS"
            />            
            <img
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
            className="h-20 w-20 mx-4 my-4"
            alt="Javascript"
            />
            <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
            className="h-20 w-20 mx-4 my-4"
            alt="bootstrap"
            />
            <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
            className="h-20 w-20 mx-4 my-4"
            alt="TailwindCSS"
            />
            <img
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
            className="h-20 w-20 mx-4 my-4"
            alt="NodeJS"
            />
            <img
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
            className="h-20 w-20 mx-4 my-4"
            alt="Express"
            />
            <img
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
            className="h-20 w-20 mx-4 my-4"
            alt="React"
            />
            <img
            src="assets/nextjs.png"
            className="h-20 w-20 mx-4 my-4"
            alt="NextJS"
            />
            <img
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png"
            className="h-20 w-20 mx-4 my-4"
            alt="REDUX state management"
            />
            <img
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
            className="h-20 w-20 mx-4 my-4"
            alt="MySQL"
            />
            <img
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
            className="h-20 w-20 mx-4 my-4"
            alt="MongoDB"
            />
            <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
            className="h-20 w-20 mx-4 my-4"
            alt="PostgreSQL"
            />
            <img
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
            className="h-20 w-20 mx-4 my-4"
            alt="firebase"
            />
            <img
            src="https://avatars.githubusercontent.com/u/19872173?s=200&v=4"
            className="h-20 w-20 mx-4 my-4"
            alt="strapi"
            />
        </div>        
    </div>

  )
}

export default AppWrap(MotionWrap(TechStack),'techstack');