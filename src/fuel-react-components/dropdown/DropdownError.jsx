import "../../styles/output.css";
import CaretDownIcon from "../../../static/icons/CaretDownIcon";

const DropdownError = () => {
  return (
    <div className="component-container">
      <div id="dropdownDisabled" className="dropdown-container dropdown-error">
        <button className="dropdown-button !p-0">
          <p className="dropdown-placeholder dropdown-error">
            Select a Buyer *
          </p>
          <CaretDownIcon />
        </button>
      </div>
      <p className="dropdown-error-message">Error Message</p>
    </div>
  );
};

export default DropdownError;
