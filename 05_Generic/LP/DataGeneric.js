class DataGeneric {
    constructor(data) {
      this.data = data;
    }
  
    PrintData() {
      console.log(`${this.data}`);
    }
  }
  

  function main() {
    const nama = "Satria Ariq Adelard Dompas"; 
    const nim = "2211104033"; 
    const data = new DataGeneric(`${nama} dengan nim : ${nim}`);
    
    data.PrintData();

    console.log("=== Code Execution Successful ===");
  }
  
  main();