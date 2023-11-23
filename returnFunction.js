// // Create a function that receives an array and returns the sum of all the elements inside that array.
function greatestNum(arr){
let largestNum = 0;
for (i=0; i<arr.length; i++){
    if (arr[i]> largestNum){
        largestNum = arr[i]
    }
}
return largestNum;
}
console.log(greatestNum([2,5,3,7,6]));