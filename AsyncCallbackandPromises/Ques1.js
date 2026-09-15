function shop(status, nextStatus) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(status);
      if (nextStatus) {
        nextStatus();
      }
    }, 1000);
  });
}
shop("Order Recieved", () => {
  shop("Payment Done!", () => {
    shop("Order Shipped!");
  });
});
