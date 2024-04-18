"use strict";
class department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log(` ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
    }
}
let employees = ["Huyền Trang", "Bảo Châu", "Trang Châu"];
let dt = new department(1, "Hà", employees);
dt.describe();
