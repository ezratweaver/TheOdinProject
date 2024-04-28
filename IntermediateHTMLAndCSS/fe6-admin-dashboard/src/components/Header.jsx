import React from "react";
import Icon from "@mdi/react";
import { mdiBellRingOutline, mdiMagnify } from "@mdi/js";
import pic1 from "../images/pic1.jpg";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexShrink: 0,
        justifyContent: "space-between",
        fontFamily: "Roboto-Medium",
        fontSize: "20px",
        marginInline: '40px',
     }}
    >

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          paddingBlock: "10px",
        }}
      >
        <Icon path={mdiMagnify} size={1} />
        <input
          type="text"
          name="search"
          style={{
            border: 0,
            backgroundColor: "#e2e8f0",
            width: "500px",
            paddingBlock: "6px",
            borderRadius: "11px",
            fontSize: "14px",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Icon path={mdiBellRingOutline} size={1} />
        <img
          src={pic1}
          style={{ height: "50px", width: "50px", borderRadius: "100px" }}
        />
        Morgan Okley
      </div>
    </div>
  );
};

export default Header;
