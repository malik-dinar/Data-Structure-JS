let array = [1, 2, 3, 344, 232, 234, 4, 23, 24];

let result = array.map((val) => val * 2);

console.log(result);



function binarySearch(arr,target){
    let min = 0;
    let max = array.length - 1;
    while(min < max){
        let mid = Math.floor((min +max)/2);
        if(target < array[mid]){
            max = mid - 1;
        }else if(target > array[mid]){
            min = mid + 1;
        }else{
            return mid
        }
    }

    return "element not present in array"
}