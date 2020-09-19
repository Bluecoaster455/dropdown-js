/**
 * Defines `Dropdown` class
 */
export class Dropdown {

  /**
   * ID of the dropdown.
   */
  public id : string;

  /**
   * Element related to the dropdown.
   */
  public $dropdown : HTMLElement;

  /**
   * Reference element for the position of the dropdown.
   */
  public $reference : HTMLElement;

  /**
   * Container of the dropdown. The dropdown shall not go
   * outside the container.
   */
  public $container : HTMLElement;

  /**
   * Instanciate the Dropdown.
   * @param element Element used as a dropdown.
   */
  constructor(element : HTMLElement) {
    this.$dropdown = element;
    this.id = element.id;
  }

  /**
   * Move the dropdown to an element.
   * @param element Reference element.
   */
  moveTo(element : HTMLElement, settings : { align : string }) {
    this.$reference = element;

    let rectButton = this.$reference.getClientRects()[0];
    let rectDropdown = this.$dropdown.getClientRects()[0];
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let left = rectButton.left, top = rectButton.top;
    top += rectButton.height + 5;

    switch (settings.align) {
      case "left":
        if (left + rectDropdown.width + 20 > windowWidth) {
          left = windowWidth - rectDropdown.width - 20;
        }
        break;
      case "right":
        left -= rectDropdown.width - rectButton.width;
        if (left < 5) {
          left = 5;
        }
        break;
    }

    this.$dropdown.style.top = top + "px";
    this.$dropdown.style.left = left + "px";
  }

  /**
   * Get if the dropdown is currently open.
   */
  isOpen() {
    return this.$dropdown.classList.contains("dd-shown");
  }

  /**
   * Show the dropdown at its current location.
   */
  show() {
    this.$dropdown.classList.add("dd-shown");
  }

  /**
   * Hide the dropdown.
   */
  hide() {
    this.$dropdown.classList.remove("dd-shown");
  }

}