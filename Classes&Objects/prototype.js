const employee = {
  //making a function to calculate tax for salary
  name: "Akshat",
  salary: 96500,
  id: 101,
  calcTax() {
    console.log("The tax is 10%");
    const rate = 96500 * 0.1;
    console.log("Calculating Tax...");
    console.log("The Tax for Akshat is: ", rate);
  },
};

const Man = {
  Salary: 43000,
};

Man.__proto__ = employee;
