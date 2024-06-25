import { useEffect } from "react";
import "../../styles/output.css";
import CaretDownIcon from "../../../static/icons/CaretDownIcon";

const DropdownNumeric = () => {
  useEffect(() => {
    let numDropdown = document.getElementById("numDropdown");
    let numOptions = document.getElementById("numOptions");

    numDropdown.addEventListener("click", function () {
      numDropdown.classList.toggle("dropdown-active");
      numOptions.classList.toggle("hidden");
    });
  }, []);

  return (
    <div className="component-container !h-[200px] !items-start">
      <div id="numDropdown" className="numeric-dropdown-container">
        <div className="numeric-dropdown">
          <input
            type="text"
            placeholder="25"
            className="numeric-dropdown-input"
          />
          <CaretDownIcon />
        </div>
        <div
          id="numOptions"
          className="numeric-dropdown-options-container hidden"
        >
          <div className="numeric-dropdown-options">25</div>
          <div className="numeric-dropdown-options">50</div>
          <div className="numeric-dropdown-options">75</div>
          <div className="numeric-dropdown-options">100</div>
        </div>
      </div>
    </div>
  );
};

export default DropdownNumeric;
