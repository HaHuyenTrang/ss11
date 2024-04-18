class department {
    public readonly id: number;
    private name: string;
    private employees: string[];
  
    constructor(id: number, name: string, employees: string[]) {
      this.id = id;
      this.name = name;
      this.employees = employees;
    }
  
    describe(): void {
      console.log(` ID: ${this.id}`);
      console.log(`Name: ${this.name}`);
    }
  }
  
  let employees: string[] = ["Huyền Trang", "Bảo Châu", "Trang Châu"];
  let dt = new department(1, "Hà", employees);
  dt.describe();