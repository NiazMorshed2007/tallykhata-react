import React, { useState } from "react";
import Header from "./Header";
import { IoMdContact } from "react-icons/io";

function CusSup(props) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const category = ["কাস্টমার", "সাপ্লায়ার"];
  const [inputTxt, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [debt, setDebt] = useState("");

  const checkName = (e) => {
    e.target.value !== "" ? setDisabled(false) : setDisabled(true);
  };
  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  const handleOnlyNumber = (e) => {
    if (/\D/g.test(e.target.value))
      e.target.value = e.target.value.replace(/\D/g, "");
  };
  const handleNumberInput = (e) => {
    setInputNumber(e.target.value);
  };

  const handleDebt = (e) => {
    setDebt(e.target.value);
  };

  const handleAdd = () => {
    if (inputTxt !== "") {
      props.setLists([
        {
          text: inputTxt,
          number: inputNumber,
          debt: debt,
          id: Math.random() * 10000,
          type: activeCategory === 0 ? "customer" : "supplier",
        },
        ...props.lists,
      ]);
    }
    setInputText("");
    setInputNumber("");
    setDebt("");
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
          <span>
            {activeCategory === 0 ? "কাস্টমারের নাম" : "সাপ্লায়ারের নাম"}
          </span>
        </label>

        <label>
          <input
            inputMode="tel"
            onChange={(e) => {
              handleOnlyNumber(e);
              handleNumberInput(e);
            }}
            type="text"
            required
          />
          <span>মোবাইল নম্বর</span>
        </label>
        <label>
          <input
            inputMode="tel"
            onChange={(e) => {
              handleOnlyNumber(e);
              handleDebt(e);
            }}
            type="text"
            required
          />
          <span>পূর্বের বাকি (জের)</span>
        </label>
      </div>
      <p>{inputTxt}</p>
      <button
        onClick={() => handleAdd()}
        disabled={disabled ? true : false}
        className={disabled ? "disabled" : ""}
      >
        নিশ্চিত
      </button>
    </div>
  );
}

export default CusSup;
