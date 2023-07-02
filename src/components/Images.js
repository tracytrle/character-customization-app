import React from "react";

function Images({ image }) {
  // src="character/body/1.png"
  return (
    <img
      src={image}
      alt=""
      height="60"
      className="img-center"
      style={{ top: "50%" }}
    />
  );
}

export default Images;
