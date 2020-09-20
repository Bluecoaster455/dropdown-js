import { Dropdown } from './Dropdown';
import './scss/app.scss';
/**
 * Public API for DropdownJS.
 */
declare class DropdownJS {
    /**
     * List of instances of dropdowns indexed by Ids.
     */
    dropdownInstances: Array<Dropdown>;
    /**
     * Initialize DropdownJS
     */
    init(): void;
    /**
     * Find a dropdown by an HTML element that is part of it. If
     * the dropdown doesn't exist, then null is returned.
     * @param element HTML element which is part of a dropdown.
     */
    findByElement(element: HTMLElement): Dropdown | null;
    /**
     * Find a dropdown by its Id.
     */
    find(dropdownId: string): Dropdown | null;
    /**
     * Get if the dropdown is currently open.
     * @param dropdownId Id of the dropdown.
     */
    isOpen(dropdownId: string): boolean;
    /**
     * Show the dropdown.
     */
    show(dropdownId: string, options?: {
        align: string;
        target: HTMLElement;
    }): Dropdown;
    /**
     * Hide the dropdown.
     */
    hide(dropdownId?: string): Dropdown | null;
}
declare const _default: DropdownJS;
export default _default;
