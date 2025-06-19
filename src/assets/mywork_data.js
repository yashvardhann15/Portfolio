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

const mywork_data = [
    {
            w_no:1,
            w_name:"Shopping-Hub",
            w_img:projectS1_img,
            w_description:"Designed and developed a scalable microservices-based shopping platform comprising 4 core services including Product Catalog, User Service, Email Notification, and Service Discovery, improving modularity and fault isolation by 85%. Implemented 2 secure authentication methods i.e user-password login and Google OAuth2 with OTP-based verification, leveraging Kafka-based asynchronous email workflows, ensuring 99%+ email delivery reliability and reducing latency by 70%. Added role-based access control across 10+ API endpoints and secure backend-driven logout functionality to invalidate sessions increasing security by 60%. Built secure session management using Redis-backed JWT token revocation, enforcing 3 active session per user and reducing MySQL database calls by 50%.  Built a robust Product Service with full CRUD, category-based filtering, and integrated pagination, sorting, and filtering achieving 2x faster product retrieval. Tech Stack: Java, Spring Boot 3, MySQL, Kafka, Eureka, Redis, OAuth2, Spring JPA, Hibernate.",
            w_link:"https://github.com/yashvardhann15/Shopping-Hub"
    },
    {
            w_no:2,
            w_name:"Article-Space",
            w_img:project0_img,
            w_description:"Developed a Full-Stack article management platform enabling users to create, read, update, delete, and manage articles with 100% CRUD coverage and responsive UI/UX. Applied SOLID principles and interface-driven architecture, resulting in 30% faster development cycles and significantly improving code maintainability and scalability.  Integrated Redis caching for static data and implemented server-side pagination, reducing average API response time from 500ms to 20ms, enabling 25x faster data retrieval for large datasets. Tech Stack: Backend: Spring Boot, MySQL, Redis, Spring JPA, Hibernate. Frontend: React.js, Tailwind CSS, React Router, Framer Motion.",
            w_link:"https://github.com/yashvardhann15/Article"
    },
    // {
        
    //         w_no:3,
    //         w_name:"Library Management System",
    //         w_img:project3_img,
    //         w_description:"A web-based library management system that allows librarians to manage books, members, and book issues. The system is built using HTML, CSS, JavaScript, NodeJS and MySQL. The system has separate interfaces for librarians and members. The system uses a MySQL database to store information about books, members, and book issues. The system is responsive and works well on all devices. The system is hosted on GitHub Pages and can be accessed using the link below.",
    //         w_link:"https://github.com/yashvardhann15/Library-Management-Project"
    //     },
        {w_no:3,
            w_name:"AI Helper",
            w_description: "An AI helper tool that supports CSV files and Google Sheets integration. It integrates SerpAPI for Google search based on custom prompts and Groq AI for generating output. A custom AI model was designed using GroqAI to find accurate results. The user interface is built with Streamlit, providing an option to download results.",
            w_link:"https://github.com/yashvardhann15/Breakout-AI",
            w_img:project9_img

        },
        {
        w_no:5,
        w_name:"Quotify",
        w_description:"A web application that enables users to search and discover quotes by keywords, tags, or authors, with the added convenience of sharing quotes directly on Twitter. The application is built using React.js and styled with CSS. The quotes are fetched from an external API. The application is responsive and works well on all devices, including mobile phones and tablets. The application is hosted on GitHub Pages and can be accessed using the link below. ",
        w_link:"https://github.com/yashvardhann15/Quote-Generator",
        w_img:project1_img
    },
    {
        w_no:4,
        w_name:"Sudoku Game",
        w_img:project2_img,
        w_description:"A web-based Sudoku game that allows users to play Sudoku online. The game is built using HTML, CSS, and JavaScript. The game generates a new Sudoku puzzle each time the user clicks the 'New Game' button. The user can fill in the empty cells with numbers from 1 to 9. The game checks the user's input in real-time and highlights incorrect cells. The user can also ask for a hint to fill in a random cell. The game is responsive and works well on all devices. The game is hosted on GitHub Pages and can be accessed using the link below.",
        w_link: "https://github.com/yashvardhann15/Sudoku"
    },

    {
        w_no:6,
        w_name:"Docs",
        w_description:"A web-based document editor that allows users to create and edit documents. The application is built using Javascript and styled with CSS. The application uses Local Storage to store user documents. The application supports features like text formatting, image insertion. The application is responsive and works well on all devices. The application can be accessed using the link below.",
        w_img:project5_img,
        w_link:"https://github.com/yashvardhann15/Docs"

    },
    {
        w_no:7,
        w_name:"Weather App",
        w_description:"A web-based weather application that allows users to search for the weather of any city. The application is built using HTML, Javascript and styled with CSS. The application fetches weather data from an external API. The application displays the current weather, temperature, humidity, and wind speed of the searched city. The application is responsive and works well on all devices. The application is hosted on GitHub Pages and can be accessed using the link below.",
        w_img:project7,
        w_link:"https://github.com/yashvardhann15/Weather-App"
    },

    {
        w_no:8,
        w_name:"Employee Management System",
        w_description:"A python based app to manage employee data using MySQL connectivity. The system is built using Python and MySQL. The system allows users to add, delete, update, and view employee data. The system uses a MySQL database to store information about employees. The system is responsive and works well on all devices. The system is hosted on GitHub Pages and can be accessed using the link below.",
        w_img:project8,
        w_link:"https://github.com/yashvardhann15/Employee-Management"
    },

    {
        w_no:9,
        w_name:"Simple Add Blocker",
        w_description:"A simple web browser extension that blocks ads on websites. The extension is built using Javascript. The extension uses a predefined list of ad URLs to block ads on websites. The extension works by intercepting network requests and blocking requests to known ad URLs. The extension is compatible with popular web browsers like Google Chrome and Mozilla Firefox. The extension is hosted on GitHub and can be downloaded using the link below.",
        w_img:project4_img,
        w_link:"https://github.com/yashvardhann15/Simple-Add-Blocker"
    },

    {
        w_no:10,
        w_name:"Email Scheduler",
        w_description:"This project automates the sending of daily email reports using Python. It leverages smtplib for email sending and schedule for task scheduling.Sends a daily email containing a welcome message with inline-styled HTML content.Uses smtplib to connect to SMTP server (e.g., Gmail) securely.Utilizes schedule library to schedule and automate email sending at a specified time daily. The project can be accessed using the link below.",
        w_img:project6_img,
        w_link:"https://github.com/yashvardhann15/EmailScheduler"
    },


]
 
export default mywork_data;