/*Declare variables of different types: string, number, boolean, array, and object.  
   - Use `console.log()` to print their values and types in the browser console.  */

let Jina = "John Mwangi";
console.log(Jina);
let Age = 20;
console.log(Age);
let Is_Student = true;
console.log(Is_Student);

let student = {
    studentinfo:{name:"John Mwangi", age:"20"},
    marks: {maths: 40, science: 30},
    names: ["John", "Mwangi"],
};
console.log(student);
console.log(student.studentinfo);
console.log(student.marks.maths);
console.log(student.names[0]);


/*- Write a simple calculator function that performs addition, subtraction, multiplication, and division using two numbers provided by the user (use `prompt()` for input).  
   - Use arithmetic and comparison operators to validate user input and display appropriate messages.*/

   const calcbtn = document.getElementById("calc");
   calcbtn.addEventListener("click", ()=> {
    let result = Calculator()
    alert("The result is:" + result);
}
);
   
   function Calculator(){
        let No1 = prompt("Enter the first Number:");
        if (No1 == null){
            alert("empty value")
        }
        else
        {
            let No2 = prompt("Enter the second number:")
            if(No2== null){
                alert( "empty value")
            }
            else{
                No1 = parseInt(No1);
                No2 = parseInt(No2);
                let symbol = prompt("Enter a symbol (+, -, *, /):")
                if(symbol !== "*" && symbol !== "-" && symbol !== "+" && symbol !== "/"){
                    alert("Invalid symbol")
                }
                    else{
                        switch(symbol) {
                            case "+" :
                             return No1 + No2;
                            break;

                            case "-" :
                                return No1 - No2;
                                break;

                            case "*" :
                                return No1 * No2;
                                break;

                            case "/" :
                                return No2 !==0 ? No1 / No2 : "not divisible by zero";
                                break;
                        }
                    }
            }
        }

   }

//    - Create a function named `greetUser` that takes a name as a parameter and returns a greeting message. 
//    Display the message in an HTML element.  
document.getElementById("greetBtn").addEventListener("click", ()=>{
    username= prompt("enter your name");
    username = username.toUpperCase();
    greetUser(username);
})
function greetUser(name){
    document.getElementById("greet").textContent = "Hello " + name;
}

// - Ask the user for their age using `prompt()`. Use an `if` statement to check if they are eligible to vote 
// (age >= 18). Display a message indicating their eligibility in an HTML element.  

document.getElementById("vote").addEventListener("click", ()=>
{
    user_age = prompt("Enter your age:")
    user_age = parseInt(user_age)
    if(user_age >= 18)
    {
        document.getElementById('ageresult').textContent = " You are Eligible to Vote"
    }
    else{
        document.getElementById('ageresult').textContent = " You are Ineligible to Vote"
    }
})

// SECTION 7 OF THE ASSIGNMENT

document.getElementById("jsassign").textcontent = "JavaScript in Action!";
let dynamic_div = document.getElementById("dynamic-content");
const newp = document.createElement("p");
newp.textContent = "This content was added dynamically using JavaScript.";
dynamic_div.appendChild(newp);