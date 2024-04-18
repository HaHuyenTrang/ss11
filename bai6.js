"use strict";
class song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    getName() {
        return this.name;
    }
    getLength() {
        return this.length;
    }
    setName(name) {
        this.name = name;
    }
    setLength(length) {
        this.length = length;
    }
}
let s = new song(1, "Hoa lệ", 10);
console.log("tên bài hát:", s.getName());
console.log("độ dìa:", s.getLength());
s.setName("bài hát mới");
s.setLength(200);
console.log(s.getName());
console.log(s.getLength());
