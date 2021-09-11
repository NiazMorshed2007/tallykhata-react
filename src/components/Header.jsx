import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router";

function Header(props) {
  let history = useHistory();
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
          <BiArrowBack onClick={() => history.push(props.backPath)} />
        )}
        <p>{props.inbox ? "ইনবক্স" : props.header}</p>
      </div>
      {!props.inbox ? (
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
