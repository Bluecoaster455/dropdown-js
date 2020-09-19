import { DropdownJSException } from "./DropdownJSException";

export class DropdownDoesNotExistException extends DropdownJSException {
    constructor(dropdownId : string){
        super(`[DropdownJS] Dropdown Id '${dropdownId}' does not exist!`);
    }
}