import React from "react";

const buttonStyle = {
  backgroundColor: "#4CAF50", // Green
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "background-color 0.3s",
};

const buttonHoverStyle = {
  ...buttonStyle,
  backgroundColor: "#45a049", // Darker green on hover
};

export default function HarshButton() {
  return (
    <>
      <a href="https://www.youtube.com/watch?v=TaoAFaN-GfM" target="_blank">
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
        >
          harsh
        </button>
      </a>
    </>
  );
}
