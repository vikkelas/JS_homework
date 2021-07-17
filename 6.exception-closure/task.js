function parseCount(number){
   if(isNaN(Number.parseInt(number))){
         throw new Error("Невалидное значение")
      } else {
         return Number.parseInt(number)
      }
   }

function validateCount(number){
   try {
      return parseCount(number)
   }
   catch(Error) {
      return Error;
   }
}

// Задача 2
class Triangle {
   constructor (sideA, sideB, sideC){
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
     if (this.sideA + this.sideB < this.sideC || this.sideA + this.sideC < this.sideB || this.sideC + this.sideB < this.sideA){
        const divError = new Error("Треугольник с такими сторонами не существует");
        throw  divError;
     }
   }
   
   getPerimeter () {
      const perimetr = this.sideA + this.sideB + this.sideC;
      return perimetr;
   }

   getArea(){
      const p = this.getPerimeter() / 2;
      const s = + Math.sqrt(p * (p - this.sideA)*(p - this.sideB)*(p - this.sideC)).toFixed(3);
      return s;
   }
}

const otherFigure = {
   getArea() {
      return "Ошибка! Треугольник не существует"
   },

   getPerimeter(){
      return "Ошибка! Треугольник не существует"
   }
}

function getTriangle(sideA, sideB, sideC){
   try{
      const otherTriangel = new Triangle(sideA, sideB, sideC);
      return otherTriangel;
   } catch(Error) {
      return otherFigure;
   }
}