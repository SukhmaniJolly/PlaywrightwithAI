let score=20;

switch(true)
{
case(score>=90 && score<=100):
    console.log("Grade: A");
    break;
case(score>=80 && score<90):
    console.log("Grade: B");
    break;
case(score>=70 && score<80):
    console.log("Grade: C");
    break;
case(score>=60 && score<70):
    console.log("Grade: D");
    break;
case(score<60):
    console.log("Grade: F");
    break;
case(score>100 || score<0):
    console.log("Invalid score. Please enter a score between 0 and 100.");
}