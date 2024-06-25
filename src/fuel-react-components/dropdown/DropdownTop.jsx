import { useEffect } from "react";
import "../../styles/output.css";
import CaretDownIcon from "../../../static/icons/CaretDownIcon";

const DropdownTop = () => {
  useEffect(() => {
    let dropdownThree = document.getElementById("dropdownThree");
    let dropdownThreeOptions = document.getElementById("dropdownThreeOptions");
    let dropOption = document.getElementById("dropOption");
    let labelTop = document.getElementById("labelTop");
    let dropPlaceholder = document.getElementById("dropPlaceholder");

    dropdownThree.addEventListener("click", function () {
      dropdownThree.classList.toggle("dropdown-active");
      dropdownThreeOptions.classList.toggle("hidden");
    });
    dropOption.addEventListener("click", function () {
      labelTop.classList.toggle("hidden");
      dropPlaceholder.classList.toggle("text-transparent");
    });
  }, []);

  return (
    <div className="component-container !h-[200px] !items-start">
      <div id="dropdownThree" className="dropdown-container">
        <p id="labelTop" className="dropdown-label-top hidden">
          Select a Buyer
        </p>
        <button className="dropdown-button !mx-4 !my-3.5 !p-0">
          <p id="dropPlaceholder" className="dropdown-placeholder">
            Select a Buyer
          </p>
          <CaretDownIcon />
        </button>
        <div
          id="dropdownThreeOptions"
          className="dropdown-options-container hidden !mt-9"
        >
          <div id="dropOption" className="dropdown-option">
            Buyer 1
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownTop;
