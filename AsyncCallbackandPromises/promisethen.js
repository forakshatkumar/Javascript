const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("Success!");
    // reject("Error Detected");
  });
};

getPromise()
  .then((res) => {
    console.log("Promise fulfilled", res);
  })
  .catch((err) => {
    console.log("Rejected", err);
  });
