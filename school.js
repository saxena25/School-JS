// console.log("hello")
const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ], 
  };

  function countCalculation({departments: {math: { teachers: mathTeachers, students: mathStudents}, history:{ teachers: historyTeachers, students: historyStudents}} }){
    let output = {
        mathTeachersCount: mathTeachers,
        mathStudentsCount: mathStudents,
        historyTeachersCount: historyTeachers,
        historyStudentsCount: historyStudents,
    }
    return output;
  }
  console.log(countCalculation(school))


  function findTopStudents(school, courseName){
    let topStudent = null;
    let topScore = 0;

    for(let i = 0; i < school.students.length; i++){
      let student = school.students[i];
      let score = student.scores[courseName];

      if(score > topScore){
        topStudent = student;
        topScore = score;
      }
    }

      return topStudent;
    }

  console.log(findTopStudents(school, 'science'));

  function addNewDept(school, newDepartment){
    school.departments = {...school.departments, ...newDepartment};
    return school;
  }
  
  let newDept = {
    art: {teachers: 2, students: 50}
  }
  console.log(addNewDept(school, newDept));

  function highestStudentCountDepartment(school){
    highestStudents = 0;
    departmentHighest = '';

    for(let i = 0; i < school.departments.length; i++){
      
    }
  }
  highestStudentCountDepartment(school)
  

  