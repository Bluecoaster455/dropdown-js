export class DropdownDoesNotExistException {
    public message : string; 
    constructor(dropdownId : string){
        this.message = `[DropdownJS] Dropdown Id '${dropdownId}' does not exist!`;
    }
}