import React from 'react';
import './Portfolio.css';
import Project from '../Project';



const Portfolio = () => {

    const Items = [
        { title: '5 Day Forecast', img: require('../../Gallery-Images/weather.PNG'), alt: 'Weather Forecaster', descrip: 'Want to find out what the weather will be for next 5 days? Use this application to find out the weather in your city.', href: 'https://mstadtler21.github.io/Weather-Forecaster/', deployed: 'https://mstadtler21.github.io/Weather-Forecaster/'},
        { title: 'Fitness Tracker', img: require('../../Gallery-Images/fitnesstracker.PNG'), alt: 'Fitness Tracker', descrip: 'Track all of your workouts and watch the results appear in front of you with helpful graphs to visualize the data.', href: 'https://github.com/MStadtler21/FitnessTracker', deployed: 'https://mighty-coast-24566.herokuapp.com/?id=5f39a0df6542dd00177637b0' },
        { title: 'Note Taking Web Application', img: require('../../Gallery-Images/notetaker.PNG'), alt: 'Note Taker Application', descrip: 'Gone are the days of forgetting items on your list! This is an application utilizing Express.js to allow you to take notes and save them for later.', href: 'https://github.com/MStadtler21/NoteTaker', deployed: 'https://floating-anchorage-93822.herokuapp.com/' },
        { title: 'Brewgle', img: require('../../Gallery-Images/brewgle.PNG'), alt: 'Find a brewery with Brewgle', descrip: 'Looking for a Brewery to sit down and have your next drink? Brewgle is a simple web application that allows you to find Breweries in any city in the world!', href: 'https://github.com/MStadtler21/Brewgle', deployed: 'https://samuel7morris.github.io/Brewgle/' },
        { title: 'Chatify', img: require('../../Gallery-Images/chatify.PNG'), alt: 'Landing Page', descrip: 'A responsive landing page for a digital marketing firm, that could easily be adjusted to the needs of any company building its presence in the online era.', href: 'https://github.com/MStadtler21/project2-spotify-form', deployed: 'https://project-2-chatify.herokuapp.com/' },
        { title: 'Employee Management Application', img: require('../../Gallery-Images/employee.PNG'), alt: 'Employee Management Application', descrip: 'Having trouble keeping track of your employees? Easily view, sort and filter them with this employee management React application!', href: 'https://github.com/MStadtler21/EmployeeTracker', deployed: 'https://github.com/MStadtler21/EmployeeTracker' }
    ]

    return(
        <div className="portfolioWrapper">
            {Items.map((item) => <Project key={item.title} item={item} />)} 
           
        </div>
    
    );
}

export default Portfolio;