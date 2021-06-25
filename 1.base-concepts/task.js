"use strick"
function solveEquation(a, b, c) {
  let arr = [];
  const d = Math.pow(b, 2) - 4*a*c;

    if (d === 0) {
      const x = -b/(2*a);
      arr.push(x);
  } else if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2*a);
    const x2 = (-b - Math.sqrt(d)) / (2*a);
    arr.push(x1, x2)
  } else {
    return arr;
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
      totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    } else if (Number.isNaN(originalAmount) == true) {
      totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
      
    } else if (Number.isNaN(loanAmount) == true) {
      totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    } else {
      let credit = loanAmount - originalAmount;
      let month;
          month = (date.getFullYear() - new Date().getFullYear()) * 12;
          month -= new Date().getMonth() + 1;
          month += date.getMonth() + 1;
      
      let intRateMonth = (interestRate / 100) / 12;
      let montPay = credit * (intRateMonth + intRateMonth / (Math.pow((1 + intRateMonth),month) - 1));
      totalAmount = parseFloat((montPay * month).toFixed(2));
    }   
  return totalAmount;
}
