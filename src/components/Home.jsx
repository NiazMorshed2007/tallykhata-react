import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiFillBook, AiOutlineSearch } from "react-icons/ai";
import {
  HiOutlineCash,
  HiUserAdd,
  HiOutlineMail,
  HiOutlineAdjustments,
  HiDownload,
} from "react-icons/hi";
import {
  MdVisibility,
  MdVisibilityOff,
  MdNotificationsActive,
} from "react-icons/md";
import { GiAlarmClock } from "react-icons/gi";
import { GrYoutube } from "react-icons/gr";
import { MdMoveToInbox } from "react-icons/md";
import Header from "./Header";
import { useHistory } from "react-router";
import HomeList from "./HomeList";

function Home({ authorized, lists }) {
  let history = useHistory();
  const [active, setActive] = useState(0);
  const [totalCustomer, setTotalCustomer] = useState(0);
  const [totalSupplier, setTotalSupplier] = useState(0);
  const [inbox, setInbox] = useState(false);
  const [visibility, setVisibility] = useState(true);
  const whenEmptyItm = [
    {
      txt: "হিসাবের খাতা থেকে কাস্টমার ও সাপ্লায়ার যোগ করুন।",
      icon: <HiUserAdd />,
    },
    {
      txt: "প্রতিটি লেনদেনে ফ্রি এসএমএস এর সুবিধা নিন।",
      icon: <HiOutlineMail />,
    },
    { txt: "তাগাদা মেসেজ পাঠান", icon: <GiAlarmClock /> },
  ];
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
  const handleTotalPeople = () => {
    const filterCustomer = lists.filter((list) => {
      return list.type === "customer";
    });
    const filterSupplier = lists.filter((list) => {
      return list.type === "supplier";
    });
    setTotalCustomer(filterCustomer.length);
    setTotalSupplier(filterSupplier.length);
  };

  useEffect(() => {
    handleTotalPeople();
  }, [lists]);

  if (!authorized) {
    return <Redirect to="sign_up" />;
  }

  return (
    <div className="home">
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
          {lists.length === 0 ? (
            <div className="empty">
              {whenEmptyItm.map((e, i) => (
                <div key={i}>
                  {e.icon}
                  <p>{e.txt}</p>
                </div>
              ))}
              <div>
                <GrYoutube />
                <span>ভিডিও দেখুন</span>
              </div>
            </div>
          ) : (
            <>
              <div className="first">
                <div>
                  <div>
                    <h3>৯৬.০০</h3>
                    <p>মোট পাবো</p>
                  </div>
                  <span>|</span>
                  <div>
                    <h3>০.০০</h3>
                    <p>মোট দেবো</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>আজকের বেচা</p>
                    <span>৯৬.০০</span>
                  </div>
                  <span>|</span>
                  <div>
                    <p>আজকের ক্যাশ</p>
                    <span>০.০০</span>
                  </div>
                </div>
              </div>
              <div className="second">
                <div>
                  <label>
                    <input type="text" required placeholder="খোঁজ" />
                    <i>
                      <AiOutlineSearch />
                    </i>
                  </label>
                  <i>
                    <HiOutlineAdjustments
                      style={{ transform: "rotate(-90deg)" }}
                    />
                  </i>
                  <i
                    onClick={() =>
                      visibility ? setVisibility(false) : setVisibility(true)
                    }
                  >
                    {visibility ? <MdVisibility /> : <MdVisibilityOff />}
                  </i>
                </div>
                <div>
                  <div className="txt">
                    <p>
                      কাস্টমার <span>{totalCustomer}</span>
                    </p>
                    <p>
                      সাপ্লায়ার <span>{totalSupplier}</span>
                    </p>
                  </div>
                  <i>
                    <HiDownload />
                  </i>
                  <div>
                    <i>
                      <MdNotificationsActive />
                    </i>
                    <p>তাগাদা পাঠাই</p>
                  </div>
                  <div>
                    <p>
                      <span>পাবো</span>/দেবো
                    </p>
                  </div>
                </div>
              </div>
              <div className="third">
                <div className="inner-third">
                  <div className="list-wrapper">
                    <HomeList lists={lists} />
                  </div>
                </div>
              </div>
            </>
          )}

          <div
            onClick={() => history.push("/cus-sup")}
            className="add-customer-supplier"
          >
            <HiUserAdd />
            <p>কাস্টমার যোগ করি</p>
          </div>
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
