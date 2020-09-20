export declare class Dropdown {
    id: string;
    $dropdown: HTMLElement;
    $reference: HTMLElement;
    $container: HTMLElement;
    constructor(element: HTMLElement);
    moveTo(element: HTMLElement, settings: {
        align: string;
    }): void;
    isOpen(): boolean;
    show(): void;
    hide(): void;
}
