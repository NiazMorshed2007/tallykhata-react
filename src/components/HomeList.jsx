import React from "react";
import { BiChevronRight } from "react-icons/bi";

function HomeList(props) {
  return (
    <>
      {props.lists.map((list) => (
        <div key={list.id} className="list">
          <div>
            <div>NZ</div>
            <div>
              <p>{list.text}</p>
              {list.type === "supplier" ? <span>সাপ্লায়ার</span> : ""}
            </div>
          </div>
          <div>
            <p>৯৬.০০</p>
            <i>
              <BiChevronRight />
            </i>
          </div>
        </div>
      ))}
    </>
  );
}

export default HomeList;
