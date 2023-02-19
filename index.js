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

