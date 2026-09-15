function getData(dataId, getnextData) {
  setTimeout(() => {
    console.log("Data: ", dataId);
    if (getnextData) {
      getnextData();
    }
  }, 2000);
}
//callback hell (pyramid of doom)
getData(10, () => {
  getData(20, () => {
    getData(30, () => {
      getData(40);
    });
  });
});
