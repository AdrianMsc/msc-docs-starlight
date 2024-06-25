import "../../styles/output.css";
import CaretDownIcon from "../../../static/icons/CaretDownIcon";

const DropdownDisabled = () => {
  return (
    <div className="component-container">
      <div className="dropdown-label dropdown-disabled">
        <p className="text-nowrap">Label</p>
        <div
          id="dropdownDisabled"
          className="dropdown-container dropdown-disabled"
        >
          <button className="dropdown-button dropdown-disabled !p-0">
            <p className="dropdown-placeholder dropdown-disabled">
              Select a Buyer
            </p>
            <CaretDownIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropdownDisabled;
