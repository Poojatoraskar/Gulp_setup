function showAlert(){
   let stat= confirm("Do you really want to finish the exam???");
    if(stat)
        alert("Your exam submitted successfully");
}

function makeAddition(num1, num2){
    console.log("Addition:"+ (num1+num2));
}

/* annonymous functions*/

let testFun=function(){
    console.log("This function is called on mouse over");
}

let testFun1=function(){
    console.log("This function is called on mouse leave");
}
/*Normal function*/ 
function test1(num1,num2){
    let sub=num1+num2;
    return sub;
}
test1(12,12);
/*annonymous function*/ 
let anntest1=function(num1,num2){
    let sub=num1+num2;
    return sub;
}
anntest1(12,12);
/*Arrow function*/ 
let arrowtest1=(num1,num2)=>{
    let sub=num1+num2;
    return sub;
}
arrowtest1(12,12);
let arrowtest2=num=>{
    let cub=num*num*num;
    return cub;
}
let res=arrowtest2(2);
let arrowtest3=num=>console.log(num*num*num)
arrowtest3(3);
let arrowtest4=num=>num*num*num  /* automatically returns the result*/
let result=arrowtest4(4);


let focusFun=()=>console.log("this is function is called on focus....")
let blurFun=()=>console.log("this is function is called on blur event....")

function changeEvent(){
    console.log('Change Event Occurred....');
}
function selectEvent(){
    console.log('Select Event Occurred....');
}