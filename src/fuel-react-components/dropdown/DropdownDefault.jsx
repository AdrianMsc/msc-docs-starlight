import { useEffect } from "react";
import "../../styles/output.css";
import CaretDownIcon from "../../../static/icons/CaretDownIcon";

const DropdownDefault = () => {
  useEffect(() => {
    let dropdown = document.getElementById("dropdown");
    let options = document.getElementById("options");

    dropdown.addEventListener("click", function () {
      dropdown.classList.toggle("dropdown-active");
      options.classList.toggle("hidden");
    });
  }, []);

  return (
    <div className="component-container !h-[200px] !items-start">
      <div id="dropdown" className="dropdown-container">
        <button className="dropdown-button !p-0">
          <p className="dropdown-placeholder">
            Select a Buyer <span className="text-red-600">*</span>
          </p>
          <CaretDownIcon />
        </button>
        <div id="options" className="dropdown-options-container hidden !mt-9">
          <div className="dropdown-option">Buyer 1</div>
          <div className="dropdown-option">Buyer 2</div>
          <div className="dropdown-option">Buyer 3</div>
        </div>
      </div>
    </div>
  );
};
export default DropdownDefault;
