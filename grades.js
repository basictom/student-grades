// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.
//
// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript
//
// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log to output the following criteria:
//
// How many of each grade?

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

for(var i=0; i< scores.length; i++) {
  if ((scores[i] >= 50) && (scores[i] <= 60)){
    gradeF += 1;
  }else if((scores[i] >= 61) && (scores[i] <= 70)){
    gradeD += 1;
  }else if((scores[i] >= 71) && (scores[i] <= 80)){
    gradeC += 1;
  }else if((scores[i] >= 81) && (scores[i] <= 90)){
    gradeB += 1;
  }else if((scores[i] >= 91) && (scores[i] <= 100)){
    gradeA += 1;
  }else{
    alert("No grades here.");
  }
};
console.log(scores);


// What is the lowest grade?
// What is the highest grade?
