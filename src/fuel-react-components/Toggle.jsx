import { useEffect } from "react";
import "../styles/output.css";
import InfoQuestion from "../../static/icons/InfoQuestionIcon";

const Toggle = ({ variant }) => {
  useEffect(() => {
    function updateSliderPosition(toggleContainer) {
      let slider = toggleContainer.querySelector(".msc-triple-toggle-dot");
      let checkedRadio = toggleContainer.querySelector(
        'input[type="radio"]:checked'
      );
      let radioIndex = Array.from(
        checkedRadio.parentNode.parentNode.children
      ).indexOf(checkedRadio.parentNode);
      let positions = ["left-[4px]", "left-1/3", "left-[130px]"];
      slider.className = "msc-triple-toggle-dot " + positions[radioIndex - 1];
    }
    document
      .querySelectorAll(".msc-triple-toggle-container")
      .forEach(function (toggleContainer) {
        toggleContainer
          .querySelectorAll(".msc-triple-toggle-input-label input")
          .forEach(function (radio) {
            radio.addEventListener("change", function () {
              updateSliderPosition(toggleContainer);
            });
          });
        updateSliderPosition(toggleContainer);
      });
  }, []);

  return variant === "tolerance" ? (
    <div className="component-container">
      <fieldset>
        <div className="msc-label-toggle-container">
          <p className="msc-label-triple-toggle">Tolerance</p>
          <InfoQuestion />
          <div className="msc-triple-toggle-container">
            <span id="toleranceDot" className="msc-triple-toggle-dot"></span>
            <label
              htmlFor="allTolerance"
              className="msc-triple-toggle-input-label"
            >
              <input
                type="radio"
                id="allTolerance"
                name="tolerance"
                value="allTolerance"
                className="peer sr-only"
                defaultChecked
              />
              <span className="msc-triple-toggle-text">All</span>
            </label>
            <label htmlFor="plus" className="msc-triple-toggle-input-label">
              <input
                type="radio"
                id="plus"
                name="tolerance"
                value="plus"
                className="peer sr-only"
              />
              <span className="msc-triple-toggle-text">Super</span>
            </label>
            <label htmlFor="minus" className="msc-triple-toggle-input-label">
              <input
                type="radio"
                id="minus"
                name="tolerance"
                value="minus"
                className="peer sr-only"
              />
              <span className="msc-triple-toggle-text">Minus</span>
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  ) : (
    <div className="component-container">
      <fieldset>
        <div className="msc-label-toggle-container">
          <p className="msc-label-triple-toggle">Class</p>
          <InfoQuestion />
          <div className="msc-triple-toggle-container">
            <span id="classNameDot" className="msc-triple-toggle-dot"></span>
            <label htmlFor="allClass" className="msc-triple-toggle-input-label">
              <input
                type="radio"
                id="allClass"
                name="className"
                value="allClass"
                className="peer sr-only"
                defaultChecked
              />
              <span className="msc-triple-toggle-text">All</span>
            </label>
            <label htmlFor="x" className="msc-triple-toggle-input-label">
              <input
                type="radio"
                id="x"
                name="className"
                value="x"
                className="peer sr-only"
              />
              <span className="msc-triple-toggle-text">X</span>
            </label>
            <label htmlFor="zz" className="msc-triple-toggle-input-label">
              <input
                type="radio"
                id="zz"
                name="className"
                value="zz"
                className="peer sr-only"
              />
              <span className="msc-triple-toggle-text">ZZ</span>
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Toggle;
