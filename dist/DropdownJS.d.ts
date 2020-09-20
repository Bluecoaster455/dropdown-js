import { Dropdown } from './Dropdown';
import './scss/app.scss';
export declare class DropdownJS {
    static dropdownInstances: Array<Dropdown>;
    static init(): void;
    static findByElement(element: HTMLElement): Dropdown | null;
    static find(dropdownId: string): Dropdown | null;
    static isOpen(dropdownId: string): boolean;
    static show(dropdownId: string, options?: {
        align: string;
        target: HTMLElement;
    }): Dropdown;
    static hide(dropdownId?: string): Dropdown | null;
}
