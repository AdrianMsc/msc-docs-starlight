import { useEffect } from "react";
import "../../styles/output.css";
import CaretDownIcon from "../../../static/icons/CaretDownIcon";

const DropdownLabel = () => {
  useEffect(() => {
    let dropdownTwo = document.getElementById("dropdownTwo");
    let dropdownTwoOptions = document.getElementById("dropdownTwoOptions");

    dropdownTwo.addEventListener("click", function () {
      dropdownTwo.classList.toggle("dropdown-active");
      dropdownTwoOptions.classList.toggle("hidden");
    });
  }, []);

  return (
    <div className="component-container !h-[200px] !items-start">
      <div className="dropdown-label">
        <p className="text-nowrap text-black">Label</p>
        <div id="dropdownTwo" className="dropdown-container">
          <button className="dropdown-button !p-0">
            <p className="dropdown-placeholder">Select a Buyer</p>
            <CaretDownIcon />
          </button>
          <div
            id="dropdownTwoOptions"
            className="dropdown-options-container hidden !mt-9"
          >
            <div className="dropdown-option">Buyer 1</div>
            <div className="dropdown-option">Buyer 2</div>
            <div className="dropdown-option">Buyer 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownLabel;
