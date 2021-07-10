function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

};

let student1 = new Student("Jack", "male", 18);
let student2 = new Student("Mike", "male", 20);
let student3 = new Student("Kate", "female", 20);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = [mark];
  }else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined){
    this.marks = [...marks]
  } else{this.marks = [...this.marks, ...marks];
  }  
};

Student.prototype.getAverage = function () {
  let sum = 0;
  this.marks.forEach((item, index) => sum += item);
  let avg = sum/this.marks.length;
  return avg;
};

Student.prototype.exclude = function(reason) {
  delete this.marks; 
  delete this.subject;
  this.excluded = reason;
}
