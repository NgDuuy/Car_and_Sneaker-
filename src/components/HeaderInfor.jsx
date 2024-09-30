import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./HeaderInfor.css";
import { Button } from "antd";

const HeaderInfo = () => {
  return (
    <div className="HeaderInfor">
      <div className="HeaderInfor_header">
        <p>Caaker</p>
        <FontAwesomeIcon icon={faChevronRight} className="Icon-next" />
      </div>
      <div className="HeaderInfor_tittle">
        <div className="tittle_group">
          <p>HIANGHUY - DUY</p>
          <h1 className="tittle_group-1">INTERACTIVE</h1>
          <h1>3D CAR TUTORIAL</h1>
        </div>
        <Button className="Button_start" value="large" ghost>
          start
        </Button>
      </div>
    </div>
  );
};

export default HeaderInfo;
