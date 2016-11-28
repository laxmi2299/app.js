
var express = require('express')
var app = express()

app.get('/', function (req, res) {
   res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(students);
})
var students ={student:[]}
var student = function (age, name) {
  this.age = age;
  this.name = name;

  this.get_age = function () {
    return this.age;
  }
  this.get_name = function () {
    return this.name;
  }
  this.set_age = function (age) {
    this.age = age;
  }
  this.set_name = function (name) {
    this.name = name;
  }
}

students.student.push(new student(20, "Audrey Hepburn"));
students.student.push(new student(19, "Walt Disney"));
students.student.push(new student(18, "Neale Donald"));
students.student.push(new student(23, "John Smith"));
students.student.push(new student(15, "Sara Smith"));


//var students = [{students :
  //[{ name : 'Audrey Hepburn', age : 20},
  //{ name : 'Walt Disney', age : 21},
  //{ name : 'Neale Donald', age : 15}]}
//];

app.listen(3001, function () {
  console.log('Example app listening on port 3001---!')
});