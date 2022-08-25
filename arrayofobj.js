let studentRecords = [{ name: 'John', id: 123, marks: 98 }, { name: 'Baba', id: 101, marks: 23 }, { name: 'yaga', id: 200, marks: 45 }, { name: 'Wick', id: 115, marks: 75 }];
// Ques 1 : We are interested in retrieving only the name of the students and all the names should be in caps.['JOHN', 'BABA', 'YAGA', 'WICK']
console.log(studentRecords[0].name.toUpperCase());
console.log(studentRecords[1].name.toUpperCase());
console.log(studentRecords[2].name.toUpperCase());
console.log(studentRecords[3].name.toUpperCase());

//Ques 2: Suppose we have the same dataset as above but this time we want to get the details of // students who scored more than 50 marks. // [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]

let data = [];
for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].marks > 50) {
        data.push(Object.assign(studentRecords[i]));
    }
}
console.log(data);

// Ques 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let students = [];
for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].id > 120 && studentRecords[i].marks > 50) {
        students.push(Object.assign(studentRecords[i]));
    }
}
console.log(students);

// Ques 4: Consider the same scenario we have discussed above, but this time we would like to know // the sum total of the marks of the students.
let total = 0;
for (i = 0; i <= 3; i++) {
    total = total + studentRecords[i].marks;
}
console.log(total);
// Ques 5: This time we want to get only the names of the students who scored more than 50 marks // from the same dataset used above.
for (i = 0; i <= studentRecords.length; i++) {
    if (studentRecords[i].marks > 50) {
        console.log(studentRecords[i].name);
    }
}
console.log(names);

// Ques 6: This time we are required to print the sum of marks of the students with id > 120.
let sum = 0;
for (i = 0; i <= studentRecords.length; i++) {
    if (studentRecords[i].id > 120) {
        sum = sum + studentRecords[i].marks;
    }
}
console.log(sum);
// Ques 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
let totalmarks = 0;

for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].marks < 50) {
        totalMarks += studentRecords[i].marks + 15;
    }
}

console.log(totalmarks);
// Create 6 objects,each object will have name, class, roll no as properties.Store these objects in an array of objects.
let studentOne = {
    name: "deepika",
    rollno: 01,
    class: "DIPLOMA"
}
let studentTwo = {
    name: "deepu",
    rollno: 02,
    class: "DIPLOMA"
}
let studentThree = {
    name: "deepa",
    rollno: 03,
    class: "DIPLOMA"
}
let studentFour = {
    name: "ammu",
    rollno: 04,
    class: "DIPLOMA"
}
let studentFive = {
    name: "DIPLOMA",
    rollno: 05,
    class: "DIPLOMA"
}
let studentSix = {
    name: "YADAV",
    rollno: 06,
    class: "DIPLOMA"
}

let Students = [studentOne, studentTwo, studentThree, studentFour, studentFive, studentSix];
console.log(Students);