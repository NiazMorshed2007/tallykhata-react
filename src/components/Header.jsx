import React from "react";
import { BiArrowBack } from "react-icons/bi";

function Header(props) {
  return (
    <header>
      <div className="first">
        {props.home ? (
          <div className="burger">
            <div></div>
            <div className="line2"></div>
            <div></div>
          </div>
        ) : (
          <BiArrowBack />
        )}
        <p>{props.header}</p>
      </div>
      {props.more ? (
        <div className="more">
          {props.moreIcon}
          <p>{props.moreText}</p>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
