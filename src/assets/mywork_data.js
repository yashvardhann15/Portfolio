import project1_img from '../assets/project1.png'
import project2_img from '../assets/project2.png'
import project3_img from '../assets/project3.png'
import project4_img from '../assets/project4.png'
import project5_img from '../assets/project5.png'
import project6_img from '../assets/project6.png'
import project7 from '../assets/project7.png'
import project8 from '../assets/project8.png'

const mywork_data = [
    {
        
            w_no:1,
            w_name:"Library Management System",
            w_img:project3_img,
            w_description:"A web-based library management system that allows librarians to manage books, members, and book issues. The system is built using HTML, CSS, JavaScript, NodeJS and MySQL. The system has separate interfaces for librarians and members. The system uses a MySQL database to store information about books, members, and book issues. The system is responsive and works well on all devices. The system is hosted on GitHub Pages and can be accessed using the link below.",
            w_link:"https://github.com/yashvardhann15/Library-Management-Project"
        },
        {
        w_no:3,
        w_name:"Quotify",
        w_description:"A web application that enables users to search and discover quotes by keywords, tags, or authors, with the added convenience of sharing quotes directly on Twitter. The application is built using React.js and styled with CSS. The quotes are fetched from an external API. The application is responsive and works well on all devices, including mobile phones and tablets. The application is hosted on GitHub Pages and can be accessed using the link below. ",
        w_link:"https://github.com/yashvardhann15/Quote-Generator",
        w_img:project1_img
    },
    {
        w_no:2,
        w_name:"Sudoku Game",
        w_img:project2_img,
        w_description:"A web-based Sudoku game that allows users to play Sudoku online. The game is built using HTML, CSS, and JavaScript. The game generates a new Sudoku puzzle each time the user clicks the 'New Game' button. The user can fill in the empty cells with numbers from 1 to 9. The game checks the user's input in real-time and highlights incorrect cells. The user can also ask for a hint to fill in a random cell. The game is responsive and works well on all devices. The game is hosted on GitHub Pages and can be accessed using the link below.",
        w_link: "https://github.com/yashvardhann15/Sudoku"
    },

    {
        w_no:5,
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
        w_no:4,
        w_name:"Simple Add Blocker",
        w_description:"A simple web browser extension that blocks ads on websites. The extension is built using Javascript. The extension uses a predefined list of ad URLs to block ads on websites. The extension works by intercepting network requests and blocking requests to known ad URLs. The extension is compatible with popular web browsers like Google Chrome and Mozilla Firefox. The extension is hosted on GitHub and can be downloaded using the link below.",
        w_img:project4_img,
        w_link:"https://github.com/yashvardhann15/Simple-Add-Blocker"
    },

    {
        w_no:6,
        w_name:"Email Scheduler",
        w_description:"This project automates the sending of daily email reports using Python. It leverages smtplib for email sending and schedule for task scheduling.Sends a daily email containing a welcome message with inline-styled HTML content.Uses smtplib to connect to SMTP server (e.g., Gmail) securely.Utilizes schedule library to schedule and automate email sending at a specified time daily. The project can be accessed using the link below.",
        w_img:project6_img,
        w_link:"https://github.com/yashvardhann15/EmailScheduler"
    },


]
 
export default mywork_data;