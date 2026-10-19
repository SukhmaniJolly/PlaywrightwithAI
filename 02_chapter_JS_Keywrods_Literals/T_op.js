let actualStatuscode=200;
let expectedStatuscode=300;
let tesResult=(actualStatuscode==expectedStatuscode) ? "Test Passed" : "Test Failed";
console.log(tesResult);


let environment="QA";
let baseURL=(environment=="QA") ? "https://qa.example.com" : "https://prod.example.com";
console.log(baseURL);




let age=10;
let permitted_to_drive=(age>=18) ? "Yes, you can drive" : "No, you cannot drive";
console.log(permitted_to_drive);