//  let n=5;
//  for(let i=1;i<=n;i++){
//         console.log("Hello", i);
//  }
//  let args=process.argv;
//  for(let i=2;i<args.length;i++){
//         console.log("Welcome",args[i]);
//  }
const math=require("./math");
console.log(math.sum(2,3));
console.log(math.sub(5,2));
console.log(math.g);
console.log(math.PI);

require("./Fruits");
