import React from 'react';
import './Portfolio.css';
import Project from '../Project';



const Portfolio = () => {

    const Items = [
        { title: 'Interplanetary Travel Planner', img: require(''), alt: 'Interplanetary Travel Planner', descrip: 'Plan your next interplanetary trip with a web application that easily guides you through the process of selecting a planet to visit, finding a rocket, and choosing your options!', href: 'https://github.com/AndrewKepson/interplanetary-travel-planner', deployed: 'https://interplanetary-travel.herokuapp.com/'},
        { title: 'Fitness Tracker', img: require(''), alt: 'Fitness Tracker', descrip: 'Track all of your workouts and watch the results appear in front of you with helpful graphs to visualize the data.', href: 'https://github.com/AndrewKepson/fitness-tracker', deployed: 'https://fitness-tracker14.herokuapp.com/' },
        { title: 'Note Taking Web Application', img: require(''), alt: 'Note Taker Application', descrip: 'Gone are the days of forgetting items on your list! This is an application utilizing Express.js to allow you to take notes and save them for later.', href: 'https://github.com/AndrewKepson/note-taker-app-express', deployed: 'https://whispering-anchorage-31312.herokuapp.com/' },
        { title: 'Brewgle', img: require(''), alt: 'Find a brewery with Brewgle', descrip: 'Looking for a Brewery to sit down and have your next drink? Brewgle is a simple web application that allows you to find Breweries in any city in the world!', href: 'https://github.com/AndrewKepson/Brewgle', deployed: 'https://andrewkepson.github.io/Brewgle/' },
        { title: 'Digital Marketing Landing Page', img: require(''), alt: 'Landing Page', descrip: 'A responsive landing page for a digital marketing firm, that could easily be adjusted to the needs of any company building its presence in the online era.', href: 'https://github.com/AndrewKepson/improving-seo-marketing-webpage-assmt1', deployed: 'https://andrewkepson.github.io/improving-seo-marketing-webpage-assmt1/' },
        { title: 'Employee Management Application', img: require(''), alt: 'Employee Management Application', descrip: 'Having trouble keeping track of your employees? Easily view, sort and filter them with this employee management React application!', href: 'https://andrewkepson.github.io/employee-management-application/', deployed: 'https://andrewkepson.github.io/employee-management-application/' }
    ]

    return(
        <div className="portfolioWrapper">
            {Items.map((item) => <Project key={item.title} item={item} />)} 
           
        </div>
    
    );
}

export default Portfolio;