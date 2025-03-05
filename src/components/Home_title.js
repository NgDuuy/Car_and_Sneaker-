import React from "react";

class Home_component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenu: null,
        };
    }
    setActiveMenu(menu) {
        this.setState({
            activeMenu: menu
        })
    }


    handleOnEnter = (menu) => {
        this.setActiveMenu(menu);

    }
    handleOnLeave = () => {
        this.setActiveMenu(null);
    }
}

class Header extends Home_component {

    MODELS() {
        return (
            <li className="dropdown" onMouseEnter={() => this.handleOnEnter('MODELS')} onMouseLeave={this.handleOnLeave}>
                MODELS
                {this.state.activeMenu === 'MODELS' && (
                    <ul className="dropdown-content">
                        <li>TEMERARIO</li>
                        <li>REVUELTO</li>
                        <li>URUS</li>
                        <li>HURACAN</li>
                        <li>PRE-OWNER</li>
                        <li>LIMITED SERIES</li>
                        <li>CONCEPT</li>
                    </ul>
                )}
            </li>
        )
    }
    Sevice() {
        return (
            <li className="dropdown" onMouseEnter={() => this.handleOnEnter('SERVICE')} onMouseLeave={this.handleOnLeave}>
                SERVICE
                {this.state.activeMenu === 'SERVICE' && (
                    <ul className="dropdown-content">
                        <li>SALE SREVICES</li>
                        <li>VEHICLE SERVICING AND MAINTENANCE</li>
                        <li>CUSTOMER SUPPORT</li>
                        <li>TEST DRIVES</li>
                    </ul>
                )

                }
            </li>
        );
    }
    AboutUs() {
        return (
            < li className="dropdown" > ABOUT US</li >
        )
    }
    render() {
        return (
            <ul className="Header">
                {this.MODELS()}
                {this.Sevice()}
                {this.AboutUs()}
            </ul>
        );
    }
}

export { Header };
export default Header;

