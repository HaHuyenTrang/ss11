class Vehicle{
    name:string
    year:number
    company:string
    constructor(name:string,year:number,company:string){
        this.name=name
        this.year=year
        this.company=company
    }
        get getName(): string {
        return this.name;
        }
    
        set setName(newName: string) {
        this.name = newName;
        }
    
        get getYear(): number {
        return this.year;
        }
    
        get getCompany(): string {
        return this.company;
        }
}

let car = new Vehicle("oto", 2019, "maybach s680");
let car1 = new Vehicle("moto", 2024, "wave");

console.log(car.getName);
console.log(car.getYear);
console.log(car.getCompany);

console.log(car1.getName);
console.log(car1.getYear);
console.log(car1.getCompany);


