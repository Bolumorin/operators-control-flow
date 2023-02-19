// FOR NUMBER 3

// When Bolatito inputs 'arts' , it generates arts subjects and general subjects , otherwise it gives other options

let myDepartment = Arts ;


let scienceSubjects = 'Physics , Chemistry , Biology , Technical Drawing';
let socialScienceSubjects = 'Accounting , commerce , Marketing , Geography';
let artsSubjects = 'Government , Economics , Literature , History';
let generalSubjects = '  English , Mathematics';

if (myDepartment == 'Arts') {
    console.log(artsSubjects + ' ' + generalSubjects);
} else if (myDepartment == 'Science') {
    console.log(scienceSubjects + ' ' + generalSubjects);
} else if (myDepartment =='Social Science') {
    console.log(socialScienceSubjects +' ' + generalSubjects);
} else {
    console.log(generalSubjects);
}

// FOR NUMBER 5
 
let num = 20;
let x = 7;
let pwr = x ** 2;
 if (pwr <= num ) {
    console.log('The number  ' + '' +  pwr + '  is the power of 2  nearest to  ' + '' + num);
 } else{
    console.log('I have no idea');
 }

