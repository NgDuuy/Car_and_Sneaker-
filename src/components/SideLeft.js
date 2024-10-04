import React from "react";
import CarShowlogo from '../img/logo.png';
class Left extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="sideleft">
                <img src={CarShowlogo} alt="Car Showroom logo" className="logo" />
            </div>
        )
    }
}
export default Left;