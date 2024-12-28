import { useState } from "react";
import { FaApple } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import "./style.css";

const Header = (props) => {
  const { isVisible } = props;
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    "Apple Watch Series 10",
    "Apple Watch Hermès Series 10",
    "Apple Watch SE",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <div className="title-container">
        <FaApple size={23} />
        <h2 className="header-title">WATCH</h2>
      </div>

      <div className={`dropdown content ${isVisible ? "visible" : "hidden"}`}>
        <button
          type="button"
          className="dropdown-btn"
          style={{ display: isVisible ? "block" : "none" }}
          onClick={toggleDropdown}
        >
          Collections <FaChevronDown size={12} />
        </button>
      </div>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <>
              <li key={index}>{option}</li>
              <hr />
            </>
          ))}
        </ul>
      )}

      <div className={`content ${isVisible ? "visible" : "hidden"}`}>
        <button
          type="button"
          className="get-started save-btn"
          style={{ display: isVisible ? "block" : "none" }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Header;
