import React, { useState } from "react";
import { Redirect } from "react-router";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiFillBook } from "react-icons/ai";
import { HiOutlineCash } from "react-icons/hi";
import { MdMoveToInbox } from "react-icons/md";
import Header from "./Header";

function Home({ authorized }) {
  const [active, setActive] = useState(0);
  const footerItems = [
    { txt: "টালি", icon: <AiFillBook /> },
    { txt: "ক্যাশ", icon: <HiOutlineCash /> },
    { txt: "ইনবক্স", icon: <MdMoveToInbox /> },
  ];
  if (!authorized) {
    return <Redirect to="sign_up" />;
  }

  return (
    <div className="main">
      <Header
        home={true}
        header={
          localStorage.getItem("name") !== null
            ? localStorage.getItem("name")
            : ""
        }
        more={true}
        moreIcon={<BsFillQuestionCircleFill />}
        moreText="হেল্প"
      />
      <div className="main"></div>
      <div className="footer">
        {footerItems.map((e, i) => (
          <div
            onClick={() => setActive(i)}
            className={active === i ? "active" : ""}
            key={i}
          >
            {e.icon}
            <p>{e.txt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
