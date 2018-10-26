
// prompts 1 & 2
var value1 = prompt ('Enter first number')
var value2 = prompt ('Enter second number')

// Create an empty array
var array = []

//Convert strings to numbers
var number1 = parseInt(value1)
var number2 = parseInt(value2)

//Push Numbers to Arrays
array.push(number1)
array.push(number2)

// prompt 3

    

function checkstep() {
while (array[2]==undefined) {
    var value3 = prompt ('Enter step (cannot be zero)')
        if (value3!=0) {
            var number3 = parseInt(value3)
            array.push(number3);
        } else {
            alert("Error! This set cannot equal zero")
        }
    }
}

    checkstep()

    //OUTPUT
    var results = 'The generated array is: ' + byStep() + '<br>'+
                   'The sum is: ' + sum() + '<br>'+
                   'The sum is: ' + dec2bin() 

    //WRITE TO DOCUMENT
    function writeTo(results) {
       var output = document.getElementById('output');
       output.innerHTML = results;
    }
    writeTo(results)

//FUNCTION FOR OUTPUT NEW ARRAY
function byStep() {
    let newArray = []
    let start = array[0]
    let end = array[1]
    let step = array[2]

    for (var i = start; i <= end; i+= step) {
        newArray.push(i)
    }
    return newArray

}

//FUCTION FOR SUM
function sum() {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

//FUNCTION FOR BINARY
function dec2bin(){
    let bicode = []
    for (var i = 0; i < array.length; i++)
    {   
        var z = array[i]
        x = (z >>> 0).toString(2)
        bicode.push(x)

    }    

    return bicode
}

//FUNCTION BINARY
function dec2bin(){ 
    let bincode = []
    for (var i = 0; i < array.length; i++)
    {   
        var z = array[i]
        x = (z >>> 0).toString(2)
        bincode.push(x)

    }    

    return bincode
}