let age=10;
let can_i_go_to_goa= (age>=18) ? "Yes, you can go to Goa" : "No, you cannot go to Goa";
console.log(can_i_go_to_goa);

let cimode='true';
let browsermode=(cimode=='true')?"Headless":"Not Headless";
console.log(browsermode);

let responsetime=850;
let sla=1000;
let slastatus=(responsetime<=850)?'SLA is met':'SLA is not met';
console.log(`Response time: ${responsetime}ms - ${slastatus}`);//Template literal;

//Nested ternary
age=19;
let can_i_go_to_goa_drink=(age>=18)?((age>=21)?'Can go to goa & drink':'Cango to goa & no drinks'):'Cannot go to goa';
console.log(can_i_go_to_goa_drink);

let temp=35;

let weather=(temp>=30)?((temp>=35)?):

