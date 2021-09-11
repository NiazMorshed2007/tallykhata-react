import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TweenMax, Expo } from "gsap";
import { useHistory } from "react-router";
import style from "../style/password/password.scss";

function Password({ passedFirstStep, authorized }) {
  let history = useHistory();
  const [firstVis, setFirstVis] = useState(false);
  const [secVis, setSecVis] = useState(false);
  const [disabled, setDisabled] = useState(true);
  let inputs = useRef([]);
  let thisPage = useRef(null);
  const handleAuthorize = () => {
    localStorage.setItem("authorized", true);
  };
  const check = () => {
    if (
      inputs.current[0].value === inputs.current[1].value &&
      inputs.current[0] &&
      inputs.current[1].value !== ""
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  useEffect(() => {
    TweenMax.fromTo(
      thisPage,
      0.5,
      { x: `100%`, ease: Expo.easeOut },
      { x: `0%` }
    );
  }, []);
  if (!passedFirstStep) {
    return <Redirect to="/sign_up" />;
  }
  return (
    <div
      style={style}
      ref={(el) => {
        thisPage = el;
      }}
      className="password"
    >
      <div className="first">
        <div className="img-wrapper">
          <img src="images/talikhata.png" alt="" />
        </div>
        <p>আপনার তথ্য সুরক্ষিত রাখতে ডিজিট PIN তৈরি করুন ।</p>
      </div>
      <div className="inputs-wrapper">
        <label>
          <input
            ref={(el) => {
              inputs.current[0] = el;
            }}
            onChange={check}
            type={firstVis ? "text" : "password"}
            required
          />
          <span>পিন দিন</span>
          <i
            onClick={() => (firstVis ? setFirstVis(false) : setFirstVis(true))}
          >
            {firstVis ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </i>
        </label>
        <label>
          <input
            ref={(el) => {
              inputs.current[1] = el;
            }}
            onChange={check}
            type={secVis ? "text" : "password"}
            required
          />
          <span>পুনরায় পিন দিন</span>
          <i onClick={() => (secVis ? setSecVis(false) : setSecVis(true))}>
            {secVis ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </i>
        </label>
        <button
          disabled={disabled ? true : false}
          className={disabled ? "disabled" : ""}
          onClick={() => {
            history.push("/home");
            authorized(true);
            handleAuthorize();
          }}
        >
          নিশ্চিত
        </button>
      </div>
    </div>
  );
}

export default Password;
