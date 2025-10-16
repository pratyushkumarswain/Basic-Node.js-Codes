// const addition = function (a,b){
  //  return a+b;
// }
// console.log(addition(10,15))

const person = {
    name: "Pratyush",
    Age: "20",
    occupation: "Student",
    city: "Bhubaneswar"
};

person.age = 21;
person.city = "Paradeep";
console.log(person);

const persontwo = {
    salary : "30000",
    qualification : "B-tech"
}

const result = {
    name: person.name,
    Age:  person.Age,
    salary: persontwo.salary,
    qualification: persontwo.qualification
};

console.log(result);