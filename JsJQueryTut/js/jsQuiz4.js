// TODO : Write a JavaScript conditional statement to find the largest of five numbers.
// Display the result.

// ES5 FUNCTION
function findTheLargestOfFiveNumbers(num1, num2, num3, num4, num5)

    if (num1>num2 && num1>num3 && num1>num4 && num1>num5)
    {
    document.getElementById('display').innerHTML = num1;
        }
    else if (num2>num1 && num2>num3 && num2>num4 && num2>num5)
    {
    document.getElementById('display').innerHTML = num2;
    }
    else if (num3>num1 && num3>num2 && num3>num4 && num3>num5)
    {
    document.getElementById('display').innerHTML = num3;
    }
    else if (num4>num1 && num4>num2 && num4>num3 && num4>num5)
    {
    document.getElementById('display').innerHTML = num4;
    }
    else
    {
    document.getElementById('display').innerHTML = num5;
    }

findTheLargestOfFiveNumbers( -5, -2, -6, 0, -1)