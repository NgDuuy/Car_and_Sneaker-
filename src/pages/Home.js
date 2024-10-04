import React from "react";
import { Header } from "../components/Home_title"
import SideLeft from "../components/SideLeft"
import { CarShowcase } from "../components/slide"
function Home() {
    return (
        <>
            <div className="Home">
                <Header />
                <div className="Bodyhome">
                    <SideLeft />
                    <CarShowcase />
                </div>

            </div>
        </>
    );
}
export default Home;
