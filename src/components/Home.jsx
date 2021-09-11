import React, { useState } from "react";
import { Redirect } from "react-router";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiFillBook } from "react-icons/ai";
import { HiOutlineCash } from "react-icons/hi";
import { MdMoveToInbox } from "react-icons/md";
import Header from "./Header";
import { useHistory } from "react-router";

function Home({ authorized }) {
  let history = useHistory();
  const [active, setActive] = useState(0);
  const [inbox, setInbox] = useState(false);
  const footerItems = [
    {
      txt: "টালি",
      icon: <AiFillBook />,
      func: () => {
        setInbox(false);
      },
    },
    {
      txt: "ক্যাশ",
      icon: <HiOutlineCash />,
      func: () => {
        history.push("/cash");
      },
    },
    {
      txt: "ইনবক্স",
      icon: <MdMoveToInbox />,
      func: () => {
        setInbox(true);
      },
    },
  ];
  if (!authorized) {
    return <Redirect to="sign_up" />;
  }

  return (
    <div className="main">
      <Header
        inbox={inbox}
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
      {!inbox ? (
        <div className="main">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          dignissimos exercitationem aperiam vero at deserunt culpa nam sapiente
          aliquam ducimus. Suscipit quibusdam, quod temporibus eum dicta
          quisquam cumque reprehenderit ab?
        </div>
      ) : (
        ""
      )}
      <div className="footer">
        {footerItems.map((e, i) => (
          <div
            onClick={() => {
              setActive(i);
              e.func();
            }}
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
