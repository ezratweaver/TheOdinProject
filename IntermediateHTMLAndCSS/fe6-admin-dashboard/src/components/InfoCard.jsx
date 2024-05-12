import React from "react";

const InfoCard = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "400px",
        height: "230px",
        minHeight: "280px",
        maxWidth: "280px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        boxShadow: "2px 4px 4px -5px black",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          listStyle: 'none'
        }}
      >
      </ul>
    </div>
  );
};

export default InfoCard;
