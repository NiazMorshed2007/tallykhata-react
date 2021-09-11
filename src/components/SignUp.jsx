import React, { useState, useRef } from "react";
import { useHistory } from "react-router";

function SignUp({ setPassedFirstStep }) {
  let history = useHistory();
  const [disabled, setDisabled] = useState(true);
  let inputs = useRef([]);
  const placeholders = ["ব্যাবসা প্রতিষ্ঠানের নাম", "মোবাইল নম্বর"];
  const checkInput = () => {
    if (inputs.current[0].value && inputs.current[1].value !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const setData = () => {
    localStorage.setItem("name", inputs.current[0].value);
    localStorage.setItem("number", inputs.current[1].value);
  };
  return (
    <div className="sign-up">
      <div className="first">
        <div className="img-wrapper">
          <img src="images/talikhata.png" alt="" />
        </div>
        <p>স্বাগতম! মোবাইল নম্বর দিয়ে টালিখাতায় একাউন্ট তৈরি করুন ।</p>
      </div>
      <div className="input-wrapper">
        {placeholders.map((e, i) => (
          <label key={i}>
            <input
              onChange={checkInput}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              type="text"
              required
            />
            <span>{e}</span>
          </label>
        ))}
        <button
          onClick={() => {
            history.push("/password");
            setPassedFirstStep(true);
            setData();
          }}
          disabled={disabled ? true : false}
          className={disabled ? "disabled" : ""}
        >
          পরবর্তী
        </button>
      </div>
      <div className="footer">
        <p>
          পরবর্তীতে যাওয়ার নির্দেশের মাধ্যমে আপনি টালিখাতার{" "}
          <span>শর্তাবলীতে</span> সম্মতি প্রদান করেছেন ।
        </p>
        <p>আমি ইতিমধ্যে টালিখাতা ব্যবহার করেছি ।</p>
      </div>
    </div>
  );
}

export default SignUp;
