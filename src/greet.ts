type Params = {
    name: string;
  };
  
  function greet(data: Params) {
    console.log("Hello, " + data.name + "!");
  }
  
  greet({ name: "Alex" });
  