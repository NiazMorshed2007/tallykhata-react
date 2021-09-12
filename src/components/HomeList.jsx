import React from "react";
import { BiChevronRight } from "react-icons/bi";

function HomeList() {
  return (
    <div className="list">
      <div>
        <div>NZ</div>
        <div>
          <p>Niaz Morshed</p>
          <span>supplier</span>
        </div>
      </div>
      <div>
        <p>৯৬.০০</p>
        <i>
          <BiChevronRight />
        </i>
      </div>
    </div>
  );
}

export default HomeList;
