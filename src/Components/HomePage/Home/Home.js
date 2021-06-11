import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import "../Header/Header.css"
import About from '../About/About';
import Repair from '../Repair/Repair';
import ExpertTeam from '../ExpertTeam/ExpertTeam';
import Footer from '../Footer/Footer';
import ServiceAreas from '../ServiceAreas/ServiceAreas';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className="bg-light">
            <div className="header bg-light">
                <Navbar></Navbar>
                <Header></Header>
            </div>
            <div >
                <About></About>
                <Repair></Repair>
                <ServiceAreas></ServiceAreas>
                <ExpertTeam></ExpertTeam>
                <Review></Review>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;