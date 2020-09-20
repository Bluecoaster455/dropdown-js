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
    this.$reference = document.body;
    this.$container = document.body;
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

    let containerBox = {
      left: 5,
      top: 5,
      width: window.innerWidth - 10,
      height: window.innerHeight - 10
    }

    if(this.$container !== undefined){
      let containerRect = this.$container.getClientRects()[0];
      containerBox.left = containerRect.left;
      containerBox.top = containerRect.top;
      containerBox.width = containerRect.width;
      containerBox.height = containerRect.height;
    }

    let left = rectButton.left, top = rectButton.top + rectButton.height;
    if(settings.align === 'right') left -= rectDropdown.width - rectButton.width;
    
    switch (settings.align) {
      case "left":
        let maxleft = containerBox.left + containerBox.width - rectDropdown.width;
        if (left > maxleft) {
          left = maxleft;
        }
        break;
      case "right":
        if (left < containerBox.left) {
          left = containerBox.left;
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