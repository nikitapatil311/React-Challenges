import React from "react";

export default function Tab({ type, number }) {
  return (
    <div className="tab">
      <strong>
        {type}
        <span> {number} </span>
      </strong>
    </div>
  );
}
