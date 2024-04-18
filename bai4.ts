class vehicle {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;
  
    constructor(name: string, year: number, company: string, id: number) {
      this.name = name;
      this.year = year;
      this.company = company;
      this.id = id;
    }
  
    print(): void {
      console.log(`Name: ${this.name}`);
      console.log(`Year: ${this.year}`);
      console.log(`Company: ${this.company}`);
      console.log(`ID: ${this.id}`);
    }
  }
  
  let vcl = new vehicle("Wave", 2022, "eihdueny", 1);
  vcl.print();