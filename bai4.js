"use strict";
class vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    print() {
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
        console.log(`ID: ${this.id}`);
    }
}
let vcl = new vehicle("Wave", 2022, "eihdueny", 1);
vcl.print();
