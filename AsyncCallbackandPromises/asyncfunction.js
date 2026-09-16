function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data1");
      resolve("Success");
    }, 4000);
  });
}
console.log("fetching details...");
let p1 = asyncFunc();
p1.then((res) => {
  console.log(res);
});
