import React, { useState } from "react";
import Header from "./Header";
import { IoMdContact } from "react-icons/io";

function CusSup(props) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const category = ["কাস্টমার", "সাপ্লায়ার"];
  const [inputTxt, setInputText] = useState("");
  const placeholders = [
    { txt: "মোবাইল নম্বর", nameInput: false, id: 1 },
    { txt: "পূর্বের বাকি (জের)", nameInput: false, id: 2 },
  ];
  const checkName = (e) => {
    e.target.value !== "" ? setDisabled(false) : setDisabled(true);
  };
  const handleInput = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };
  return (
    <div className="customer-supplier">
      <Header
        home={false}
        more={false}
        backPath="/home"
        header="নতুন কাস্টমার/সাপ্লায়ার"
      />
      <div className="category">
        {category.map((e, i) => (
          <div
            onClick={() => setActiveCategory(i)}
            className={activeCategory === i ? "active" : ""}
            key={i}
          >
            <p>{e}</p>
          </div>
        ))}
      </div>
      <div className="phonebook">
        <IoMdContact />
        <p>ফোনবুক থেকে যোগ করি</p>
      </div>
      <div className="inputs-wrapper">
        <label>
          <input
            onChange={(e) => {
              handleInput(e);
              checkName(e);
            }}
            value={inputTxt}
            type="text"
            required
          />
          <span>সাপ্লায়ারের নাম</span>
        </label>
        {placeholders.map((e, i) => (
          <label key={i}>
            <input type="text" required />
            <span>{e.txt}</span>
          </label>
        ))}
      </div>
      <p>{inputTxt}</p>
      <button
        disabled={disabled ? true : false}
        className={disabled ? "disabled" : ""}
      >
        নিশ্চিত
      </button>
    </div>
  );
}

export default CusSup;
