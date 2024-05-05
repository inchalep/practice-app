import React from "react";

const Card = (props) => (
  <div>
    <h2>{props.name}</h2>
    <p style={{ fontSize: "30px", color: "yellow" }}>counte:{props.count}</p>
    <p className='title'>{props.phone}</p>
  </div>
);

export default Card;

// function Card(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>counte:{props.count}</p>
//       <p>{props.phone}</p>
//     </div>
//   );
// }

// export default Card;
