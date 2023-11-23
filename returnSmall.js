function smallNum(arr){
    let smallestNum = arr[0];
    for (i=0; i<arr.length; i++){
        if (arr[i]< smallestNum){
            smallestNum = arr[i];
        }
    }
    return smallestNum;
    }
    console.log(smallNum([10,5,3,7,6]));