class song {
    public readonly id: number;
    private name: string;
    private length: number;
  
    constructor(id: number, name: string, length: number) {
      this.id = id;
      this.name = name;
      this.length = length;
    }
  
    getName(): string {
      return this.name;
    }
  
    getLength(): number {
      return this.length;
    }
  
    setName(name: string): void {
      this.name = name;
    }
  
    setLength(length: number): void {
      this.length = length;
    }
  }
  
  let s = new song(1, "Hoa lệ", 10);
  console.log("tên bài hát:", s.getName());
  console.log("độ dìa:", s.getLength());
  
  s.setName("bài hát mới");
  s.setLength(200);
  
  console.log( s.getName());
  console.log( s.getLength());