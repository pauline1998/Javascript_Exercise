// Create a function that combines two arrays into one single array. 
// 	Use the following arrays:
// 	arrange = [a,b,c,d]
// 	array to = [e,f,g]

function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
const arrange = ['a', 'b', 'c','d'];
const arrayTo = ['e', 'f', 'g'];
const combinedArray = combineArrays(arrange, arrayTo);
console.log(combinedArray);
