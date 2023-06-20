//import { ReactComponent as StarFilled } from "./icons/star-filled.svg";
import { ReactComponent as Star } from "./icons/star.svg";
//import { useState } from "react";

// const [button, buttonToggle] = useState(false);

// function toggle(){
//     buttonToggle(!button);
// }

export default function Entries({ date, title, paragraph }) {
  return (
    <div>
      <Star />
      {date}
      <div className="entries">
        <h4>{title}</h4>
        <div>
          <p>{paragraph}</p>
          <hr />
        </div>
      </div>
    </div>
  );
}
