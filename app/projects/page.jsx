"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ui/ProjectCard";

const projectData = [
  {
    image: "/work/kleine.png",
    category: "React.Js",
    description:
      "Kleine helps teams and founders build unique brand identities and digital experiences through tailored web, content, and growth solutions — turning creative ideas into lasting results.",
    name: "Kleine",
    link: "https://kleine-german.vercel.app/",
  },
  {
    image: "/work/zma.png",
    category: "React.Js",
    description:
      "ZMA is a modern IT company based in Pakistan with a European mindset. We build scalable, secure, and innovative tech solutions with a strong focus on Artificial Intelligence and complete project delivery.",
    name: "ZMA Solutions",
    link: "https://zma-rho.vercel.app/",
  },
  {
    image: "/work/ai-project.png",
    category: "Backend",
    description:
      "AI-powered contract analysis software is designed to automatically detect unfair or unlawful clauses, compare rent with market prices, and check legal compliance based on recent court rulings.",
    name: "AI-Contract Analysis",
    link: "https://ai-analying-tool-dqt5.vercel.app/",
  },
  {
    image: "/work/contact-directory.png",
    category: "Backend",
    description:
      "Developed a Contact Directory using ReactJS for the frontend and Express.js, Node.js, and MongoDB for the backend, featuring CRUD operations and a responsive design for efficient contact management.",
    name: "Contact Directory",
    link: "https://contact-directory-hqlg.vercel.app/",
  },
  {
    image: "/work/finance-img.png",
    category: "Backend",
    description:
      "Developed a Finance App using ReactJS for the frontend and Express.js, Node.js, and MongoDB for the backend, enabling users to efficiently manage their expenses, track transactions, and generate financial reports. Implemented CRUD operations, responsive design, and secure authentication for a seamless user experience.",
    name: "Finance App",
    link: "https://final-hackathon-u3he.vercel.app/",
  },
  {
    image: "/work/nextjs-1.png",
    category: "Next.Js",
    description:
      "Convert Figma designs into a responsive Next.js app by creating reusable components, styling with CSS or Tailwind, ensuring responsiveness, and optimizing assets with Next.js features.",
    name: "Next JS Website",
    link: "https://my-nextjs-dashboard.netlify.app",
  },
  {
    image: "/work/dice-reactjs.png",
    category: "React.Js",
    description:
      "Developed an interactive Dice Game using ReactJS, featuring dynamic dice rolls, state management, and responsive design for an engaging user experience.",
    name: "Dice Game",
    link: "https://splendid-fox-655c23.netlify.app/",
  },
  {
    image: "/work/reactjs-1.png",
    category: "React.Js",
    description:
      "An eCommerce website with React.js offers dynamic product listings, a shopping cart, user authentication, and secure payments. It ensures smooth interactions with React’s state management and supports features like filtering, real-time updates, and API integrations.",
    name: "React Js Website",
    link: "https://e-commerce-website-by-ahtesham.netlify.app/",
  },
  {
    image: "/work/brand-reactjs.png",
    category: "React.Js",
    description:
      "Designed a responsive Nike Shoes branding page with interactive features and dynamic content loading, ensuring seamless navigation and a user-friendly experience across all devices.",
    name: "NIKE Shoes branding",
    link: "https://nimble-sundae-835a21.netlify.app/",
  },
  {
    image: "/work/chawk-bazar.png",
    category: "React.Js",
    description:
      "Chawk Bazar is an eCommerce website built with React.js, offering dynamic product listings, filtering, a shopping cart, and secure checkout. It ensures seamless user interactions using React’s state management and supports API integrations for inventory and payments.",
    name: "React Js Website",
    link: "https://react-test-by-ahtesham.netlify.app/",
  },
  {
    image: "/work/contact-us-reactjs.png",
    category: "React.Js",
    description:
      "Built a responsive Contact Us page in ReactJS with dynamic content and seamless form handling, ensuring an interactive and user-friendly experience across all devices.",
    name: "Contact Us",
    link: "https://merry-biscotti-9d6527.netlify.app/",
  },
  {
    image: "/work/figma-design.png",
    category: "React.Js",
    description:
      "Ultra Marketing Agency's website, designed in Figma and developed with React.js, features a sleek, responsive layout. It includes reusable components for services, portfolio, and contact sections, ensuring smooth interactions and dynamic content updates with React's state management.",
    name: "Ultra Figma Design",
    link: "https://profound-kataifi-1e2c8c.netlify.app",
  },
  {
    image: "/work/blog-app.png",
    category: "Javascript",
    description:
      "A blog application built with JavaScript and Firebase enables users to create, edit, and view blogs. It uses Firebase for authentication, Firestore for storing blog data, and cloud storage for images, offering real-time updates and a seamless user experience.",
    name: "Blog Application",
    link: "https://fantastic-dolphin-41b7c1.netlify.app",
  },
  {
    image: "/work/crud-app.png",
    category: "Javascript",
    description:
      "User authentication using JavaScript involves verifying users through login and registration forms. It typically uses technologies like Firebase or JWT to handle secure sign-in, sign-up, and session management, ensuring authenticated access to protected areas of the application.",
    name: "Authentication",
    link: "https://quiz-application-by-ahtesham-ali.netlify.app",
  },
  {
    image: "/work/firebase1.png",
    category: "Javascript",
    description:
      "Firebase CRUD using JavaScript allows you to perform Create, Read, Update, and Delete operations on data stored in Firebase Firestore or Realtime Database. JavaScript is used to interact with Firebase APIs for adding, retrieving, updating, and removing data in real time, making it ideal for dynamic applications.",
    name: "Firbase Crud",
    link: "https://crud-app-using-firebase.netlify.app",
  },
  {
    image: "/work/multi-shop.png",
    category: "Javascript",
    description:
      "A multi-shop eCommerce website using JavaScript allows multiple vendors to list and sell products on a single platform. It features product listings, shopping carts, user authentication, and secure checkout, with JavaScript managing dynamic content, user interactions, and API integrations for inventory and payments.",
    name: "Multi Shop Website",
    link: "https://multi-shop-website.netlify.app",
  },
  {
    image: "/work/european1.png",
    category: "Javascript",
    description:
      "A multi-shop eCommerce website using JavaScript allows multiple vendors to list and sell products on a single platform. It features product listings, shopping carts, user authentication, and secure checkout, with JavaScript managing dynamic content, user interactions, and API integrations for inventory and payments.",
    name: "European Suppliers",
    link: "https://fanciful-figolla-3427d3.netlify.app",
  },
  {
    image: "/work/foodie-restaurant.png",
    category: "Javascript",
    description:
      "A Foodies restaurant website using JavaScript offers an interactive platform for browsing menus, placing orders, and viewing restaurant details. JavaScript handles dynamic content like real-time menu updates, order processing, and user interactions, creating a seamless experience for customers.",
    name: "Foodies Restaurant",
    link: "https://foodies-restaurant-by-ahtesham.netlify.app",
  },
  {
    image: "/work/eid-counter.png",
    category: "Javascript",
    description:
      "Future Time using JavaScript refers to a feature or application that displays or calculates future dates, times, or events. JavaScript can be used to manipulate and format time, set timers or alarms, and show countdowns or upcoming events based on the current date and time",
    name: "Future Counter",
    link: "https://eid-u-adha-countdown-by-ahtesham.netlify.app",
  },
  {
    image: "/work/github-profiler.png",
    category: "Javascript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Github Profiler",
    link: "https://github-profiles-searcher.netlify.app",
  },
  {
    image: "/work/password-generator.png",
    category: "Javascript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Password Generator",
    link: "https://random-password-generator-by-ahtesham.netlify.app",
  },
  {
    image: "/work/pixel-conversion.png",
    category: "Javascript",
    description:
      "A pixel conversion tool in CSS using JavaScript allows users to convert pixel values into units like em, rem, or percentages. It dynamically updates the output, helping web developers adjust designs for scalability across different screen sizes.",
    name: "Pixel Conversion",
    link: "https://pixel-conversion-by-js-avangers.netlify.app",
  },
  {
    image: "/work/stop-watch.png",
    category: "Javascript",
    description:
      "A stopwatch built with JavaScript allows users to start, stop, and reset a timer. It tracks elapsed time in seconds and milliseconds, updating the display in real-time. The functionality is controlled through buttons, making it ideal for simple time tracking tasks.",
    name: "Stop Watch",
    link: "https://stop-watch-by-ahtesham.netlify.app",
  },
  {
    image: "/work/tip-calculator.png",
    category: "Javascript",
    description:
      "A tip calculator built with HTML and JavaScript allows users to input the bill amount and select a tip percentage. It calculates the tip amount and total bill, displaying the results dynamically for easy and quick calculation.",
    name: "Tip Calculator",
    link: "https://tip-calculator-by-ahtesham.netlify.app",
  },
  {
    image: "/work/weather-app.png",
    category: "Javascript",
    description:
      "A weather application built with JavaScript fetches real-time weather data from an API based on the user's location or a specified city. It displays details such as temperature, humidity, and weather conditions, offering a dynamic and interactive interface for users to check current weather updates.",
    name: "Weather Application",
    link: "https://meek-stardust-8d4c99.netlify.app",
  },
  {
    image: "/work/real-state.png",
    category: "html&css",
    description:
      "A real estate Figma design in HTML and CSS features property listings, images, filters, and contact details, all styled for a responsive and user-friendly experience.",
    name: "Real State Figma",
    link: "https://real-state-web-by-ahtesham.netlify.app",
  },
  {
    image: "/work/gym-design.png",
    category: "html&css",
    description:
      "The Xlevel Gym Figma design, converted to HTML and CSS, features a modern, responsive layout showcasing gym services, membership options, trainers, and contact details, with a clean and engaging design for an optimal user experience.",
    name: "X level Gym",
    link: "https://x-level-gym-layout-by-ahtesham-ali.netlify.app",
  },
  {
    image: "/work/tere-web.png",
    category: "html&css",
    description:
      "The Tere web layout Figma design, implemented with HTML and CSS, presents a clean, responsive structure with sections for services, portfolio, and contact information, offering an intuitive and visually appealing user experience.",
    name: "Random Password Generator App",
    link: "https://tere-website-layout-by-ahtesham.netlify.app",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filterProject = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen w-full pt-12">
  <div className="container mx-auto w-full lg:w-[90%]">
    <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
      My Projects
    </h2>

    {/* Tabs */}
    <Tabs defaultValue={category} className="mb-24 xl:mb-48">
      <TabsList className="w-full grid h-full md:grid-cols-6 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
        {categories.map((category, index) => (
          <TabsTrigger
            onClick={() => setCategory(category)}
            value={category}
            key={index}
            className="capitalize w-[162px] md:w-auto"
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tabs content */}
      <div className="text-lg xl:mt-8 flex flex-wrap justify-between gap-4">
        {filterProject.map((project, index) => (
          <TabsContent value={category} key={index} className="w-full md:w-[48%] lg:w-[32%] border border-gray-500">
            <ProjectCard project={project} />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  </div>
</section>

  );
};

export default Projects;
