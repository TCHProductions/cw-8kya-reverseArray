/* Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]*/

function digitize(n) {
    //convert to string
    let toInt = n.toString()
    //split string up into each character
    let theArray = toInt.split("")
    // blank array for after
    let newArray =[]
    // for loop cycling through the string split in reverse
    for (let i = theArray.length -1; i >= 0; i--){
        // adding each iteration through the split string into the blank string starting from back to front
       newArray.push(parseInt(theArray[i]))
  }
  return newArray
  }

  // the example starting code
  digitize(35231)