import React from "react";
import lambo_logo from "./lambo.jpg"

const Tieu_de = () => {
    return (
        <>
            <div>
                {<img alt="logo" src={lambo_logo} height="70" width="70" />}
            </div>
            <ul>
                <li id="1-0">
                    <a href="#1.html">
                        <span>MODELS</span>
                    </a>
                </li>
                <li id="1-1">
                    <a>
                        <span>BEYOND</span>
                    </a>
                </li>
                <li id="1-2">
                    <a>
                        <span>OWNERSHIP</span>
                    </a>
                </li>
                <li id="1-3">
                    <a>
                        <span>MOTORSPORT</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li id="1-4">
                    <a>
                        <span>DEALERSHIPS</span>
                    </a>
                </li>
                <li id="1-5">
                    <a>
                        <span>MUSEUM</span>
                    </a>
                </li>
                <li id="1-6">
                    <a>
                        <span>STORE</span>
                    </a>
                </li>
            </ul>
            <div>
                <button>
                    <span>

                    </span>
                </button>
            </div>
        </>
    );
};
function Home() {
    return (
        <>
            <div>
                <Tieu_de />
            </div>
        </>
    );
}
export default Home;