import {HiBeaker, HiCode, HiCurrencyEuro } from 'react-icons/hi';

export const navData = [
    { name: 'Services' },
    { name: 'Industries' },
    { name: 'Polymers' },
    { name: 'Projects' },
    { name: 'Contact' },
];

export const businessData = [
    { name: 'Business professional', icon: <HiCurrencyEuro size="36px"/>, description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  },
    { name: 'Polymers expert', icon: <HiBeaker size="36px"/>, description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  },
    { name: 'Web developer', icon: <HiCode size="36px"/>, description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  },
];

export const contactData = [
    {email: 'marquezgarcia.a@gmail.com'},
    {address: 'Düsseldorf, Germany'},
    {copyright: 'Copyright ©2022 All rights reserved - Alberto Márquez'}
]

export const industryData = [
    {name: 'automotive', image: '/assets/industries/automotive-logo.png'},
    {name: 'appliances', image: '/assets/industries/appliances-logo.png'},
    {name: 'electrical and electronics', image: '/assets/industries/e-e-logo.png'},
    {name: 'insulation', image: '/assets/industries/insulation-logo.png'}
]

export const projectsData = [
    {name: 'Electronics Online shop', link:'https://ecommerce-sanity-stripe-nu-ten.vercel.app', image: '/assets/projects/ecommerce.png', type: 'e-commerce' },
    {name: 'Restaurant website', link:'https://restaurant-website-lime.vercel.app', image: '/assets/projects/restaurant-landingpage.png', type: 'landing page'},
    {name: 'Fitness Studio website', link:'https://gym-landing-page-puce.vercel.app', image: '/assets/projects/gym-landingpage.png', type: 'landing page'},
    {name: 'Webdeveloper blog',link:'https://blog-markdown-plum.vercel.app', image: '/assets/projects/blog-markdown.png', type: 'blog'},
    {name: 'Github search engine', link: 'https://github-search-gamma-olive.vercel.app/', image: '/assets/projects/github-search.png', type: 'web application'}
]