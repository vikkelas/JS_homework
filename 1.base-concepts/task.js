"use strick"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4*a*c;

    if (d < 0) {
      arr=[];
  } else if (d === 0) {
      let x = -b/(2*a);
      arr.push(x);
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2*a);
    let x2 = (-b - Math.sqrt(d)) / (2*a);
    arr.push(x1, x2)
  };

  // код для задачи №1 писать здесь
  return arr; // array
}
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let interestRate = Number(percent);
  let originalAmount = Number(contribution);
  let loanAmount = Number(amount);
    if (Number.isNaN(interestRate) == true) {
      totalAmount = `Параметр "процентная ставка" содержит неправильное значение ${percent}`;
    } else if (Number.isNaN(originalAmount) == true) {
      totalAmount = `Параметр "начальный взнос" содержит неправильное значение ${contribution}`;
    } else if (Number.isNaN(loanAmount) == true) {
      totalAmount = `Параметр "общая стоимость" содержит неправильное значение ${amount}`;
    } else {
      let credit = loanAmount - originalAmount;
      let month;
          month = (date.getFullYear() - new Date().getFullYear()) * 12;
          month -= new Date().getMonth() + 1;
          month += date.getMonth() + 1;
      
      let intRateMonth = (interestRate / 12);
      totalAmount = credit * (Number(intRateMonth) + Number(intRateMonth) / (Math.pow((1 + Number(intRateMonth)),month) - 1))
    }
  // код для задачи №2 писать здесь

  return totalAmount;
}
