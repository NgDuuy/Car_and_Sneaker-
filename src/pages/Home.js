import React from "react";
import { Header } from "../components/Home_title"
import SideLeft from "../components/SideLeft/SideLeft"
import { CarShowcase } from "../components/slide"
import  AboutCar  from "../components/About/AboutCar"
function Home() {
    return (
        <>
            <div className="Home">
                <Header />
                <div className="Bodyhome">
                    <SideLeft />
                    <CarShowcase />
                    <AboutCar />
                </div>

            </div>
        </>
    );
}
export default Home;
