console.log(this);

var person = {
  name: "murat",
  surname: "turkay",
  age: 21,
  calculate10YearsAge: function () {
    console.log("10YearsAge", this);
    return this.age + 10;
  },
  calculate20yearsAge: () => {
    console.log("20yearsAge", this);
    return this.person.age + 20;
  },
};

var years10later = person.calculate10YearsAge();
var years20later = person.calculate20yearsAge();

console.log(years10later, years20later);
