import React from "react";
import Icon from "@mdi/react";
import { mdiBellRingOutline, mdiMagnify } from "@mdi/js";
import pic1 from "../images/pic1.jpg";

const HeaderButton = ({ name }) => {
  return (
    <button
      style={{
        backgroundColor: "#1992d4",
        border: "none",
        color: "white",
        paddingBlock: "11px",
        paddingInline: "30px",
        borderRadius: "18px",
        fontFamily: "Roboto-Bold",
        fontSize: "14px",
      }}
    >
      {name}
    </button>
  );
};

const Header = () => {
  return (
    <div style={{ paddingBlock: '17px', boxShadow: '0 4px 4px -5px black' }}>
      <div
        style={{
          display: "flex",
          flexShrink: 0,
          justifyContent: "space-between",
          fontFamily: "Roboto-Medium",
          fontSize: "20px",
          marginInline: "40px",
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

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginInline: '25px'
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <img
            src={pic1}
            style={{ height: "70px", width: "70px", borderRadius: "100px" }}
          />
          <div
            style={{
              fontFamily: "Roboto-Bold",
              fontWeight: 500,
              display: "flex",
              flexDirection: "column",
              gap: "3px",
            }}
          >
            <div style={{ fontSize: "13px" }}>Hi There,</div>
            <div style={{ fontSize: "24px" }}>Morgan Okley (@morgan)</div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '25px',
          alignItems: 'center'
        }}>
          <HeaderButton name="New" />
          <HeaderButton name="Upload" />
          <HeaderButton name="Share" />
        </div>
      </div>
    </div>
  );
};

export default Header;
