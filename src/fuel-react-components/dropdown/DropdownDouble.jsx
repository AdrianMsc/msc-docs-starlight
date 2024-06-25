import { useEffect } from "react";
import "../../styles/output.css";
import CaretDownIcon from "../../../static/icons/CaretDownIcon";

const DropdownDouble = () => {
  useEffect(() => {
    let doubleDropdown = document.getElementById("double-dropdown");
    let doubleOptions = document.getElementById("double-options");

    doubleDropdown.addEventListener("click", function () {
      doubleDropdown.classList.toggle("double-dropdown-active");
      doubleOptions.classList.toggle("hidden");
    });
  }, []);

  return (
    <div className="component-container !items-start !h-[300px]">
      <div id="double-dropdown" className="msc-double-dropdown-container">
        <button className="dropdown-button !p-0">
          <div className="text-left">
            <p className="text-sm">
              Est. <b>Wed, Apr 03</b> from PA
            </p>
            <p className="text-xs">Standard UPS Ground</p>
          </div>
          <CaretDownIcon />
        </button>
        <div
          id="double-options"
          className="double-dropdown-options-container hidden !mt-14"
        >
          <div className="double-dropdown-option text-left">
            <p className="text-sm">
              Est. <b>Thu, Apr 04</b> from PA
            </p>
            <p className="text-xs">UPS Ground Freight Saver</p>
          </div>
          <div className="double-dropdown-option text-left">
            <p className="text-sm">
              Est. <b>Wed, Apr 03</b> from PA
            </p>
            <p className="text-xs">1 Day UPS Air (Red)</p>
          </div>
          <div className="double-dropdown-option text-left">
            <p className="text-sm">
              Est. <b>Wed, Apr 03</b> from PA
            </p>
            <p className="text-xs">1 Day UPS (Early AM)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownDouble;
