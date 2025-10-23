import project1_img from '../assets/project1.png'
import project2_img from '../assets/project2.png'
import project3_img from '../assets/project3.png'
import project4_img from '../assets/project4.png'
import project5_img from '../assets/project5.png'
import project6_img from '../assets/project6.png'
import project7 from '../assets/project7.png'
import project8 from '../assets/project8.png'
import project9_img from '../assets/project9.png'
import projectS1_img from '../assets/projectS1.png'
import project0_img from '../assets/project0.png'
import gridgame from "../assets/gridgame.png"

const mywork_data = [
    {
            w_no:1,
            w_name:"Market-Mate",
            w_img:projectS1_img,
            w_description:"Designed a microservices based E-Commerce system with core services: Product, Customer, Order Management, Payments, Notifications, Config server and API gateway using SpringBoot and Spring Cloud. Implemented hybrid SQL–NoSQL databases, optimizing query performance, storage efficiency, & scalability for diverse workloads. Integrated Messaging Queue for asynchronous event-driven communication, enabling real-time notifications. Scale down API latency by 90% (500ms to 50ms) through implementing Redis caching for frequently accessed data. Tech Stack: Java, Spring Boot, PostgreSQL, MongoDB, Redis, Apache Kafka, Docker, Keycloak, JPA/Hibernate.",
            w_link:"https://github.com/yashvardhann15/Market-Mate"
    },
    {
            w_no:2,
            w_name:"Article-Space",
            w_img:project0_img,
            w_description:"Developed an article platform that enables users to create, read, update, delete, and manage articles. Implemented Google OAuth2 and user-password login with OTP-based verification and email notifications. Built secure session management using Redis-backed JWT token revocation, enforcing 3 active session per user. Implemented role-based authorization to control permissions for creating, editing, and deleting articles. Tech Stack: Spring Boot, MySQL, Redis, Spring JPA, Hibernate, OAuth, Apache Kafka, Docker.",
            w_link:"https://github.com/yashvardhann15/ArticleSpace"
    },
    {   
            w_no:3,
            w_name:"Grid-Game",
            w_img:gridgame,
            w_description:"Developed a modular game in Java using Design Patterns for extensible gameplay logic. Implemented human and bot players with different difficulty strategies. Designed core logic for an N×N Tic Tac Toe game using optimized undo to restore previous game state. Implemented pluggable winning strategies using the Strategy Design Pattern to enable flexible rule extensions. Tech Stack: JAVA, OOPS, Low Level Design, Design Patterns, SOLID Principles.",
            w_link:"https://github.com/yashvardhann15/Grid-Engine"
        },
        {w_no:4,
            w_name:"AI Helper",
            w_description: "An AI helper tool that supports CSV files and Google Sheets integration. It integrates SerpAPI for Google search based on custom prompts and Groq AI for generating output. A custom AI model was designed using GroqAI to find accurate results. The user interface is built with Streamlit, providing an option to download results.",
            w_link:"https://github.com/yashvardhann15/Breakout-AI",
            w_img:project9_img

        },
        {
        w_no:6,
        w_name:"Quotify",
        w_description:"A web application that enables users to search and discover quotes by keywords, tags, or authors, with the added convenience of sharing quotes directly on Twitter. The application is built using React.js and styled with CSS. The quotes are fetched from an external API. The application is responsive and works well on all devices, including mobile phones and tablets. The application is hosted on GitHub Pages and can be accessed using the link below. ",
        w_link:"https://github.com/yashvardhann15/Quote-Generator",
        w_img:project1_img
    },
    {
        w_no:5,
        w_name:"Sudoku Game",
        w_img:project2_img,
        w_description:"A web-based Sudoku game that allows users to play Sudoku online. The game is built using HTML, CSS, and JavaScript. The game generates a new Sudoku puzzle each time the user clicks the 'New Game' button. The user can fill in the empty cells with numbers from 1 to 9. The game checks the user's input in real-time and highlights incorrect cells. The user can also ask for a hint to fill in a random cell. The game is responsive and works well on all devices. The game is hosted on GitHub Pages and can be accessed using the link below.",
        w_link: "https://github.com/yashvardhann15/Sudoku"
    },

    {
        w_no:7,
        w_name:"Docs",
        w_description:"A web-based document editor that allows users to create and edit documents. The application is built using Javascript and styled with CSS. The application uses Local Storage to store user documents. The application supports features like text formatting, image insertion. The application is responsive and works well on all devices. The application can be accessed using the link below.",
        w_img:project5_img,
        w_link:"https://github.com/yashvardhann15/Docs"

    },
    {
        w_no:8,
        w_name:"Weather App",
        w_description:"A web-based weather application that allows users to search for the weather of any city. The application is built using HTML, Javascript and styled with CSS. The application fetches weather data from an external API. The application displays the current weather, temperature, humidity, and wind speed of the searched city. The application is responsive and works well on all devices. The application is hosted on GitHub Pages and can be accessed using the link below.",
        w_img:project7,
        w_link:"https://github.com/yashvardhann15/Weather-App"
    },

    {
        w_no:9,
        w_name:"Employee Management System",
        w_description:"A python based app to manage employee data using MySQL connectivity. The system is built using Python and MySQL. The system allows users to add, delete, update, and view employee data. The system uses a MySQL database to store information about employees. The system is responsive and works well on all devices. The system is hosted on GitHub Pages and can be accessed using the link below.",
        w_img:project8,
        w_link:"https://github.com/yashvardhann15/Employee-Management"
    },

    {
        w_no:10,
        w_name:"Simple Add Blocker",
        w_description:"A simple web browser extension that blocks ads on websites. The extension is built using Javascript. The extension uses a predefined list of ad URLs to block ads on websites. The extension works by intercepting network requests and blocking requests to known ad URLs. The extension is compatible with popular web browsers like Google Chrome and Mozilla Firefox. The extension is hosted on GitHub and can be downloaded using the link below.",
        w_img:project4_img,
        w_link:"https://github.com/yashvardhann15/Simple-Add-Blocker"
    },

    {
        w_no:11,
        w_name:"Email Scheduler",
        w_description:"This project automates the sending of daily email reports using Python. It leverages smtplib for email sending and schedule for task scheduling.Sends a daily email containing a welcome message with inline-styled HTML content.Uses smtplib to connect to SMTP server (e.g., Gmail) securely.Utilizes schedule library to schedule and automate email sending at a specified time daily. The project can be accessed using the link below.",
        w_img:project6_img,
        w_link:"https://github.com/yashvardhann15/EmailScheduler"
    },


]
 
export default mywork_data;