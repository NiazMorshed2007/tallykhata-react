import React, { useRef, useEffect } from "react";
import Header from "./Header";
import { IoBookmarks } from "react-icons/io5";
import { TweenMax, Expo } from "gsap";

function Cash() {
  let thisPage = useRef(null);
  useEffect(() => {
    TweenMax.fromTo(
      thisPage,
      0.6,
      { y: `100%`, ease: Expo.easeOut },
      { y: `0%` }
    );
  }, []);
  return (
    <div
      ref={(el) => {
        thisPage = el;
      }}
      className="cash"
    >
      <Header
        home={false}
        header="ক্যাশ"
        more={true}
        moreIcon={<IoBookmarks />}
        moreText="বিস্তারিত"
        backPath="/home"
      />
    </div>
  );
}

export default Cash;
