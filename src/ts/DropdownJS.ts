import { Dropdown } from './Dropdown';
import { DropdownDoesNotExistException } from './exceptions/DropdownDoesNotExistException';
import '../scss/app.scss';

/**
 * Public API for DropdownJS.
 */
export class DropdownJS {

  /**
   * List of instances of dropdowns indexed by Ids.
   */
  public dropdownInstances: Array < Dropdown > = [];

  /**
   * Library main instance.
   */
  constructor() {
    document.body.addEventListener("click", (e) => {
      let element = e.target as HTMLElement;
      let dropdownId = element.getAttribute("dropdown-id");
      let dropdownAlign = element.getAttribute("dropdown-align");

      if (dropdownAlign === null) dropdownAlign = "left";

      if (dropdownId !== null) {
        if (this.isOpen(dropdownId)) {
          this.hide(dropdownId);
        } else {
          this.show(dropdownId, {
            align: dropdownAlign === null ? "left" : dropdownAlign,
            target: element
          });
        }
      }

    })

    document.querySelectorAll("[dropdown]").forEach((dropdown) => {
      dropdown.classList.add("dd-wrapper");
      this.dropdownInstances.push(new Dropdown(dropdown as HTMLElement));
    });

  }

  /**
   * Find a dropdown by its Id.
   */
  find(dropdownId: string): Dropdown {
    return this.dropdownInstances.find(d => d.id === dropdownId);
  }

  /**
   * Get if the dropdown is currently open.
   * @param dropdownId Id of the dropdown.
   */
  isOpen(dropdownId: string): boolean {
    let dropdown = this.find(dropdownId);
    if (dropdown === undefined) {
      throw new DropdownDoesNotExistException(dropdownId);
    }
    return dropdown.isOpen();
  }

  /**
   * Show the dropdown.
   */
  show(dropdownId: string, options ? : {
    align: string,
    target: HTMLElement
  }): Dropdown {
    let dropdown = this.find(dropdownId);

    if (dropdown === undefined) {
      throw new DropdownDoesNotExistException(dropdownId);
    }

    let settings = Object.assign({}, {
      align: "left",
      target: document.body
    }, options);

    dropdown.moveTo(settings.target, settings);
    dropdown.show();
    return dropdown;
  }

  /**
   * Hide the dropdown.
   */
  hide(dropdownId: string): Dropdown {
    let dropdown = this.find(dropdownId);

    if (dropdown === undefined) {
      throw new DropdownDoesNotExistException(dropdownId);
    }

    dropdown.$dropdown.classList.remove("dd-shown");
    dropdown.hide();
    return dropdown;
  }

}