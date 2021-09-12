import React, { useState } from "react";
import Header from "./Header";
import { IoMdContact } from "react-icons/io";

function CusSup({ cusSupName, setCusSupName }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const category = ["কাস্টমার", "সাপ্লায়ার"];
  const placeholders = [
    { txt: "সাপ্লায়ারের নাম", nameInput: true },
    { txt: "মোবাইল নম্বর", nameInput: false },
    { txt: "পূর্বের বাকি (জের)", nameInput: false },
  ];
  const checkName = (e) => {
    e.target.value !== "" ? setDisabled(false) : setDisabled(true);
  };
  const handleInput = (e) => {
    setCusSupName(e.target.value);
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
        {placeholders.map((e, i) => (
          <label key={i}>
            <input
              onChange={(event) => {
                if (e.nameInput) {
                  handleInput(event);
                  checkName(event);
                }
              }}
              value={e.nameInput ? cusSupName : ""}
              type="text"
              required
            />
            <span>{e.txt}</span>
          </label>
        ))}
      </div>
      <p>{cusSupName}</p>
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
