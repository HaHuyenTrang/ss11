"use strict";
class student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let std = [];
let std1 = new student(1, 18, "trang@gmail.com");
let std2 = new student(2, 11, "chau@gmail.com");
std.push(std1, std2);
let ftstd = std.filter((std) => {
    return std;
});
console.log(ftstd);
