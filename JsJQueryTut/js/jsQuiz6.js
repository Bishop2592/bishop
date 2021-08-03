// TODO : Write a JavaScript program which iterates the integersfrom 1 to 100. But for multiples of three print "FIZZ" instead of the number and for the multiples of five print "BUZZ". <br>
// For numbers which are both multiples of three and five print "FIZZBUZZ"
// Display the result.


for (let a = 1; a <= 100; a++)
if (a % 3 === 0 && a % 5 === 0) {
    document.getElementById('display').innerHTML = 'FIZZBUZZ';
}
else if (a % 3 === 0) {
    document.getElementById('display').innerHTML = 'FIZZ';
}
else if (a % 5 === 0) {
    document.getElementById('display').innerHTML = 'BUZZ';
}
else {
    console.log(a);
}