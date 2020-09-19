import { Dropdown } from './Dropdown';
import './scss/app.scss';
/**
 * Public API for DropdownJS.
 */
export declare class DropdownJS {
    /**
     * List of instances of dropdowns indexed by Ids.
     */
    static dropdownInstances: Array<Dropdown>;
    /**
     * Initialize DropdownJS
     */
    static init(): void;
    /**
     * Find a dropdown by an HTML element that is part of it. If
     * the dropdown doesn't exist, then null is returned.
     * @param element HTML element which is part of a dropdown.
     */
    static findByElement(element: HTMLElement): Dropdown;
    /**
     * Find a dropdown by its Id.
     */
    static find(dropdownId: string): Dropdown;
    /**
     * Get if the dropdown is currently open.
     * @param dropdownId Id of the dropdown.
     */
    static isOpen(dropdownId: string): boolean;
    /**
     * Show the dropdown.
     */
    static show(dropdownId: string, options?: {
        align: string;
        target: HTMLElement;
    }): Dropdown;
    /**
     * Hide the dropdown.
     */
    static hide(dropdownId?: string): Dropdown;
}
//# sourceMappingURL=index.d.ts.map