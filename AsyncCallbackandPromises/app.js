function getData(dataId, getnextData) {
  setTimeout(() => {
    console.log("Data: ", dataId);
    if (getnextData) {
      getnextData();
    }
  }, 2000);
}
getData(10, () => {
  getData(20, () => {
    getData(30, () => {
      getData(40);
    });
  });
});
