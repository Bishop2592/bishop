// TODO : Write a JavaScript for loop that will iterate from 0 -15. For each iteratiom, it will check if the current number is odd or even.
    // Display the result.


for (let x=0; x<=15; x++)
if (x === 0) {
    document.getElementById('display').innerHTML = 'number is even';
}
else if (x % 2 === 0) {
    document.getElementById('display').innerHTML = 'number is a even';   
}
else {
    document.getElementById('display').innerHTML = 'number is odd';
}