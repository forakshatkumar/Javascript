let promise = new Promise((resolve, reject) => {
  console.log("I am a Promise");
  resolve("Success");
});

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data: ", dataId);
      resolve("Success");
    }, 2000);
  });
}
