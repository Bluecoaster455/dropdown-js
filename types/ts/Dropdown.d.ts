/**
 * Defines `Dropdown` class
 */
export declare class Dropdown {
    /**
     * ID of the dropdown.
     */
    id: string;
    /**
     * Element related to the dropdown.
     */
    $dropdown: HTMLElement;
    /**
     * Reference element for the position of the dropdown.
     */
    $reference: HTMLElement;
    /**
     * Container of the dropdown. The dropdown shall not go
     * outside the container.
     */
    $container: HTMLElement;
    /**
     * Instanciate the Dropdown.
     * @param element Element used as a dropdown.
     */
    constructor(element: HTMLElement);
    /**
     * Move the dropdown to an element.
     * @param element Reference element.
     */
    moveTo(element: HTMLElement, settings: {
        align: string;
    }): void;
    /**
     * Get if the dropdown is currently open.
     */
    isOpen(): boolean;
    /**
     * Show the dropdown at its current location.
     */
    show(): void;
    /**
     * Hide the dropdown.
     */
    hide(): void;
}
