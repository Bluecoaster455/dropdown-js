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
  public dropdownInstances: Array<Dropdown> = [];

  /**
   * Library main instance.
   */
  constructor() {
    document.body.addEventListener("click", (e) => {
      let element = e.target as HTMLElement;

      // Click a dropdown button.
      let dropdownId = element.getAttribute("dropdown-id");
      
      let dropdown = this.findByElement(element);

      this.dropdownInstances.forEach(d => {
        if(dropdown === null && dropdownId === null || dropdownId !== null && d.id !== dropdownId){
          d.hide();
        }
      })

      if (dropdownId !== null) {
        let dropdownAlign = element.getAttribute("dropdown-align");
        if (dropdownAlign === null) dropdownAlign = "left";
        if (this.isOpen(dropdownId)) {
          this.hide(dropdownId);
        } else {
          this.show(dropdownId, {
            align: dropdownAlign === null ? "left" : dropdownAlign,
            target: element
          });
        }
      }

      // Click an a[href] tag within a dropdown.
      if(dropdown !== null && element.getAttribute("href") !== null && element.tagName === "A"){
        dropdown.hide();
      }

    })

    document.querySelectorAll("[dropdown]").forEach((dropdown) => {
      dropdown.classList.add("dd-wrapper");
      let instance = new Dropdown(dropdown as HTMLElement);

      let containerSelector = dropdown.getAttribute("dropdown-container");
      if(containerSelector != null){
        instance.$container = document.querySelector(containerSelector);
      }
      this.dropdownInstances.push(instance);
    });

  }

  /**
   * Find a dropdown by an HTML element that is part of it. If 
   * the dropdown doesn't exist, then null is returned.
   * @param element HTML element which is part of a dropdown.
   */
  findByElement(element : HTMLElement) : Dropdown {
    if(element.getAttribute("dropdown") == null){
      return element.parentElement == null ? null : this.findByElement(element.parentElement);
    }
    return this.find(element.id);
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
  hide(dropdownId? : string): Dropdown {

    if(dropdownId !== undefined){
      let dropdown = this.find(dropdownId);
  
      if (dropdown === undefined) {
        throw new DropdownDoesNotExistException(dropdownId);
      }
  
      dropdown.$dropdown.classList.remove("dd-shown");
      dropdown.hide();
      return dropdown;
    }
    else{
      this.dropdownInstances.forEach(d => {
        d.hide();
      })
    }

  }

}