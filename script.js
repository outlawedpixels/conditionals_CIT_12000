var containerEle = document.body.querySelector(".container")

// First number prompt + error message
var num1 = Number(prompt("Enter your first number."))
  if(isNaN(num1))
  containerEle.innnerHTML = "Input must be a number."

// Second number prompt + error message
else
 {var num2 = Number(prompt("Enter your second number."))}
  if(isNaN(num2))
  containerEle.innerHTML = "Input must be a number"

// Operator prompt + error message
else
{
  sign = prompt("What do you want to do with these two numbers? * , / , + , -")
         
  if(sign !== "+" && sign != "-" && sign !== "*" && sign !== "/"  )
    {containerEle.innerHTML = "Input must be an operator included in the list."}

// Equation action & answer display
     if(sign === "*")
  containerEle.innerHTML = "Your answer is: " + (num1 * num2)
else if(sign === "/")
  containerEle.innerHTML = "Your answer is: " + (num1 / num2)
else if(sign === "+")
  containerEle.innerHTML = "Your answer is: " + (num1 + num2)
else if(sign === "-")
  containerEle.innerHTML = "Your answer is: " + (num1 - num2)
}